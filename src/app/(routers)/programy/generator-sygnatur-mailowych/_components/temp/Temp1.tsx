"use client";

import React from "react";

interface SignatureTemplateProps {
    firstName: string;
    lastName: string;
    imgUrl: string;
    additionalTexts: string[];
    phoneNumber: string;
    email: string;
}

const SignatureTemplate1: React.FC<SignatureTemplateProps> = ({
    firstName,
    lastName,
    imgUrl,
    additionalTexts,
    phoneNumber,
    email,
}) => {
    return (
        <div
            style={{
                fontSize: "0.875rem",
                color: "#6b7280",
                padding: "1rem",
                background: "white",
                border: "1px solid #e2e8f0",
                borderRadius: "0.375rem",
                display: "inline-flex",
            }}
        >
            {imgUrl && (
                <img
                    src={imgUrl}
                    style={{
                        width: "250px",
                        objectFit: "contain",
                        marginRight: "1rem",
                    }}
                    alt={`${firstName} ${lastName}`}
                />
            )}
            <div>
                <p
                    style={{
                        fontSize: "1.45rem",
                        fontWeight: "600",
                        color: "#000000",
                    }}
                >
                    {firstName} {lastName}
                </p>
                {additionalTexts.map((text, index) => (
                    <p key={index}>{text}</p>
                ))}
                <p>{phoneNumber}</p>
                <p>{email}</p>
            </div>
        </div>
    );
};

export default SignatureTemplate1;
