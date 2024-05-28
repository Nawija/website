"use client";

import React, { useState, useRef } from "react";
import MemeForm from "./MemeForm";
import MemeDisplay from "./MemeDisplay";
import { toPng } from "html-to-image";

type MemeStyles = 'style1' | 'style2' | 'style3' | 'style4';

type MemeRefs = {
    [key in MemeStyles]: React.RefObject<HTMLDivElement>
};

const MemeGenerator: React.FC = () => {
    const [memeData, setMemeData] = useState({
        topText: "",
        bottomText: "",
        memeSrc: "",
    });

    const memeRefs: MemeRefs = {
        style1: useRef<HTMLDivElement>(null),
        style2: useRef<HTMLDivElement>(null),
        style3: useRef<HTMLDivElement>(null),
        style4: useRef<HTMLDivElement>(null),
    };

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

    const handleDownload = async (style: MemeStyles) => {
        if (memeRefs[style].current) {
            const dataUrl = await toPng(memeRefs[style].current!);
            const link = document.createElement("a");
            link.href = dataUrl;
            link.download = `${style}-meme.png`;
            link.click();
        }
    };

    return (
        <div className="max-w-screen-2xl mx-auto p-4">
            <MemeForm onGenerate={handleGenerate} />
            {memeData.topText && (
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {(['style1', 'style2', 'style3', 'style4'] as MemeStyles[]).map(style => (
                        <div key={style}>
                            <div ref={memeRefs[style]}>
                                <MemeDisplay
                                    memeSrc={memeData.memeSrc}
                                    topText={memeData.topText}
                                    bottomText={memeData.bottomText}
                                    style={style}
                                />
                            </div>
                            <button
                                onClick={() => handleDownload(style)}
                                className="bg-green-500 text-white p-2 rounded mx-auto w-full"
                            >
                                Pobierz
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MemeGenerator;
