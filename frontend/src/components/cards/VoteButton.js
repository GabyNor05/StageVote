import React, { useState } from "react";
import { useAuth } from "../../firebase/contexts/authContext";
import { submitVote } from "../../firebase/votingService";
import Button from "../Button";
import "./cards.css";

const VoteButton = ({ optionId, voted, refreshVotes }) => {
  const { currentUser } = useAuth();
  const [error, setError] = useState("");

  const handleVote = async () => {
    try {
      await submitVote(currentUser.uid, optionId);
      await refreshVotes(); // Re-fetch all votes after voting
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <Button
        text={voted ? "Voted" : "Vote"}
        onClick={handleVote}
        width="100px"
        height="40px"
        disabled={voted || !currentUser || !optionId}
        className={voted ? "button-voted" : ""}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
};

export default VoteButton;
