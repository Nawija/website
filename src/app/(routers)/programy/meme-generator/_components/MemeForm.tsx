// components/MemeForm.tsx
"use client";

import { useState } from "react";

interface MemeFormProps {
    onGenerate: (topText: string, bottomText: string, imageSrc: string) => void;
}

const MemeForm: React.FC<MemeFormProps> = ({ onGenerate }) => {
    const [topText, setTopText] = useState("");
    const [bottomText, setBottomText] = useState("");
    const [image, setImage] = useState<File | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const reader = new FileReader();
        reader.onload = () => {
            onGenerate(topText, bottomText, reader.result as string);
        };
        if (image) {
            reader.readAsDataURL(image);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-4">
            <div>
                <label className="block mb-2">Górny Tekst:</label>
                <input
                    type="text"
                    value={topText}
                    onChange={(e) => setTopText(e.target.value)}
                    className="border p-2 w-full rounded-md"
                />
            </div>
            <div>
                <label className="block mb-2">Dolny Tekst:</label>
                <input
                    type="text"
                    value={bottomText}
                    onChange={(e) => setBottomText(e.target.value)}
                    className="border p-2 w-full rounded-md"
                />
            </div>
            <div>
                <label className="block mb-2">Zdjęcie:</label>
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setImage(e.target.files?.[0] || null)}
                    className="border p-2 w-full rounded-md"
                />
            </div>
            <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded"
            >
                Wygeneruj
            </button>
        </form>
    );
};

export default MemeForm;
