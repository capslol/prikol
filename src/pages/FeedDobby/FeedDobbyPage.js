import React, {useState} from 'react';
import {DndContext} from '@dnd-kit/core';

import Food from "../../components/PuzzlePiece/Food";
import Dobby from "../../components/PuzzleBoard/Dobby";

const FeedDobbyPage = () => {
    const [isDropped, setIsDropped] = useState(false);
    const [hungryLevel, setHungryLevel] = useState(0);

    const draggableMarkup = (
            <>
                <Food>
                    <img
                        src="./images/cucumber.png"
                        alt=""
                        style={{width: '100px', height: 'auto'}} // Установка размеров изображения
                    />
                </Food>
                <Food>
                    <img
                        src="./images/cucumber.png"
                        alt=""
                        style={{width: '100px', height: 'auto'}} // Установка размеров изображения
                    />
                </Food>
            </>
        )
    ;

    const handleDragEnd = (event) => {
        if (event.over && event.over.id === 'dobby') { // Проверяем, что брошен на Dobby
            setIsDropped(true);
            setHungryLevel((prevState) => {
                prevState++
            });
            console.log(hungryLevel)
        }
    };

    return (
        <DndContext onDragEnd={handleDragEnd}>
            {!isDropped && draggableMarkup} {/* Показываем только если еще не брошено */}
            <Dobby>
                <div>
                    <img src="./images/dobby.webp" alt=""/>
                </div>
                {/* Показываем Dobby если брошено, иначе 'Drop here' */}
            </Dobby>
        </DndContext>
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





