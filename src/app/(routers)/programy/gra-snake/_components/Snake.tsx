import { Position } from '../_utils/gameSnakeLogic';

interface SnakeProps {
  snake: Position[];
  boardSize: number;
}

const Snake: React.FC<SnakeProps> = ({ snake, boardSize }) => {
  return (
    <>
      {snake.map((segment, index) => (
        <div
          key={index}
          className="absolute bg-green-600"
          style={{
            top: `${(100 / boardSize) * segment.y}%`,
            left: `${(100 / boardSize) * segment.x}%`,
            width: `${100 / boardSize}%`,
            height: `${100 / boardSize}%`,
          }}
        />
      ))}
    </>
  );
};

export default Snake;
