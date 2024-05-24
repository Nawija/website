"use client";

import { useEffect, useState } from "react";
import TodoInput from "./_components/TodoInput";
import TodoList from "./_components/TodoList";
import { LoadingItem } from "@/components/Skeletons/Skeletons";

const Home: React.FC = () => {
    const [todos, setTodos] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const storedTodos = localStorage.getItem("todos");
        if (storedTodos) {
            setTodos(JSON.parse(storedTodos));
        }
        setLoading(false);
    }, []);

    useEffect(() => {
        if (!loading) {
            localStorage.setItem("todos", JSON.stringify(todos));
        }
    }, [todos, loading]);

    const handleAddTodo = (todo: string) => {
        setTodos((prevTodos) => [...prevTodos, todo]);
    };

    const handleRemoveTodo = (index: number) => {
        setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white shadow-md rounded">
                <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
                <TodoInput addTodo={handleAddTodo} />
                {loading ? (
                    <LoadingItem />
                ) : (
                    <TodoList todos={todos} removeTodo={handleRemoveTodo} />
                )}
            </div>
        </div>
    );
};

export default Home;
