import React from "react";
import Board from "../_components/Board";
import Score from "../_components/Score";
import { Position } from "../_utils/gameSnakeLogic";
import { FaArrowRotateLeft } from "react-icons/fa6";

interface GameAreaProps {
    snake: Position[];
    food: Position;
    specialFood: Position | null;
    boardSize: number;
    score: number;
    gameOver: boolean;
    running: boolean;
    handleStart: () => void;
}

const GameArea: React.FC<GameAreaProps> = ({
    snake,
    food,
    specialFood,
    boardSize,
    score,
    gameOver,
    running,
    handleStart,
}) => {
    return (
        <div
            className="relative"
            style={{
                width: "80vw",
                height: "80vw",
                maxWidth: "800px",
                maxHeight: "800px",
            }}
        >
            <Board
                snake={snake}
                food={food}
                specialFood={specialFood}
                boardSize={boardSize}
            />
            <Score score={score} />
            {!running && (
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white text-2xl">
                    {gameOver ? (
                        <>
                            <div>Game Over</div>
                            <p className="text-base">Punkty: {score}</p>
                            <button
                                onClick={handleStart}
                                className="mt-8 text-sm py-2 px-4 bg-gradient-to-tr from-green-500 to-green-800 shadow-xl border-green-600 border shadow-green-500/50 rounded font-medium flex items-center justify-center space-x-1"
                            >
                                <FaArrowRotateLeft />
                                <span>Jeszcze raz</span>
                            </button>
                        </>
                    ) : (
                        <button
                            onClick={handleStart}
                            className="text-sm py-2 px-4 bg-gradient-to-tr from-green-500 to-green-800 shadow-xl border-green-600 border shadow-green-500/50 rounded font-medium"
                        >
                            Rozpocznij Gre
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};

export default GameArea;
