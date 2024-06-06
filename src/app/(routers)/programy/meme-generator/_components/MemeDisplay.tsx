interface MemeDisplayProps {
    memeSrc: string;
    topText: string;
    bottomText: string;
    style: string;
}

const MemeDisplay: React.FC<MemeDisplayProps> = ({
    memeSrc,
    topText,
    bottomText,
    style,
}) => {
    let topTextStyle =
        "absolute left-1/2 transform -translate-x-1/2 text-white text-2xl font-bold drop-shadow-md";
    let bottomTextStyle =
        "absolute left-1/2 transform -translate-x-1/2 text-white text-2xl font-bold drop-shadow-md";

    if (style === "style1") {
        topTextStyle += " p-4 top-2";
        bottomTextStyle += " p-4 bottom-2";
    } else if (style === "style2") {
        topTextStyle += " text-red-500 top-2";
        bottomTextStyle += " text-red-500 bottom-2";
    } else if (style === "style3") {
        topTextStyle += " bg-black/40 w-full top-0 py-1";
        bottomTextStyle += " bg-black/40 w-full bottom-0 py-1";
    } else if (style === "style4") {
        topTextStyle +=
            " bg-black/40 w-full tracking-wider uppercase top-0 py-1";
        bottomTextStyle +=
            " bg-black/40 w-full tracking-wider uppercase bottom-0 py-1";
    }

    return (
        <div className="relative text-center mb-4">
            <img src={memeSrc} alt="seovileo-meme" className="w-full max-h-[600px] object-cover" />
            <div className={topTextStyle}>{topText}</div>
            <div className={bottomTextStyle}>{bottomText}</div>
        </div>
    );
};

export default MemeDisplay;
