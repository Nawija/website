"use client";

import React, { useState } from "react";
import SignatureForm from "./_components/SignatureForm";
import SignaturePreview from "./_components/SignaturePreview";

const Home: React.FC = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
    });

    const [template, setTemplate] = useState<"template1" | "template2">(
        "template1"
    );

    const handleFormSubmit = (data: any) => {
        setFormData(data);
    };

    return (
        <div className="min-h-screen p-8 bg-gray-50 anim-opacity">
            <div className="mx-auto max-w-screen-lg px-4">
                <h1 className="text-2xl font-bold mb-4">
                    Email Signature Generator
                </h1>
                <SignatureForm onFormSubmit={handleFormSubmit} />
                <div className="mt-8">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Select Template
                    </label>
                    <select
                        value={template}
                        onChange={(e) =>
                            setTemplate(
                                e.target.value as "template1" | "template2"
                            )
                        }
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    >
                        <option value="template1">Template 1</option>
                        <option value="template2">Template 2</option>
                    </select>
                </div>
                <SignaturePreview template={template} formData={formData} />
            </div>
        </div>
    );
};

export default Home;
