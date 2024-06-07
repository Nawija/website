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
    });

    const [template, setTemplate] = useState<TemplateKey>("template1");

    const handleFormSubmit = (data: typeof formData) => setFormData(data);

    return (
        <div className="min-h-screen p-8 bg-gray-50 anim-opacity">
            <div className="mx-auto max-w-screen-lg px-4">
                <h1 className="text-2xl font-bold mb-4">Email Signature Generator</h1>
                <SignatureForm onFormSubmit={handleFormSubmit} />
                <div className="mt-8">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Select Template
                    </label>
                    <select
                        value={template}
                        onChange={(e) => setTemplate(e.target.value as TemplateKey)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    >
                        {Object.entries(TEMPLATES).map(([key, value]) => (
                            <option key={key} value={key}>
                                {value}
                            </option>
                        ))}
                    </select>
                </div>
                <SignaturePreview template={template} formData={formData} />
            </div>
        </div>
    );
}
