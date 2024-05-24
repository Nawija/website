import { MdDeleteForever } from "react-icons/md";

interface TodoItemProps {
    todo: string;
    removeTodo: (index: number) => void;
    index: number;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, removeTodo, index }) => {
    return (
        <li className="flex justify-between items-center p-2 border-b border-gray-100">
            <span>{todo}</span>
            <button
                onClick={() => removeTodo(index)}
                className="ml-2 p-1 bg-red-500 hover:bg-red-600 text-white rounded"
            >
                <MdDeleteForever size={23} />
            </button>
        </li>
    );
};

export default TodoItem;
