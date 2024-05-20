"use client";

import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import PageHeader from "@/components/PageHeader";
import CopyButton from "@/components/buttons/CopyButton";
import BtnMain from "@/components/BtnMain";
import { DEFINITION } from "@/constants/Data";

export default function Page() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true });
    const [password, setPassword] = useState<string>("");
    const [length, setLength] = useState<number>(20);
    const [history, setHistory] = useState<string[]>([]);
    const [strength, setStrength] = useState<string>("");

    const generatePassword = () => {
        const charset =
            "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let newPassword: string = "";
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

    const evaluateStrength = (length: number) => {
        switch (true) {
            case length >= 50:
                return "Absolutnie niezłamywalne";
            case length >= 45:
                return "Nadludzko silne";
            case length >= 40:
                return "Niezwykle silne";
            case length >= 35:
                return "Ekstremalnie silne";
            case length >= 30:
                return "Niesamowicie silne";
            case length >= 25:
                return "Wyjątkowo silne";
            case length >= 20:
                return "Bardzo Silne";
            case length >= 15:
                return "Silne";
            case length >= 10:
                return "Umiarkowane";
            default:
                return "Słabe";
        }
    };

    useEffect(() => {
        setStrength(evaluateStrength(length));
    }, [length]);

    return (
        <div className="anim-opacity">
            <PageHeader
                title="Generator mocnych haseł"
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            />
            <div className="my-4 text-center flex items-center justify-center flex-col">
                <label className="block mb-2">
                    Wybierz długość hasła: {length}
                </label>

                <input
                    type="range"
                    min="5"
                    max="50"
                    value={length}
                    onChange={(e) => setLength(Number(e.target.value))}
                    className="w-64 my-4 bg-red-500"
                />
                <div className="my-2">
                    <span>Siła hasła: </span>
                    <span
                        className={`font-bold ${
                            strength === "Absolutnie niezłamywalne"
                                ? "text-green-500"
                                : strength.includes("Nadludzko silne")
                                ? "text-green-600"
                                : strength.includes("Niezwykle silne")
                                ? "text-green-600"
                                : strength.includes("Ekstremalnie silne")
                                ? "text-green-700"
                                : strength.includes("Niesamowicie silne")
                                ? "text-lime-500"
                                : strength.includes("Wyjątkowo silne")
                                ? "text-lime-600"
                                : strength.includes("Bardzo Silne")
                                ? "text-lime-800"
                                : strength.includes("Silne")
                                ? "text-lime-800"
                                : strength.includes("Umiarkowane")
                                ? "text-yellow-600"
                                : strength.includes("Słabe")
                                ? "text-red-500"
                                : ""
                        }`}
                    >
                        {strength}
                    </span>
                </div>
                <BtnMain onClick={generatePassword}>Wygeneruj Hasło</BtnMain>

                <div className="flex items-center justify-center space-x-3 my-12">
                    <div className="font-bold text-lg">{password}</div>
                    {password && <CopyButton copy={password} />}
                </div>

                <div className="flex flex-col sm:flex-row items-start justify-center gap-2 w-full wrapper">
                    <Definition />
                    <HistoryPassword
                        history={history}
                        clearHistory={clearHistory}
                    />
                </div>
            </div>
        </div>
    );
}

function Definition() {
    return (
        <div className="w-full h-full p-4 bg-white border rounded-xl flex-col flex items-start text-start justify-start space-y-6">
            {DEFINITION.map((d, i) => (
                <div key={i} className="text-sm">
                    <p className="font-bold text-xl">{d.number}</p>
                    <ul className="space-y-1 ml-6 ">
                        <li className="list-disc text-base">{d.title}</li>
                        <li className="list-disc text-base">{d.desc}</li>
                    </ul>
                </div>
            ))}
        </div>
    );
}

function HistoryPassword({
    history,
    clearHistory,
}: {
    history: string[];
    clearHistory: () => void;
}) {
    return (
        <>
            <div className="transition-all bg-white w-full p-4 border flex flex-col items-end justify-center rounded-xl">
                <div className="flex items-center justify-between w-full mb-6">
                    {history.length > 0 ? (
                        <button
                            onClick={clearHistory}
                            className="bg-red-400 text-xs px-2 p-1 rounded-xl text-white font-bold"
                        >
                            Wyczyść historie
                        </button>
                    ) : (
                        <div></div>
                    )}
                    <p className="font-medium flex items-start ">
                        Historia{" "}
                        <span className="text-xs">({history.length})</span>
                    </p>
                </div>
                <ul>
                    {history.map((item: string, index: number) => (
                        <li
                            key={index}
                            className="mb-3 text-sm flex items-center justify-end space-x-2"
                        >
                            <p>
                                {item.slice(0, 21)}
                                {item.length > 21 && <span>...</span>}
                            </p>

                            <CopyButton copy={item} />
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
