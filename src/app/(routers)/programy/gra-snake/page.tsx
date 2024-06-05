"use client";

import { useEffect, useState } from "react";
import {
    DIRECTIONS,
    createSnake,
    createFood,
    moveSnake,
    checkCollision,
    Position,
    getOppositeDirection,
} from "./_utils/gameSnakeLogic";
import ControlsMobile from "./_components/ControlsMobile";
import GameArea from "./_components/GameArea";
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
        window.scrollTo({ top: 0, behavior: "smooth" });
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
            return () => {
                window.removeEventListener("keydown", handleKeyDown);
            };
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

    useEffect(() => {
        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    const changeDirection = (newDirection: Position) => {
        if (newDirection !== getOppositeDirection(direction)) {
            setDirection(newDirection);
        }
    };

    return (
        <div className="flex anim-opacity flex-col relative items-center py-10 justify-center overflow-hidden">
            <GameOverScreen score={score} running={running} />
            <GameArea
                snake={snake}
                food={food}
                specialFood={specialFood}
                boardSize={boardSize}
                score={score}
                gameOver={gameOver}
                running={running}
                handleStart={handleStart}
            />
            <ControlsMobile
                changeDirection={changeDirection}
                direction={direction}
            />
        </div>
    );
};

export default Home;
