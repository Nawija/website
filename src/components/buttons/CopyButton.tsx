"use client";

import { Check, ClipboardList } from "lucide-react";
import { useState } from "react";

export default function CopyButton({ copy }: { copy: string }) {
    const [iconAnimation, setIconAnimation] = useState(false);
    const copyToClipboard = () => {
        navigator.clipboard.writeText(copy).then(() => {
            setIconAnimation(true);
            setTimeout(() => {
                setIconAnimation(false);
            }, 1800);
        });
    };
    return (
        <button
            className={` ${
                iconAnimation
                    ? "text-green-600 hover:bg-green-50"
                    : "text-gray-500 hover:bg-zinc-200"
            } p-1.5 border rounded-xl transition-all`}
            onClick={copyToClipboard}
        >
            {iconAnimation ? <Check size={16} /> : <ClipboardList size={16} />}
        </button>
    );
}
