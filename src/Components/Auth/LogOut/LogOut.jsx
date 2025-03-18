// LogoutButton.jsx
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../config/Firebase.jsx";
import { useState } from "react";

function LogoutButton({ className, onLogoutSuccess }) {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // Sign out the user
      await signOut(auth);
      
      // Clear the error message
      setError("");
      
      // Call the optional callback if provided
      if (onLogoutSuccess) {
        onLogoutSuccess();
      }
      
      // Redirect to login page (unless specified not to in props)
      navigate("/");
    } catch (error) {
      console.error("Logout error:", error.message);
      setError("Failed to log out. Please try again.");
    }
  };

  return (
    <>
      {error && <div className="error-message">{error}</div>}
      <button onClick={handleLogout} className={className || "logout-button"}>
        Logout
      </button>
    </>
  );
}

export default LogoutButton;