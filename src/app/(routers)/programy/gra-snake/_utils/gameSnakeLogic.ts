export const DIRECTIONS = {
    UP: { x: 0, y: -1 },
    DOWN: { x: 0, y: 1 },
    LEFT: { x: -1, y: 0 },
    RIGHT: { x: 1, y: 0 },
};

export interface Position {
    x: number;
    y: number;
}

export const createSnake = (): Position[] => [
    { x: 2, y: 2 },
    { x: 1, y: 2 },
    { x: 0, y: 2 },
];

export const createFood = (boardSize: number): Position => ({
    x: Math.floor(Math.random() * boardSize),
    y: Math.floor(Math.random() * boardSize),
});

export const moveSnake = (
    snake: Position[],
    direction: Position,
    boardSize: number
): Position[] => {
    const newSnake = [...snake];
    const head = { ...newSnake[0] };
    head.x = (head.x + direction.x + boardSize) % boardSize;
    head.y = (head.y + direction.y + boardSize) % boardSize;
    newSnake.unshift(head);
    newSnake.pop();
    return newSnake;
};

export const checkCollision = (snake: Position[]): boolean => {
    const head = snake[0];
    for (let i = 1; i < snake.length; i++) {
        if (snake[i].x === head.x && snake[i].y === head.y) {
            return true;
        }
    }
    return false;
};

export const getOppositeDirection = (direction: Position): Position => {
    switch (direction) {
        case DIRECTIONS.UP:
            return DIRECTIONS.DOWN;
        case DIRECTIONS.DOWN:
            return DIRECTIONS.UP;
        case DIRECTIONS.LEFT:
            return DIRECTIONS.RIGHT;
        case DIRECTIONS.RIGHT:
            return DIRECTIONS.LEFT;
        default:
            return direction;
    }
};
