import {
    FaArrowDown,
    FaArrowLeft,
    FaArrowRight,
    FaArrowUp,
} from "react-icons/fa6";
import { DIRECTIONS, Position } from "../_utils/gameSnakeLogic";

interface ControlsProps {
    changeDirection: (newDirection: Position) => void;
    direction: Position;
}

const ControlsMobile: React.FC<ControlsProps> = ({ changeDirection, direction }) => {
    return (
        <div className="flex items-center justify-center mt-20 relative lg:hidden p-10 w-40 h-40 mx-auto">
            <button
                className="p-5 border rounded-xl absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2"
                onClick={() => changeDirection(DIRECTIONS.LEFT)}
            >
                <FaArrowLeft />
            </button>
            <button
                className="p-5 border rounded-xl absolute left-1/2 top-0 -translate-y-1/2 -translate-x-1/2"
                onClick={() => changeDirection(DIRECTIONS.UP)}
            >
                <FaArrowUp />
            </button>
            <div className="p-7 border rounded-full" />
            <button
                className="p-5 border rounded-xl absolute left-1/2 bottom-0 translate-y-1/2 -translate-x-1/2"
                onClick={() => changeDirection(DIRECTIONS.DOWN)}
            >
                <FaArrowDown />
            </button>
            <button
                className="p-5 border rounded-xl absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2"
                onClick={() => changeDirection(DIRECTIONS.RIGHT)}
            >
                <FaArrowRight />
            </button>
        </div>
    );
};

export default ControlsMobile;
