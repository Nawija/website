import { useState, useEffect } from 'react';
import { Position } from '../_utils/gameSnakeLogic';

interface FoodProps {
  food: Position;
  boardSize: number;
}

const SpecialFood: React.FC<FoodProps> = ({ food, boardSize }) => {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="absolute flex items-center justify-center bg-yellow-500 rounded-full animate-pulse"
      style={{
        top: `${(100 / boardSize) * food.y}%`,
        left: `${(100 / boardSize) * food.x}%`,
        width: `${100 / boardSize}%`,
        height: `${100 / boardSize}%`,
      }}
    >
      <span className="text-red-500 text-2xl">{countdown}</span>
    </div>
  );
};

export default SpecialFood;
