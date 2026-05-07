import React from 'react';
import { useDraggable } from '@dnd-kit/core';

export const DraggableSidebarItem = ({ type, children, onClick }) => {
    const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
        id: `sidebar-${type}`,
        data: { type, isSidebar: true }
    });

    return (
        <div ref={setNodeRef} {...listeners} {...attributes} className="relative z-50">
            {/* If dragging, show a ghost or similar? dnd-kit uses drag overlay for that */}
            <div onClick={onClick} className={`${isDragging ? 'opacity-50' : ''}`}>
                {children}
            </div>
        </div>
    );
};
