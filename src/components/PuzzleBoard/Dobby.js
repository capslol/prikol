import React from 'react';
import { useDroppable } from '@dnd-kit/core';

const Dobby = (props) => {
    const { isOver, setNodeRef } = useDroppable({
        id: 'dobby',
    });
    const style = {
        color: isOver ? 'green' : undefined,
    };

    return (
        < div className={'dobby'} ref={setNodeRef} style={style}>
            {props.children}
        </div >
    );
};

export default Dobby;
