"use client";

import { MdDeleteForever, MdDone, MdOutlineWatchLater } from "react-icons/md";
import { useRef } from "react";
import { useInView } from "framer-motion";

interface TodoItemProps {
    todo: string;
    removeTodo: (index: number) => void;
    moveTodo?: (index: number) => void;
    moveLaterTodo?: (index: number) => void;
    index: number;
}

const TodoItem: React.FC<TodoItemProps> = ({
    todo,
    removeTodo,
    moveTodo,
    moveLaterTodo,
    index,
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true });
    return (
        <div
            ref={ref}
            style={{
                transform: isInView ? "none" : "translateY(-30px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.2s cubic-bezier(0.17, 0.55, 0.55, 1)",
            }}
            className="flex justify-between items-start p-2 border-b border-gray-200"
        >
            <span className="pl-2">{todo}</span>
            <div className="flex space-x-3">
                {moveTodo && (
                    <button
                        onClick={() => moveTodo(index)}
                        className="p-1.5 bg-green-500 text-white rounded"
                    >
                        <MdDone />
                    </button>
                )}

                {moveLaterTodo && (
                    <button
                        onClick={() => moveLaterTodo(index)}
                        className="p-1.5 bg-yellow-500 text-white rounded"
                    >
                        <MdOutlineWatchLater />
                    </button>
                )}

                <button
                    onClick={() => removeTodo(index)}
                    className="p-1.5 bg-red-500 text-white rounded"
                >
                    <MdDeleteForever />
                </button>
            </div>
        </div>
    );
};

export default TodoItem;
