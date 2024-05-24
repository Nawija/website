export const fetchTodos = async (): Promise<string[]> => {
    const response = await fetch("/api/todos");
    if (!response.ok) {
        throw new Error("Failed to fetch todos");
    }
    return response.json();
};

export const addTodo = async (todo: string): Promise<string> => {
    const response = await fetch("/api/todos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ todo }),
    });
    if (!response.ok) {
        throw new Error("Failed to add todo");
    }
    return response.json();
};

export const deleteTodo = async (index: number): Promise<void> => {
    const response = await fetch("/api/todos", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ index }),
    });
    if (!response.ok) {
        throw new Error("Failed to delete todo");
    }
};
