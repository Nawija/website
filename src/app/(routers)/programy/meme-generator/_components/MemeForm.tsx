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
        <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 mb-20 w-[80vw] max-w-xl mx-auto"
        >
            <div>
                <label className="block mb-2">Top Text:</label>
                <input
                    type="text"
                    value={topText}
                    onChange={(e) => setTopText(e.target.value)}
                    className="border p-2 w-full"
                />
            </div>
            <div>
                <label className="block mb-2">Bottom Text:</label>
                <input
                    type="text"
                    value={bottomText}
                    onChange={(e) => setBottomText(e.target.value)}
                    className="border p-2 w-full"
                />
            </div>
            <div>
                <label className="block mb-2">Upload Image:</label>
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setImage(e.target.files?.[0] || null)}
                    className="border p-2 w-full"
                />
            </div>
            <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded"
            >
                Generate Meme
            </button>
        </form>
    );
};

export default MemeForm;
