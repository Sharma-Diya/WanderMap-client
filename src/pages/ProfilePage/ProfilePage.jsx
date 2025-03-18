// Profile.jsx
import { useState } from "react";
import LogoutButton from "../../Components/Auth/LogOut/LogOut.jsx";

function Profile() {
  // Your profile state and other functions here
  
  const handleLogoutSuccess = () => {
    // Any additional cleanup you want to do after logout
    // For example, clearing local profile data
  };

  return (
    <div className="profile-page">
      <h1>Welcome to Your Profile</h1>

      {/* Other profile information can go here */}
      
      <LogoutButton 
        className="profile-logout-btn" 
        onLogoutSuccess={handleLogoutSuccess} 
      />
    </div>
  );
}

export default Profile;