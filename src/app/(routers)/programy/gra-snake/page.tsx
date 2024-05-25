"use client";

import { useEffect, useState } from "react";
import { FaArrowRotateLeft } from "react-icons/fa6";
import Board from "./_components/Board";
import Score from "./_components/Score";
import {
    DIRECTIONS,
    createSnake,
    createFood,
    moveSnake,
    checkCollision,
    Position,
    getOppositeDirection,
} from "./_utils/gameSnakeLogic";
import GameOverScreen from "./_components/GameOverScreen";

const Home: React.FC = () => {
    const [snake, setSnake] = useState<Position[]>(createSnake());
    const [food, setFood] = useState<Position>(createFood(20));
    const [specialFood, setSpecialFood] = useState<Position | null>(null);
    const [direction, setDirection] = useState<Position>(DIRECTIONS.RIGHT);
    const [gameOver, setGameOver] = useState<boolean>(false);
    const [running, setRunning] = useState<boolean>(false);
    const [score, setScore] = useState<number>(0);
    const [speed, setSpeed] = useState<number>(0);
    const boardSize = 20;

    const handleStart = () => {
        setSnake(createSnake());
        setFood(createFood(boardSize));
        setSpecialFood(null);
        setDirection(DIRECTIONS.RIGHT);
        setGameOver(false);
        setRunning(true);
        setScore(0);
        setSpeed(250);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
        let newDirection;
        switch (e.key) {
            case "ArrowUp":
                newDirection = DIRECTIONS.UP;
                break;
            case "ArrowDown":
                newDirection = DIRECTIONS.DOWN;
                break;
            case "ArrowLeft":
                newDirection = DIRECTIONS.LEFT;
                break;
            case "ArrowRight":
                newDirection = DIRECTIONS.RIGHT;
                break;
            default:
                return;
        }
        if (newDirection && newDirection !== getOppositeDirection(direction)) {
            setDirection(newDirection);
        }
    };

    useEffect(() => {
        if (running) {
            document.body.style.overflow = "hidden";
            window.addEventListener("keydown", handleKeyDown);
            return () => window.removeEventListener("keydown", handleKeyDown);
        } else {
            document.body.style.overflow = "";
        }
    }, [running, direction]);

    useEffect(() => {
        if (running && !gameOver) {
            const interval = setInterval(() => {
                setSnake((prev) => {
                    const newSnake = moveSnake(prev, direction, boardSize);
                    if (checkCollision(newSnake)) {
                        setGameOver(true);
                        setRunning(false);
                        return prev;
                    }
                    if (newSnake[0].x === food.x && newSnake[0].y === food.y) {
                        setFood(createFood(boardSize));
                        newSnake.push({ ...newSnake[newSnake.length - 1] });
                        setScore((prevScore) => prevScore + 10);
                        setSpeed((prevSpeed) => Math.max(prevSpeed - 10, 50));
                    }
                    if (
                        specialFood &&
                        newSnake[0].x === specialFood.x &&
                        newSnake[0].y === specialFood.y
                    ) {
                        setSpecialFood(null);
                        newSnake.push({ ...newSnake[newSnake.length - 1] });
                        setScore((prevScore) => prevScore + 50);
                        setSpeed((prevSpeed) => Math.max(prevSpeed - 20, 50));
                    }
                    return newSnake;
                });
            }, speed);
            return () => clearInterval(interval);
        }
    }, [running, direction, food, specialFood, gameOver, speed]);

    useEffect(() => {
        let specialFoodTimeout: NodeJS.Timeout;
        if (running) {
            const specialFoodInterval = setInterval(() => {
                setSpecialFood(createFood(boardSize));
                specialFoodTimeout = setTimeout(() => {
                    setSpecialFood(null);
                }, 5000);
            }, 15000);

            return () => {
                clearInterval(specialFoodInterval);
                clearTimeout(specialFoodTimeout);
            };
        }
    }, [running]);

    return (
        <div className="flex anim-opacity flex-col relative items-center py-10 justify-center overflow-hidden">
            <GameOverScreen score={score} running={running} />
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
        </div>
    );
};

export default Home;
