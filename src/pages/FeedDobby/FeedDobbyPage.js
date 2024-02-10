import React, {useState} from 'react';
import {DndContext} from '@dnd-kit/core';

import Food from "../../components/PuzzlePiece/Food";
import Dobby from "../../components/PuzzleBoard/Dobby";
import './FeedDobbyPage.css'

const FeedDobbyPage = () => {
    const [droppedIds, setDroppedIds] = useState([]); // Состояние для хранения id брошенных элементов

    const handleDragEnd = (event) => {
        const {over, active} = event;

        if (over && over.id === 'dobby') { // Если брошено на Dobby
            const droppedId = active.id;
            if (!droppedIds.includes(droppedId)) { // Проверяем, что id еще не был брошен
                setDroppedIds(prevIds => [...prevIds, droppedId]); // Добавляем id в состояние
            }
        }
    };

    return (
        <DndContext onDragEnd={handleDragEnd}>
            <div className="food-content">
                {!droppedIds.includes('cucumber') && ( // Проверяем, что 'cucumber1' еще не брошен
                    <Food id={'cucumber'}>
                        <img
                            src="./images/cucumber.png"
                            alt=""
                            style={{width: '100px', height: 'auto'}}
                        />
                    </Food>
                )}
                {!droppedIds.includes('candy') && ( // Проверяем, что 'cucumber2' еще не брошен
                    <Food id={'candy'}>
                        <img
                            src="./images/candy.png"
                            alt=""
                            style={{width: '100px', height: 'auto'}}
                        />
                    </Food>
                )}
                {!droppedIds.includes('poop') && ( // Проверяем, что 'cucumber1' еще не брошен
                    <Food id={'poop'}>
                        <img
                            src="./images/poop.png"
                            alt=""
                            style={{width: '100px', height: 'auto'}}
                        />
                    </Food>
                )}
            </div>
            <Dobby>
                <div>
                    <img src="./images/dobby.webp" alt=""/>
                </div>
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





