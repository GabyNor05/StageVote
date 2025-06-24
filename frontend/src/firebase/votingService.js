// src/services/votingService.js
import { db } from "./firebase";
import { collection, addDoc, updateDoc, doc, getDocs } from "firebase/firestore";

export const submitVote = async (optionId, userId) => {
  const voteRef = collection(db, "votes");
  await addDoc(voteRef, {
    optionId,
    userId,
    createdAt: new Date()
  });
};

export const getAllVotes = async () => {
  const votesSnapshot = await getDocs(collection(db, "votes"));
  return votesSnapshot.docs.map((doc) => doc.data());
};
