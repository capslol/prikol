import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useHeart} from "../../contexts/HeartProvider";

const Quiz = () => {
    // Состояние для хранения вопросов и ответов
    const [questionIndex, setQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState([]);
    const navigate = useNavigate()
    const {updateHeartCounter} = useHeart()

    // Пример вопросов и ответов
    const questions = [
        {
            question: 'Какая ваша любимая цветовая гамма?',
            options: ['Синяя', 'Красная', 'Зеленая', 'Желтая'],
            correctAnswerIndex: 0 // Индекс правильного ответа
        },
        {
            question: 'Какая ваша любимая еда?',
            options: ['Пицца', 'Суши', 'Бургеры', 'Салаты'],
            correctAnswerIndex: 1 // Индекс правильного ответа
        }
        // Добавьте больше вопросов и ответов по вашему усмотрению
    ];

    // Обработчик выбора ответа
    const handleAnswerSelect = (optionIndex) => {
        const newAnswers = [...answers];
        newAnswers[questionIndex] = optionIndex;
        setAnswers(newAnswers);

        const isCorrect = optionIndex === questions[questionIndex].correctAnswerIndex;

        // Переход к следующему вопросу (если такой есть)
        if (questionIndex < questions.length - 1) {
            setQuestionIndex(questionIndex + 1);
        } else {
            // Здесь можно отправить ответы на сервер или выполнить другие действия
            navigate('/login')
        }

        // Проверка и вывод правильности ответа
        if (isCorrect) {
            updateHeartCounter(1)
            alert('Правильный ответ!');
        } else {
            updateHeartCounter(-1)
            alert('Неправильный ответ!');
        }
    };
    return (
        <div>
            <div>
                {questionIndex < questions.length && (
                    <div>
                        <h2>{questions[questionIndex].question}</h2>
                        <div>
                            {questions[questionIndex].options.map((option, index) => (
                                <button key={index} onClick={() => handleAnswerSelect(index)}>
                                    {option}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>

        </div>
    );
};

export default Quiz;