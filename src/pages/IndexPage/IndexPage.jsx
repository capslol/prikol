import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import './IndexPage.css';
import Modal from "../../components/modal/Modal";
const IndexPage = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const navigate = useNavigate()

    // modal window ///////////////////////////////
    const [isModalOpen, setIsModalOpen] = useState(false); // Состояние для открытия/закрытия модального окна
    // Функция для открытия модального окна
    const openModal = () => {
        setIsModalOpen(true);
    };
    // Функция для закрытия модального окна
    const closeModal = () => {
        setIsModalOpen(false);
    };
    // modal window ///////////////////////////////

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    return (
        <div>
            <button onClick={() => navigate('/puzzle')}></button>
            <div className="images-container">
                <img src="./images/avatar-1.jpg" className={selectedImage === "./images/avatar-1.jpg" ? "selected" : ""} alt="Картинка 1" onClick={() => handleImageClick("./images/avatar-1.jpg")} />
                <img src="./images/avatar-2.jpg" className={selectedImage === "./images/avatar-2.jpg" ? "selected" : ""} alt="Картинка 2" onClick={() => handleImageClick("./images/avatar-2.jpg")} />
                <img src="./images/avatar-3.jpg" className={selectedImage === "./images/avatar-3.jpg" ? "selected" : ""} alt="Картинка 3" onClick={() => handleImageClick("./images/avatar-3.jpg")} />
            </div>
            <button onClick={openModal} className={'avatar__button-submit'}>Выбрать(результат нельзя отменить</button>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                {!selectedImage ? (
                    // Если фото не выбрана, отображаем сообщение
                    <h2>Ты забыла выбрать фото</h2>
                ) : (
                    // Если фото выбрана, отображаем информацию и кнопку "Дальше"
                    <>
                        <h2>Оно будет твоей аватаркой до конца игры</h2>
                        <button className={'next-button'}>Дальше</button>
                    </>
                )}
            </Modal>

        </div>
    );
};

export default IndexPage;