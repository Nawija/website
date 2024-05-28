"use client";

import { useState, useRef } from "react";
import MemeForm from "./MemeForm";
import MemeDisplay from "./MemeDisplay";
import { toPng } from "html-to-image";

const MemeGenerator: React.FC = () => {
    const [memeData, setMemeData] = useState({
        topText: "",
        bottomText: "",
        memeSrc: "",
    });
    const memeRef = useRef<HTMLDivElement>(null);

    const handleGenerate = (
        topText: string,
        bottomText: string,
        imageSrc: string
    ) => {
        setMemeData({
            topText,
            bottomText,
            memeSrc: imageSrc,
        });
    };

    const handleDownload = async () => {
        if (memeRef.current) {
            const dataUrl = await toPng(memeRef.current);
            const link = document.createElement("a");
            link.href = dataUrl;
            link.download = "seovileoMeme.png";
            link.click();
        }
    };

    return (
        <div className="w-[80vw] max-w-[500px] mx-auto p-4 ">
            <MemeForm onGenerate={handleGenerate} />
            <div ref={memeRef}>
                <MemeDisplay
                    memeSrc={memeData.memeSrc}
                    topText={memeData.topText}
                    bottomText={memeData.bottomText}
                />
            </div>

            {memeData.memeSrc && (
                <button
                    onClick={handleDownload}
                    className="bg-green-500 absoute left-0 top-0 w-full h-full text-white p-2 rounded mt-4"
                >
                    Pobierz
                </button>
            )}
            
        </div>
    );
};

export default MemeGenerator;
