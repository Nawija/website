"use client";
import { IoMdAdd } from "react-icons/io";

import { useState } from "react";

interface TodoInputProps {
    addTodo: (todo: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ addTodo }) => {
    const [inputValue, setInputValue] = useState("");

    const handleAddTodo = () => {
        if (inputValue.trim()) {
            addTodo(inputValue);
            setInputValue("");
        }
    };

    return (
        <div className="flex mt-4">
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="p-2 flex-1 border border-gray-300 outline-none rounded"
                placeholder="Wpisz tutaj"
            />
            <button
                onClick={handleAddTodo}
                className="ml-2 p-2 text-2xl bg-blue-500 hover:bg-blue-600 text-white rounded"
            >
                <IoMdAdd />
            </button>
        </div>
    );
};

export default TodoInput;
