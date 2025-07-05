import React from "react";

function Dashboard() {
  return (
    <div className="dashboard-page">
      <h1>Dashboard</h1>
      <p>Welcome to the dashboard! Here you can manage your submissions and view submissions you have voted for.</p>
      {/* Add more dashboard functionality here */}
      <div className="user-profile">
        <h2>User Profile</h2>
        <p>Display user information here.</p>
      </div>

      <div className="submission-history">
        <h2>Submission History</h2>
        <p>List of previous submissions.</p>
      </div>

      <div className="voting-history">
        <h2>Results</h2>  
      </div>
    </div>
  );
}

export default Dashboard;