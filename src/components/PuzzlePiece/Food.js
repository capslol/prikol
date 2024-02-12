import React from 'react';
import { useDraggable } from '@dnd-kit/core';

const Food = ({ id, children, className }) => {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: id || 'food', // Используем переданный id или значение по умолчанию 'food'
    });
    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    } : undefined;

    return (
        <div className={`food ${className}`} ref={setNodeRef} style={style} {...listeners} {...attributes}>
            {children}
        </div>
    );
};

export default Food;
