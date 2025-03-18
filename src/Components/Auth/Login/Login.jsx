import { useState } from "react";
import { auth } from "../../config/Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import "./Login.scss";
import img from "../../../assets/images/image.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // For redirection after login

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Signed in successfully");

      // Redirect to home or profile after login
      navigate("/");  
    } catch (error) {
      console.error("Login error:", error.code, error.message);
      if (error.code === "auth/invalid-credential" || error.code === "auth/invalid-email" || error.code === "auth/user-not-found") {
        setError("Invalid email or password");
      } else if (error.code === "auth/too-many-requests") {
        setError("Too many failed login attempts. Please try again later.");
      } else {
        setError("Failed to sign in. Please try again.");
      }
    }
  };

  return (
    <div className="login-container">
    <div className="login-content">

      <img className="login-img" src={img} alt="Login" />
      <h2 className="login-title">Log in</h2>

      {error && <div className="error-message">{error}</div>}

      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="form-input"
          />
        </div>

        <button type="submit" className="login-button">Log In</button>
      </form>

      <p className="register-link">
        Don't have an account? <Link to="/register">Register here</Link>
      </p>
      </div>
    </div>
  );
};

export default Login;
