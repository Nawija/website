"use client";

import React, { useState, useRef } from "react";
import CVForm from "./CVForm";
import CVDisplay from "./CVDisplay";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import CVStyle1 from "./CVStyle1";
import CVStyle2 from "./CVStyle2";

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

const CVGenerator: React.FC = () => {
    const [cvData, setCvData] = useState({
        name: "",
        email: "",
        phone: "",
        skills: [] as Skill[],
        experience: [] as Experience[],
    });

    const cvRef1 = useRef<HTMLDivElement>(null);
    const cvRef2 = useRef<HTMLDivElement>(null);
    const cvRef3 = useRef<HTMLDivElement>(null);

    const handleGenerate = (
        name: string,
        email: string,
        phone: string,
        skills: Skill[],
        experience: Experience[]
    ) => {
        setCvData({ name, email, phone, skills, experience });
    };

    const handleDownload = async (
        cvRef: React.RefObject<HTMLDivElement>,
        style: string
    ) => {
        if (cvRef.current) {
            const canvas = await html2canvas(cvRef.current);
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF("p", "mm", "a4");
            const imgProps = pdf.getImageProperties(imgData);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

            pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
            pdf.save(`${style}-cv-${cvData.name}.pdf`);
        }
    };

    return (
        <div className="p-4 flex">
            <CVForm onGenerate={handleGenerate} />
            <div className="flex flex-col w-3/4">
                {cvData.name && (
                    <div className="mt-4">
                        <div className="w-[595px] h-[842px]" ref={cvRef1}>
                            <CVDisplay
                                name={cvData.name}
                                email={cvData.email}
                                phone={cvData.phone}
                                skills={cvData.skills}
                                experience={cvData.experience}
                            />
                        </div>
                        <button
                            onClick={() => handleDownload(cvRef1, "default")}
                            className="bg-green-500 text-white p-2 rounded mt-4"
                        >
                            Download Default CV
                        </button>
                    </div>
                )}
                {cvData.name && (
                    <div className="mt-4">
                        <div className="w-[595px] h-[842px]" ref={cvRef2}>
                            <CVStyle1
                                name={cvData.name}
                                email={cvData.email}
                                phone={cvData.phone}
                                skills={cvData.skills}
                                experience={cvData.experience}
                            />
                        </div>
                        <button
                            onClick={() => handleDownload(cvRef2, "style1")}
                            className="bg-green-500 text-white p-2 rounded mt-4"
                        >
                            Download CV Style 1
                        </button>
                    </div>
                )}
                {cvData.name && (
                    <div className="mt-4">
                        <div className="w-[595px] h-[842px]" ref={cvRef3}>
                            <CVStyle2
                                name={cvData.name}
                                email={cvData.email}
                                phone={cvData.phone}
                                skills={cvData.skills}
                                experience={cvData.experience}
                            />
                        </div>
                        <button
                            onClick={() => handleDownload(cvRef3, "style2")}
                            className="bg-green-500 text-white p-2 rounded mt-4"
                        >
                            Download CV Style 2
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CVGenerator;
