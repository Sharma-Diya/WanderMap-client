import Login from "../../../pages/LoginPage/LoginPage";
import "./LoginModal.scss";

const LoginModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        <Login isModal={true} onClose={onClose} />
      </div>
    </div>
  );
};

export default LoginModal;