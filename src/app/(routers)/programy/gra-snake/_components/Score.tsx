interface ScoreProps {
    score: number;
}

const Score: React.FC<ScoreProps> = ({ score }) => {
    return (
        <div className="text-white text-2xl absolute top-2 left-2">
            Punkty: {score}
        </div>
    );
};

export default Score;
