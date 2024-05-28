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
    const memeRefs = {
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

    const handleDownload = async (style: string) => {
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
                    <div>
                        <div ref={memeRefs.style1}>
                            <MemeDisplay
                                memeSrc={memeData.memeSrc}
                                topText={memeData.topText}
                                bottomText={memeData.bottomText}
                                style="style1"
                            />
                        </div>
                        <button
                            onClick={() => handleDownload("style1")}
                            className="bg-green-500 text-white p-2 rounded mx-auto w-full"
                        >
                            Pobierz
                        </button>
                    </div>
                    <div>
                        <div ref={memeRefs.style2}>
                            <MemeDisplay
                                memeSrc={memeData.memeSrc}
                                topText={memeData.topText}
                                bottomText={memeData.bottomText}
                                style="style2"
                            />
                        </div>
                        <button
                            onClick={() => handleDownload("style2")}
                            className="bg-green-500 text-white p-2 rounded mx-auto w-full"
                        >
                            Pobierz
                        </button>
                    </div>
                    <div>
                        <div ref={memeRefs.style3}>
                            <MemeDisplay
                                memeSrc={memeData.memeSrc}
                                topText={memeData.topText}
                                bottomText={memeData.bottomText}
                                style="style3"
                            />
                        </div>
                        <button
                            onClick={() => handleDownload("style3")}
                            className="bg-green-500 text-white p-2 rounded mx-auto w-full"
                        >
                            Pobierz
                        </button>
                    </div>
                    <div>
                        <div ref={memeRefs.style4}>
                            <MemeDisplay
                                memeSrc={memeData.memeSrc}
                                topText={memeData.topText}
                                bottomText={memeData.bottomText}
                                style="style3"
                            />
                        </div>
                        <button
                            onClick={() => handleDownload("style4")}
                            className="bg-green-500 text-white p-2 rounded mx-auto w-full"
                        >
                            Pobierz
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MemeGenerator;
