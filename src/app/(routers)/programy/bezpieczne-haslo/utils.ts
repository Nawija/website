import { CHAR_SETS, STRENGTH_LEVELS } from "@/constants/Apps";

export const generatePassword = (length: number, options: {
    lower: boolean;
    upper: boolean;
    numbers: boolean;
    symbols: boolean;
}): string => {
    let charset = "";
    if (options.lower) charset += CHAR_SETS.lower;
    if (options.upper) charset += CHAR_SETS.upper;
    if (options.numbers) charset += CHAR_SETS.numbers;
    if (options.symbols) charset += CHAR_SETS.symbols;

    if (!charset) {
        alert("Please select at least one character type.");
        return "";
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    return password;
};

export const evaluateStrength = (length: number): string => {
    for (let level of STRENGTH_LEVELS) {
        if (length >= level.min) {
            return level.label;
        }
    }
    return "Słabe";
};