import { Position } from '../_utils/gameSnakeLogic';

interface FoodProps {
  food: Position;
  boardSize: number;
}

const Food: React.FC<FoodProps> = ({ food, boardSize }) => {
  return (
    <div
      className="absolute bg-gradient-to-tr from-green-400 to-red-700 rounded-full animate-pulse"
      style={{
        top: `${(100 / boardSize) * food.y}%`,
        left: `${(100 / boardSize) * food.x}%`,
        width: `${100 / boardSize}%`,
        height: `${100 / boardSize}%`,
      }}
    />
  );
};

export default Food;
