import "./modal.css";
import cancelIcon from "../../images/campaing/cancel.svg";
const Modal = ({ setOpenModal, children }) => {
  return (
    <div className="modalBackground">
      <div className="modal">
        <div className="cancelIcon btn-icons">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            <img src={cancelIcon} alt="cancel" />{" "}
          </button>
        </div>

        {children}
      </div>
    </div>
  );
};

export default Modal;
