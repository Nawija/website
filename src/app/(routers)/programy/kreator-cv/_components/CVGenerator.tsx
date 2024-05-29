"use client";

import { useState, useRef } from "react";
import CVForm from "./CVForm";
import CVStyle1 from "./CVStyle1";
import CVStyle2 from "./CVStyle2";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { Heart } from "lucide-react";

type Skill = {
    id: number;
    skill: string;
};

type Experience = {
    id: number;
    jobTitle: string;
    company: string;
    duration: string;
    description: string;
};

export default function CVGenerator() {
    const [cvData, setCvData] = useState({
        name: "",
        email: "",
        phone: "",
        imgSrc: "",
        skills: [] as Skill[],
        experience: [] as Experience[],
    });

    const cvRef1 = useRef<HTMLDivElement>(null);
    const cvRef2 = useRef<HTMLDivElement>(null);

    const handleGenerate = (
        name: string,
        email: string,
        phone: string,
        imgSrc: string,
        skills: Skill[],
        experience: Experience[]
    ) => {
        setCvData({ name, email, phone, imgSrc, skills, experience });
    };

    const handleDownload = async (cvRef: React.RefObject<HTMLDivElement>) => {
        if (cvRef.current) {
            const canvas = await html2canvas(cvRef.current);
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF("p", "mm", "a4");
            const imgProps = pdf.getImageProperties(imgData);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

            pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
            pdf.save(`cv-${cvData.name}.pdf`);
        }
    };

    return (
        <div className="flex flex-col lg:flex-row items-start justify-start bg-gray-100">
            <CVForm onGenerate={handleGenerate} />
            {cvData.name ? (
                <div className="flex flex-col items-center bg-background py-4 lg:py-12 space-y-12 justify-center w-full mx-auto">
                    <div>
                        <div className="w-[495px] h-[770px]" ref={cvRef1}>
                            <CVStyle1
                                name={cvData.name}
                                email={cvData.email}
                                phone={cvData.phone}
                                imgSrc={cvData.imgSrc}
                                skills={cvData.skills}
                                experience={cvData.experience}
                            />
                        </div>
                        <DownloadBtn onClick={() => handleDownload(cvRef1)} />
                    </div>

                    <div>
                        <div className="w-[495px] h-[770px]" ref={cvRef2}>
                            <CVStyle2
                                name={cvData.name}
                                email={cvData.email}
                                phone={cvData.phone}
                                imgSrc={cvData.imgSrc}
                                skills={cvData.skills}
                                experience={cvData.experience}
                            />
                        </div>
                        <DownloadBtn onClick={() => handleDownload(cvRef2)} />
                    </div>
                </div>
            ) : (
                <div className="bg-background min-h-screen w-full space-y-12 px-6 text-center flex items-center justify-center flex-col">
                    <h1 className="text-4xl font-medium">Darmowy Kreator CV</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Obcaecati velit pariatur voluptatibus?
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Obcaecati velit pariatur voluptatibus riatur
                        voluptatibus?
                    </p>
                    <div className="px-10 py-5 border border-red-400 text-red-500 flex items-center justify-center">
                        <p className="mr-2 text-lg uppercase">Dotacja</p>

                        <Heart fill="red" />
                    </div>
                </div>
            )}
        </div>
    );
}

function DownloadBtn({
    onClick,
}: {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}) {
    return (
        <button
            onClick={onClick}
            className="bg-green-600 text-white px-4 py-1.5 rounded mt-4"
        >
            Pobierz za darmo
        </button>
    );
}
