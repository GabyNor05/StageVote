import React from "react";
import "./cards.css";
import data from "./data.json";
import { FaThumbsUp } from "react-icons/fa";
import VoteButton from "./VoteButton";

function LongCard() {
  return (
    <>
      {data.map((item, idx) => (
        <div className="LongCard-Card" key={idx}>
          <div className="LongCard-Image">
            <img src={item.image} alt="Long Card" />
          </div>
          <div className="LongCard-Content">
            <h2 className="LongCard-Title">{item.title}</h2>
            <p className="LongCard-Description">{item.description}</p>
            <div className="LongCard-LastRow">
              <div className="LongCard-GridItem">
              <FaThumbsUp color="#3A9D23" size={32} />
              <span className="LongCard-VoteCount">{item.voteCount} votes</span>
              </div>
              <div className="LongCard-GridItem">
              <VoteButton
                optionId={item.id}
              />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default LongCard;