// CustomAlert.js
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import Modal from 'react-modal';
import "./alert.css"


// eslint-disable-next-line react/prop-types
const Alert = ({ isOpen, message, heading, onClose }) => {

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="Custom Alert"
            ariaHideApp={false}

        >
            <div className="alert__container">
                <IoMdCheckmarkCircleOutline />
                <h3> {heading} </h3>
                <p> {message} </p>
                <button className="" onClick={onClose}>Close</button>
            </div>
        </Modal>
    );
};

export default Alert;
