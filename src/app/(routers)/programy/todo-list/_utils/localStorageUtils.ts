export const loadTodos = (): string[] => {
    if (typeof window !== 'undefined') {
      const todos = localStorage.getItem('todos');
      return todos ? JSON.parse(todos) : [];
    }
    return [];
  };
  
  export const saveTodos = (todos: string[]) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  };
  