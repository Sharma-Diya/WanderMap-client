import { useState } from "react";
import { auth } from "../../components/config/Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.scss";
import img from "../../assets/images/image.png";

const Login = ({ isModal = false, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Signed in successfully");

      // Close modal if `onClose` exists
      if (isModal && onClose) {
        onClose();
      } else {
        navigate("/");
      }
    } catch (error) {
      console.error("Login error:", error.code, error.message);
      if (
        error.code === "auth/invalid-credential" ||
        error.code === "auth/invalid-email" ||
        error.code === "auth/user-not-found" ||
        error.code === "auth/wrong-password"
      ) {
        setError("Invalid email or password.");
      } else if (error.code === "auth/too-many-requests") {
        setError("Too many failed login attempts. Please try again later.");
      } else {
        setError("Failed to sign in. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`login-container ${isModal ? "modal-style" : "page-style"}`}>
      <div className={`login-content ${isModal ? "modal-login-content" : "page-login-content"}`}>
        <img className="login-img" src={img} alt="Login" />
        <h2 className="login-title">Log in</h2>

        {error && <div className="error-message" aria-live="polite">{error}</div>}

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
              autoFocus
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

          <button type="submit" className="login-button" disabled={loading}>
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>

        <p className="register-link">
          Don't have an account? <Link to="/register" onClick={onClose}>Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
