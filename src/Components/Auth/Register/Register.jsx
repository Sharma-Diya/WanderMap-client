import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { auth, db } from "../../config/Firebase.jsx";
import { setDoc, doc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import img from "../../../assets/images/image2.png";
import "./Register.scss"; 

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleCreateUser = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (!acceptTerms) {
      setError("You must accept the Terms and Conditions");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, "Users", user.uid), {
        name: name,
        email: user.email,
      });

      alert("User created successfully");
      navigate("/"); // Redirect to Home or another page after successful registration
    } catch (error) {
      console.error("Registration error:", error.code, error.message);

      if (error.code === "auth/email-already-in-use") {
        setError("Email is already in use");
      } else if (error.code === "auth/weak-password") {
        setError("Password is too weak");
      } else if (error.code === "auth/invalid-email") {
        setError("Invalid email address");
      } else {
        setError("Failed to create account. Please try again.");
      }
    }
  };

  return (
    <div className="register-container">
      <div className="register-content">
        <img className="register-img" src={img} alt="Register" />

        <h2 className="register-title">Register your Account</h2>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleCreateUser} className="register-form">
          <div className="form-group">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
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
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirm_password" className="form-label">Confirm Password</label>
            <input
              type="password"
              id="confirm_password"
              name="confirm_password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="form-input"
            />
          </div>

          <div className="form-group checkbox-group">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              checked={acceptTerms}
              onChange={(e) => setAcceptTerms(e.target.checked)}
              className="checkbox-input"
            />
            <label htmlFor="terms" className="checkbox-label">
              I agree to the <a href="#" className="terms-link">Terms and Conditions</a>
            </label>
          </div>

          <button type="submit" className="register-button">Register</button>
        </form>

        <p className="login-link">
          Already have an account? <a href="/login">Log in here</a>
        </p>
      </div>
    </div>
  );
}

export default Register;
