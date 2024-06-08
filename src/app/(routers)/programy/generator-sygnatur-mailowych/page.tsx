"use client";

import React, { useState } from "react";
import SignatureForm from "./_components/SignatureForm";
import SignaturePreview from "./_components/SignaturePreview";

const TEMPLATES = {
    template1: "Template 1",
    template2: "Template 2",
    template3: "Template 3",
    template4: "Template 4",
    template5: "Template 5",
    template6: "Template 6",
    template7: "Template 7",
    template8: "Template 8",
};

type TemplateKey = keyof typeof TEMPLATES;

export default function Home() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        imgUrl: "",
        phoneNumber: "",
        email: "",
        additionalTexts: [] as string[],
    });

    const handleFormSubmit = (data: typeof formData) => setFormData(data);

    const handleAddText = () => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            additionalTexts: [...prevFormData.additionalTexts, ""],
        }));
    };

    const handleRemoveText = (index: number) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            additionalTexts: prevFormData.additionalTexts.filter((_, i) => i !== index),
        }));
    };

    const handleChangeText = (index: number, value: string) => {
        const newAdditionalTexts = [...formData.additionalTexts];
        newAdditionalTexts[index] = value;
        setFormData((prevFormData) => ({
            ...prevFormData,
            additionalTexts: newAdditionalTexts,
        }));
    };

    return (
        <div className="min-h-screen p-5 bg-gray-50 anim-opacity">
            <div className="px-4">
                <div className="mx-auto max-w-screen-lg ">
                    <h1 className="text-2xl font-bold mb-4">
                        Generator Stopek Mailowych
                    </h1>
                    <SignatureForm
                        onFormSubmit={handleFormSubmit}
                        formData={formData}
                        setFormData={setFormData}
                        onAddText={handleAddText}
                        onRemoveText={handleRemoveText}
                        onChangeText={handleChangeText}
                    />
                </div>
                {formData.firstName && (
                    <div className="mt-8 flex items-start justify-center flex-wrap gap-8">
                        {Object.entries(TEMPLATES).map(([key]) => (
                            <div key={key} className="my-8">
                                <SignaturePreview
                                    template={key as TemplateKey}
                                    formData={formData}
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
