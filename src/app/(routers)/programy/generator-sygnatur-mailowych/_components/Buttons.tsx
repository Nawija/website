"use client";

type ButtonProps = {
    onClick: () => void;
    label: string;
    color: string;
};

const Button: React.FC<ButtonProps> = ({ onClick, label, color }) => {
    return (
        <button
            onClick={onClick}
            className="flex items-center justify-center text-xs py-2 px-4 text-white rounded-lg shadow-lg"
            style={{
                backgroundColor: color,
            }}
        >
            {label}
        </button>
    );
};

type ButtonType = {
    onClick: () => void;
};

export function DownloadHtmlButton({ onClick }: ButtonType) {
    return <Button onClick={onClick} label="Pobierz HTML" color="#2563eb" />;
}

export function CopyHtmlButton({ onClick }: ButtonType) {
    return <Button onClick={onClick} label="Kopiuj" color="#16a34a" />;
}

export function DownloadImageButton({ onClick }: ButtonType) {
    return <Button onClick={onClick} label="Pobierz PNG" color="#4b5563" />;
}
