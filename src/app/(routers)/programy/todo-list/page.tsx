"use client";

import { useEffect, useState } from "react";
import TodoInput from "./_components/TodoInput";
import TodoList from "./_components/TodoList";
import { LoadingItem } from "@/components/Skeletons/Skeletons";

const Home: React.FC = () => {
    const [todos, setTodos] = useState<string[]>([]);
    const [doneTodos, setDoneTodos] = useState<string[]>([]);
    const [laterTodos, setLaterTodos] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const storedTodos = localStorage.getItem("todos");
        const storedDoneTodos = localStorage.getItem("doneTodos");
        const storedLaterTodos = localStorage.getItem("laterTodos");

        if (storedTodos) setTodos(JSON.parse(storedTodos));
        if (storedDoneTodos) setDoneTodos(JSON.parse(storedDoneTodos));
        if (storedLaterTodos) setLaterTodos(JSON.parse(storedLaterTodos));

        setLoading(false);
    }, []);

    useEffect(() => {
        if (!loading) {
            localStorage.setItem("todos", JSON.stringify(todos));
            localStorage.setItem("doneTodos", JSON.stringify(doneTodos));
            localStorage.setItem("laterTodos", JSON.stringify(laterTodos));
        }
    }, [todos, doneTodos, laterTodos, loading]);

    const handleAddTodo = (todo: string) => {
        setTodos((prevTodos) => [...prevTodos, todo]);
    };

    const handleMoveTodo = (
        index: number,
        from: string[],
        setFrom: React.Dispatch<React.SetStateAction<string[]>>,
        to: string[],
        setTo: React.Dispatch<React.SetStateAction<string[]>>
    ) => {
        const item = from[index];
        setFrom(from.filter((_, i) => i !== index));
        setTo([...to, item]);
    };

    const handleRemoveTodo = (
        index: number,
        setList: React.Dispatch<React.SetStateAction<string[]>>
    ) => {
        setList((prevList) => prevList.filter((_, i) => i !== index));
    };

    const handleClearList = (
        setList: React.Dispatch<React.SetStateAction<string[]>>
    ) => {
        setList([]);
    };

    return (
        <div className="flex anim-opacity flex-col items-center justify-start pt-4 lg:pt-8 px-4 min-h-screen bg-gray-100">
            <div className="w-full max-w-2xl p-4 bg-white shadow-md rounded">
                <h1 className="text-2xl font-bold mb-4">To-Do Lista</h1>
                <TodoInput addTodo={handleAddTodo} />

                {loading ? (
                    <LoadingItem />
                ) : (
                    <>
                        <CardHeader
                            title="Lista"
                            listLength={todos.length}
                            handleClearList={() => handleClearList(setTodos)}
                        />
                        <TodoList
                            todos={todos}
                            removeTodo={(index) =>
                                handleRemoveTodo(index, setTodos)
                            }
                            moveTodo={(index) =>
                                handleMoveTodo(
                                    index,
                                    todos,
                                    setTodos,
                                    doneTodos,
                                    setDoneTodos
                                )
                            }
                            moveLaterTodo={(index) =>
                                handleMoveTodo(
                                    index,
                                    todos,
                                    setTodos,
                                    laterTodos,
                                    setLaterTodos
                                )
                            }
                        />

                        <CardHeader
                            title="Zrobione"
                            listLength={doneTodos.length}
                            handleClearList={() =>
                                handleClearList(setDoneTodos)
                            }
                        />
                        <TodoList
                            todos={doneTodos}
                            removeTodo={(index) =>
                                handleRemoveTodo(index, setDoneTodos)
                            }
                        />

                        <CardHeader
                            title="Na pózniej"
                            listLength={laterTodos.length}
                            handleClearList={() =>
                                handleClearList(setLaterTodos)
                            }
                        />
                        <TodoList
                            todos={laterTodos}
                            removeTodo={(index) =>
                                handleRemoveTodo(index, setLaterTodos)
                            }
                        />
                    </>
                )}
            </div>
        </div>
    );
};

export default Home;

function CardHeader({
    title,
    listLength,
    handleClearList,
}: {
    title: string;
    listLength: number;
    handleClearList: () => void;
}) {
    return (
        <div className="flex items-center justify-between mt-4">
            <h2 className="text-xl font-semibold ">{title}</h2>
            {listLength > 0 && (
                <button
                    onClick={handleClearList}
                    className="p-2 text-xs text-red-500"
                >
                    Wyczyść listę
                </button>
            )}
        </div>
    );
}
