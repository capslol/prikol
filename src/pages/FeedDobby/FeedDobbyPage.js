import React, {useEffect, useState} from 'react';
import {DndContext} from '@dnd-kit/core';
import {CSSTransition} from 'react-transition-group';


import Food from "../../components/PuzzlePiece/Food";
import Dobby from "../../components/PuzzleBoard/Dobby";
import './FeedDobbyPage.css'
import Modal from "../../components/modal/Modal";
import {useNavigate} from "react-router-dom";
import {useHeart} from "../../contexts/HeartProvider";

const FeedDobbyPage = () => {
    const [droppedIds, setDroppedIds] = useState([]); // Состояние для хранения id брошенных элементов
    const [hungryLevel, setHungryLevel] = useState(0); // Состояние для хранения id брошенных элементов
    const [dobbyImageSrc, setDobbyImageSrc] = useState('./images/dobby_dialog-1.png'); // Состояние для хранения id брошенных элементов
    const navigate = useNavigate()
    const { updateHeartCounter } = useHeart();
    const handleDragEnd = (event) => {
        const {over, active} = event;

        if (over && over.id === 'dobby') { // Если брошено на Dobby
            const droppedId = active.id;

            if (!droppedIds.includes(droppedId)) { // Проверяем, что id еще не был брошен
                setDroppedIds(prevIds => [...prevIds, droppedId]); // Добавляем id в состояние
                setHungryLevel(prevState => prevState + 1)
                console.log(hungryLevel)

                if (droppedId === 'cucumber') {
                    setDobbyImageSrc("./images/dobby_dialog-2_cucumber.png")
                } else if (droppedId === 'candy') {
                    setDobbyImageSrc("./images/dobby_dialog-3_candy.png")
                } else if (droppedId === 'carrot') {
                    setDobbyImageSrc("./images/dobby_dialog_carrot.png")
                } else if (droppedId === 'poop') {
                    setDobbyImageSrc("./images/dobby_dialog_poop.png")
                }
            }
        }
    };

    useEffect(() => {
        const handleTouchMove = (e) => {
            if (e.touches.length > 1) {
                e.preventDefault(); // Отмена прокрутки, если есть более одного касания
            }
        };

        document.addEventListener('touchmove', handleTouchMove, { passive: false });

        return () => {
            document.removeEventListener('touchmove', handleTouchMove);
        };
    }, []);

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


    const fruits = [
        { id: 'carrot', src: "./images/carrot.png", alt: "Carrot", width: '100px' },
        { id: 'cucumber', src: "./images/cucumber.png", alt: "Cucumber", width: '100px' },
        { id: 'candy', src: "./images/candy.png", alt: "Candy", width: '100px' },
        { id: 'poop', src: "./images/poop.png", alt: "Poop", width: '60px' },
        { id: 'strawberry', src: "./images/straw.png", alt: "Strawberry", width: '75px' }
    ];

    return (
        <div className="kitchen">
            <DndContext onDragEnd={handleDragEnd}>
                {fruits.map(({ id, src, alt, width }) => (
                    !droppedIds.includes(id) &&
                    <Food key={id} id={id} className={id} onDrop={() => handleDragEnd(id)}>
                        <img src={src} alt={alt} style={{ width, height: 'auto' }} />
                    </Food>
                ))}
                <CSSTransition
                    in={true}
                    classNames="dobby-animation" // Префикс классов анимации
                    timeout={300} // Время анимации в миллисекундах
                >

                    <Dobby>
                        <img className={`dobby-image`} src={dobbyImageSrc} alt=""/>
                    </Dobby>
                </CSSTransition>
            </DndContext>

            {hungryLevel === 5 && (
                <Modal isOpen={true} onClose={closeModal}>
                    <>
                        <h2>Ты молодец, накормила малыша</h2>
                        <h2>Можешь идти дальше</h2>
                        <button onClick={() => {
                            navigate('/valentinka')
                            updateHeartCounter(+1)
                        }} className={'next-button'}>Дальше</button>
                    </>
                </Modal>
            )}
        </div>
    );
};

export default FeedDobbyPage;


// import React, { useState } from 'react';
// import { DndProvider, useDrag, useDrop } from 'react-dnd';
// import { HTML5Backend } from 'react-dnd-html5-backend';
//
// const Box = ({ children, onDrop }) => {
//     const [{ isOver }, drop] = useDrop({
//         accept: 'BOX',
//         drop: (item, monitor) => {
//             onDrop(item);
//         },
//         collect: monitor => ({
//             isOver: !!monitor.isOver(),
//         }),
//     });
//
//     const backgroundColor = isOver ? 'lightgreen' : 'white';
//
//     return (
//         <div ref={drop} style={{ padding: '1rem', backgroundColor }}>
//             {children}
//         </div>
//     );
// };
//
// const DraggableBox = ({ name, onDrop }) => {
//     const [{ isDragging }, drag] = useDrag({
//         type: 'BOX',
//         item: { name },
//         end: (item, monitor) => {
//             const dropResult = monitor.getDropResult();
//             if (item && dropResult) {
//                 onDrop();
//             }
//         },
//         collect: monitor => ({
//             isDragging: !!monitor.isDragging(),
//         }),
//     });
//
//     const opacity = isDragging ? 0.4 : 1;
//
//     return (
//         <div ref={drag} style={{ opacity, cursor: 'move' }}>
//             {name}
//         </div>
//     );
// };
//
// const App = () => {
//     const [bigBoxContents, setBigBoxContents] = useState([]);
//     const [boxesVisible, setBoxesVisible] = useState({ A: true, B: true, C: true });
//
//     const handleDrop = (id) => {
//         setBigBoxContents(prevContents => {
//             const updatedContents = [...prevContents, id];
//             console.log(updatedContents)
//             return updatedContents;
//
//         });
//
//         setBoxesVisible(prevVisible => ({
//             ...prevVisible,
//             [id]: false,
//         }));
//     };
//
//     return (
//         <DndProvider backend={HTML5Backend}>
//             <div style={{ display: 'flex' }}>
//                 <Box onDrop={handleDrop}>
//                     <p>Big Box Contents: {bigBoxContents.join(', ')}</p>
//                 </Box>
//                 <Box>
//                     {boxesVisible['A'] && <DraggableBox id="A" name="Box A" onDrop={handleDrop} />}
//                     {boxesVisible['B'] && <DraggableBox id="B" name="Box B" onDrop={handleDrop} />}
//                     {boxesVisible['C'] && <DraggableBox id="C" name="Box C" onDrop={handleDrop} />}
//                 </Box>
//             </div>
//         </DndProvider>
//     );
// };
//
// export default App;





