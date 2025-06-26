import React from "react";
import LongCard from "../cards/LongCard";
import Searchbar from "../Searchbar";
import Footer from "../Footer";
import "./home.css";

function Home() {
  return (
    <>
      <div className="home-container">
        <h1 className="home-title">Welcome to Stage Vote</h1>
        <p className="home-description">
          Your platform for voting on the best stage performances.
        </p>
        <div className="LongCard-Container">
          <h1>Voting Feed</h1>
          <Searchbar />
          <LongCard />
          <svg xmlns="http://www.w3.org/2000/svg" width="212" height="11" viewBox="0 0 212 11" fill="none">
<rect width="80" height="11" rx="5.5" fill="#F5C518"/>
<rect x="187" width="25" height="11" rx="5.5" fill="#FDF6F0"/>
<rect x="99" width="25" height="11" rx="5.5" fill="#FDF6F0"/>
<rect x="143" width="25" height="11" rx="5.5" fill="#FDF6F0"/>
</svg> 
      </div>
         <div className="map-section">
          <h1>Map Section</h1>
          <p>This section will contain a map in the future.</p>
         </div>
         <>
          <Footer />
         </>
      </div>
    </>
  );
}

export default Home;