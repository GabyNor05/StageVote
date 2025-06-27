import React from "react";
import LongCard from "../cards/LongCard";
import Searchbar from "../Searchbar";
import Footer from "../Footer";
import broadwayImage from "../../assets/Broadway.jpg";
import "./home.css";

function Home() {
  return (
    <>
      <div className="home-container">
        <div className="home-header-section">
          <img src={broadwayImage} alt="Broadway" className="home-header-image" />
          <div className="home-header-text">
            <h1>Stage Vote</h1>
            <p>Welcome to StageVote – where Broadway meets the buffet! Cast your vote for the most show-stopping, toe-tapping, and tastebud-tingling Broadway-inspired dishes. Whether it’s a punny pastry or a dramatic deep dish, your vote helps crown the true star of the culinary stage!</p>
          </div>
        </div>
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
          <div className="map-section-text">
            <h1>Directions & Map</h1>
            <p>1681 Broadway, New York, NY 10019, United States</p>
          </div>
          <iframe
            title="StageVote Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.9443636835686!2d-73.98313870000001!3d40.763248399999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2585665784711%3A0x5bbfed74cc606bf6!2sBroadway%20Theatre!5e0!3m2!1sen!2sza!4v1751026654056!5m2!1sen!2sza"
            width="600"
            height="500"
            style={{ border: 0, borderRadius: "12px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
         </div>
         <>
          <Footer />
         </>
      </div>
    </>
  );
}
export default Home;

