import React from 'react';
import { useDraggable } from '@dnd-kit/core';

const Food = (props) => {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: 'food',
    });
    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    } : undefined;

    return (
        <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
            {props.children}
        </div>
    );
};

export default Food;
