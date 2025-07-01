import { db } from "./firebase";
import {
  collection,
  query,
  where,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  increment,
  serverTimestamp
} from "firebase/firestore";
import { useEffect, useState } from "react";

// Submit a vote if user hasn't already voted for the option
export const submitVote = async (userId, optionId) => {
  const voteRef = collection(db, "votes");

  // Check if vote already exists
  const q = query(voteRef, where("userId", "==", userId), where("optionId", "==", optionId));
  const existing = await getDocs(q);

  if (!existing.empty) {
    throw new Error("You've already voted for this option.");
  }

  // Add vote
  await addDoc(voteRef, {
    userId,
    optionId,
    createdAt: serverTimestamp()
  });

  // Increment vote count in 'options'
  const optionDocRef = doc(db, "options", optionId);
  await updateDoc(optionDocRef, {
    voteCount: increment(1)
  });
};

export const useVoteStatus = (currentUser, optionId) => {
  const [voted, setVoted] = useState(false);

  useEffect(() => {
    const checkVoted = async () => {
      if (!currentUser || !currentUser.uid || !optionId) return;
      const voteRef = collection(db, "votes");
      const q = query(
        voteRef,
        where("userId", "==", currentUser.uid),
        where("optionId", "==", optionId)
      );
      const existing = await getDocs(q);
      if (!existing.empty) setVoted(true);
    };
    checkVoted();
  }, [currentUser, optionId]);

  return voted;
};
