import React from "react";
import "./submission.css"; // Assuming you have a CSS file for styling
import { useNavigate } from "react-router-dom"; // For navigation
import Button from "../Button";

function Submission() {

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  }
  return (
    <div className="submission-page">
      <h1>Submission Page</h1>
      <p>This is where users can submit their entries.</p>
      {/* Add form or submission logic here */}
      <div className="submission-container">
        <form className = "submission-form" onSubmit={handleSubmit}>
          <label htmlFor="creator">Name of Creator</label>
          <input type="text" id="creator" name="creator" placeholder="Name of Creator" required />
          <label htmlFor="dish">Title of Dish</label>
          <input type="text" id="dish" name="dish" placeholder="Title of Dish" required />
          <label htmlFor="cuisine">Type of Cuisine</label>
          <input type="text" id="cuisine" name="cuisine" placeholder="Type of Cuisine" required />
          <label htmlFor="description">Description</label>
          <textarea id="description" name="description" placeholder= "Description" rows="4" cols="50"></textarea>
          <label htmlFor="image">Image Upload</label>
          <input type="file" id="image" name="image" accept="image/*" required />
          <div className = "submission-btn-container">
          <Button type = "submit" text="Submit" width="100px" height="40px"/>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Submission;