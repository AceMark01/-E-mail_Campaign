import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { GripVertical } from 'lucide-react';

export function SortableBlockWrapper({ id, children, isOverlay, uneditable }) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging
    } = useSortable({ id, disabled: uneditable });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.4 : 1,
        position: 'relative',
        touchAction: 'none' // Prevent scrolling/panning while dragging
    };

    if (uneditable) {
        return <div>{children}</div>;
    }

    return (
        <div ref={setNodeRef} style={style} className="group relative">
            {/* Drag Handle - Only visible on hover and not in overlay mode */}
            {!isOverlay && !uneditable && (
                <div
                    {...attributes}
                    {...listeners}
                    className="absolute -left-8 top-1/2 -translate-y-1/2 p-1.5 cursor-grab active:cursor-grabbing text-slate-400 hover:text-indigo-600 hover:bg-slate-100 rounded opacity-0 group-hover:opacity-100 transition-opacity z-10"
                    title="Drag to reorder"
                    onMouseDown={(e) => {
                        e.stopPropagation(); // Prevent canvas panning
                        listeners?.onMouseDown(e);
                    }}
                >
                    <GripVertical size={16} />
                </div>
            )}

            {/* The Block Content */}
            <div className={isDragging ? 'ring-2 ring-indigo-500 rounded-lg' : ''}>
                {children}
            </div>
        </div>
    );
}
