import Login from "./Login";
import "./LoginModal.scss"; // Add modal-specific styles

const LoginModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>×</button>
        <Login isModal={true} />
      </div>
    </div>
  );
};

export default LoginModal;
