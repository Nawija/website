"use client";

import { useEffect, useState } from "react";
import TodoInput from "./_components/TodoInput";
import TodoList from "./_components/TodoList";
import { loadTodos, saveTodos } from "./_utils/localStorageUtils";

const Home: React.FC = () => {
    const [todos, setTodos] = useState<string[]>([]);

    useEffect(() => {
        const storedTodos = loadTodos();
        setTodos(storedTodos);
    }, []);

    useEffect(() => {
        saveTodos(todos);
    }, [todos]);

    const addTodo = (todo: string) => {
        setTodos([...todos, todo]);
    };

    const removeTodo = (index: number) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-4 bg-white shadow-md rounded">
                <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
                <TodoInput addTodo={addTodo} />
                <TodoList todos={todos} removeTodo={removeTodo} />
            </div>
        </div>
    );
};

export default Home;
