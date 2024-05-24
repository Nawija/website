'use client'

import { useState } from 'react';

interface TodoInputProps {
  addTodo: (todo: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      addTodo(inputValue);
      setInputValue('');
    }
  };

  return (
    <div className="flex mt-4">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="p-2 flex-1 border border-gray-400 rounded"
        placeholder="Add a new task"
      />
      <button
        onClick={handleAddTodo}
        className="ml-2 p-2 bg-blue-500 text-white rounded"
      >
        Add
      </button>
    </div>
  );
};

export default TodoInput;
