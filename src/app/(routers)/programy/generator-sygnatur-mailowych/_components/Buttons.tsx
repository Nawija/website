type ButtonProps = {
    onClick: () => void;
    label: string;
    color: string;
};

const Button: React.FC<ButtonProps> = ({ onClick, label, color }) => {
    return (
        <button
            onClick={onClick}
            style={{
                display: "inline-flex",
                justifyContent: "center",
                padding: "0.5rem 1rem",
                border: "none",
                boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
                fontSize: "0.875rem",
                fontWeight: "medium",
                borderRadius: "0.375rem",
                color: "white",
                backgroundColor: color,
                cursor: "pointer",
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
    return (
        <Button onClick={onClick} label="Download HTML" color="#2563eb" />
    );
}

export function CopyHtmlButton({ onClick }: ButtonType) {
    return <Button onClick={onClick} label="Copy HTML" color="#16a34a" />;
}

export function DownloadImageButton({ onClick }: ButtonType) {
    return (
        <Button onClick={onClick} label="Download Image" color="#4b5563" />
    );
}
