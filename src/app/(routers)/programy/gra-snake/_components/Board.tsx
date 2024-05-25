import React from "react";
import { Position } from "../_utils/gameSnakeLogic";
import Snake from "./Snake";
import Food from "./Food";
import SpecialFood from "./SpecialFood";

interface BoardProps {
    snake: Position[];
    food: Position;
    specialFood: Position | null;
    boardSize: number;
}

const Board: React.FC<BoardProps> = ({
    snake,
    food,
    specialFood,
    boardSize,
}) => {
    return (
        <div className="relative w-full bg-gray-900 overflow-hidden h-full">
            {Array.from({ length: boardSize }).map((_, row) =>
                Array.from({ length: boardSize }).map((_, col) => (
                    <div
                        key={`${row}-${col}`}
                        className={`absolute border border-gray-700`}
                        style={{
                            top: `${(100 / boardSize) * row}%`,
                            left: `${(100 / boardSize) * col}%`,
                            width: `${100 / boardSize}%`,
                            height: `${(100 / boardSize) * col}%`,
                        }}
                    />
                ))
            )}
            <Snake snake={snake} boardSize={boardSize} />
            <Food food={food} boardSize={boardSize} />
            {specialFood && <SpecialFood food={specialFood} boardSize={boardSize} />}
        </div>
    );
};

export default Board;
