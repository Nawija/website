"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import { ClipboardList } from "lucide-react";

export default function Page() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true });
    const [password, setPassword] = useState("");
    const [length, setLength] = useState(20);
    const [history, setHistory] = useState([]);

    const generatePassword = () => {
        const charset =
            "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let newPassword = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            newPassword += charset[randomIndex];
        }
        setPassword(newPassword);
        setHistory([newPassword, ...history]);
    };

    const clearHistory = () => {
        setHistory([]);
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(password).then(() => {
            alert("Password copied to clipboard!");
        });
    };

    return (
        <div className="anim-opacity">
            <PageHeader
                title="Programy"
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            />
            <div style={{ marginTop: "20px", textAlign: "center" }}>
                <label style={{ display: "block", marginBottom: "10px" }}>
                    Dlugość hasła: {length}
                </label>
                <input
                    type="range"
                    min="5"
                    max="50"
                    value={length}
                    onChange={(e) => setLength(Number(e.target.value))}
                    style={{ width: "300px" }}
                />
                <br />
                <button
                    onClick={generatePassword}
                    className="px-2 py-1 bg-black text-white rounded-xl"
                    style={{
                        padding: "10px 20px",
                        fontSize: "16px",
                        marginTop: "10px",
                    }}
                >
                    Wygeneruj Hasło
                </button>
                {password && (
                    <div className="flex items-center justify-center space-x-3">
                        <div className="font-bold text-xl my-12">
                            {password}
                        </div>
                        <button
                            className="p-1 border rounded-xl"
                            onClick={copyToClipboard}
                        >
                            <ClipboardList size={15} color="text-gray-600" />
                        </button>
                    </div>
                )}

                {history.length > 0 && (
                    <div className="absolute text-end right-12 top-20 transition-all bg-white p-10 border flex flex-col items-end justify-center rounded-xl">
                        <p className="">Historia</p>
                        <ul>
                            {history.map((item, index) => (
                                <li key={index} className="mb-3 text-sm">
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <button
                            onClick={clearHistory}
                            className="bg-red-400 text-xs px-2 p-1 rounded-xl text-white font-bold"
                        >
                            Wyczyść historie
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
