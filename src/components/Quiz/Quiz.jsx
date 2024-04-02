import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useHeart } from "../../contexts/HeartProvider";
import './Quiz.css';
import Modal from "../modal/Modal";

const Quiz = () => {
    const [questionIndex, setQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();
    const { updateHeartCounter } = useHeart();

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const questions = [
        {
            question: 'Что в руках у челика?',
            options: ['Крыса', 'Рыба', 'Кошка', 'Собака'],
            correctAnswerIndex: 1,
            questionImage: "images/questions/q1.png", // Путь к изображению правильного ответа
            correctAnswerImage: "images/questions/1.jpg" // Путь к изображению правильного ответа
        },
        {
            question: 'Кто был на на главной странице твоего сайта?',
            options: ['кот', 'капибара', 'пес', 'всратый бобр'],
            correctAnswerIndex: 2,
            questionImage: "images/questions/q2.png", // Путь к изображению правильного ответа
            correctAnswerImage: "images/questions/2.jpg" // Путь к изображению правильного ответа
        }
        // Добавьте больше вопросов и ответов по вашему усмотрению
    ];

    const handleAnswerSelect = (optionIndex) => {
        const newAnswers = [...answers];
        newAnswers[questionIndex] = optionIndex;
        setAnswers(newAnswers);

        const isCorrect = optionIndex === questions[questionIndex].correctAnswerIndex;

        // if (questionIndex < questions.length - 1) {
        //     setQuestionIndex(questionIndex + 1);
        // } else {
        //     navigate('/login')
        // }

        if (isCorrect) {
            openModal();
            updateHeartCounter(1);
        } else {
            openModal();
            updateHeartCounter(-1);
        }
    };

    return (
        <div>
            {questionIndex < questions.length && (
                <div>
                    <div className="question">
                        <h2>{questions[questionIndex].question}</h2>
                        <img src={questions[questionIndex].questionImage} alt=""/>
                    </div>

                    <div className="answers">
                        {questions[questionIndex].options.map((option, index) => (
                            <button key={index} onClick={() => handleAnswerSelect(index)}>
                                {option}
                            </button>
                        ))}
                    </div>

                    <Modal isOpen={isModalOpen} onClose={closeModal}>
                        <h2>Правильный ответ</h2>
                        {/* Отображение изображения правильного ответа */}
                        <img width={400} src={questions[questionIndex].correctAnswerImage} alt="Correct Answer"/>
                        <p></p>
                        <button onClick={() => {
                            if (!questionIndex < questions.length - 1) {
                                navigate('/slider')
                            } else {
                                setQuestionIndex(questionIndex + 1);
                                closeModal();
                            }
                        }}>Дальше</button>
                    </Modal>


                </div>
            )}
        </div>
    );
};

export default Quiz;
