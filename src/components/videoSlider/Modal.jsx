import React from "react";
import "../videoSlider/modal.scss";
import { motion } from "framer-motion";

const Modal = ({ showModal, handleClose, content }) => {
    if (!showModal) return null;

    return (
        <div className="modalOverlay" onClick={handleClose}>
            <motion.div
                className="modalContent"
                onClick={(e) => e.stopPropagation()}
                initial={{ opacity: 0, y: "-100vh" }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: "100vh" }}
                transition={{ duration: 0.3 }}
            >
                <button className="closeButton" onClick={handleClose}>X</button>
                <h2>{content.title}</h2>
                <p>{content.desc}</p>
                <img src={content.img} alt={content.title} />
            </motion.div>
        </div>
    );
};

export default Modal;