"use client";

import { useEffect, useState } from "react";
import PageHeader from "@/components/PageHeader";
import CopyButton from "@/components/buttons/CopyButton";
import BtnMain from "@/components/BtnMain";
import { generatePassword, evaluateStrength } from "./utils";
import { DEFINITION } from "@/constants/Data";

type OptionsType = {
    lower: boolean;
    upper: boolean;
    numbers: boolean;
    symbols: boolean;
};

export default function Page() {
    const [password, setPassword] = useState<string>("");
    const [length, setLength] = useState<number>(20);
    const [history, setHistory] = useState<string[]>([]);
    const [strength, setStrength] = useState<string>("");
    const [options, setOptions] = useState<OptionsType>({
        lower: true,
        upper: true,
        numbers: false,
        symbols: false,
    });

    const handleGeneratePassword = () => {
        const newPassword = generatePassword(length, options);
        if (newPassword) {
            setPassword(newPassword);
            setHistory([newPassword, ...history]);
        }
    };

    const clearHistory = () => {
        setHistory([]);
    };

    useEffect(() => {
        setStrength(evaluateStrength(length));
    }, [length]);

    const handleOptionChange = (option: keyof OptionsType) => {
        setOptions((prevOptions) => ({
            ...prevOptions,
            [option]: !prevOptions[option],
        }));
    };

    return (
        <div className="anim-opacity">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-blue-500 blur-[122px] w-[60vw] h-[60vw] max-w-[900px] max-h-[100px] -z-10" />
            <PageHeader
                title="Generator mocnych haseł"
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            />

            <div className="my-4 text-center flex items-center justify-center flex-col space-y-10">
                <div className="w-[88vw] max-w-[400px] flex flex-col items-center justify-center text-center space-y-8">
                <label className="block mb-2">
                    Wybierz długość hasła:{" "}
                    <span className="text-primary font-medium">
                        ( {length} )
                    </span>
                </label>

                <input
                    type="range"
                    min="5"
                    max="50"
                    value={length}
                    onChange={(e) => setLength(Number(e.target.value))}
                    className="w-full mx-auto my-4 bg-red-500"
                />
                </div>
                <div className="my-2 text-xs">
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
                <div className="flex relative space-x-4 items-start border p-4 mx-2 border-blue-500/30 rounded-3xl bg-blue-500/5">
                    <p className="absolute -top-3 px-4 text-blue-400 text-sm">
                        Wybierz
                    </p>
                    <label>
                        <input
                            type="checkbox"
                            checked={options.lower}
                            onChange={() => handleOptionChange("lower")}
                        />
                        <span className="text-blue-500 ml-2">Małe litery</span>
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={options.upper}
                            onChange={() => handleOptionChange("upper")}
                        />
                        <span className="text-blue-500 ml-2">Duże litery</span>
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={options.numbers}
                            onChange={() => handleOptionChange("numbers")}
                        />
                        <span className="text-blue-500 ml-2">Cyfry</span>
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={options.symbols}
                            onChange={() => handleOptionChange("symbols")}
                        />
                        <span className="text-blue-500 ml-2">
                            Znaki specjalne
                        </span>
                    </label>
                </div>
                <div
                    className={`flex items-start justify-center space-x-3 duration-500 rounded-xl transition-all ${
                        password ? "bg-white/10 p-2" : "bg-transparent p-0"
                    }`}
                >
                    <p
                        className={`font-bold text-lg w-[80vw] max-w-screen-sm transition-all overflow-x-auto ${
                            password ? "scale-100" : "scale-0"
                        }`}
                    >
                        {password}
                    </p>
                    {password && <CopyButton copy={password} />}
                </div>
                <BtnMain onClick={handleGeneratePassword}>
                    Wygeneruj Hasło
                </BtnMain>

                <div className="flex pt-12 flex-col sm:flex-row items-start justify-center gap-2 w-full wrapper">
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
        <div className="w-full h-full p-6 bg-white/5 border rounded-xl flex-col flex items-start text-start justify-start space-y-6">
            {DEFINITION.map((d, i) => (
                <div key={i} className="text-sm">
                    <p className="font-bold text-xl text-primary tracking-wide mb-2">
                        {d.number}
                    </p>
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
            <div className="transition-all bg-white/5 w-full p-4 border flex flex-col items-end justify-center rounded-xl">
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
