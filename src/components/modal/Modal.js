import React from 'react';
import './Modal.css'; // Подключаем стили

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>Закрыть</button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
