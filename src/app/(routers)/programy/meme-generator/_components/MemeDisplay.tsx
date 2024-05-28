interface MemeDisplayProps {
    memeSrc: string;
    topText: string;
    bottomText: string;
}

const MemeDisplay: React.FC<MemeDisplayProps> = ({
    memeSrc,
    topText,
    bottomText,
}) => {
    return (
        <div className="relative text-center">
            {memeSrc && (
                <img src={memeSrc} alt="seovileo-meme" className="w-full" />
            )}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-white text-2xl font-bold drop-shadow-md">
                {topText}
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-2xl font-bold drop-shadow-md">
                {bottomText}
            </div>
        </div>
    );
};

export default MemeDisplay;
