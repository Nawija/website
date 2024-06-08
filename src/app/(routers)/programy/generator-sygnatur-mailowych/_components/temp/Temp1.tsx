"use client";

import React from "react";

interface SignatureTemplateProps {
    firstName: string;
    lastName: string;
    imgUrl: string;
    phoneNumber: string;
    email: string;
}

const SignatureTemplate1: React.FC<SignatureTemplateProps> = ({
    firstName,
    lastName,
    imgUrl,
    phoneNumber,
    email,
}) => {
    return (
        <div
            style={{
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
                <p style={{ fontSize: "0.875rem", color: "#6b7280" }}>
                    {phoneNumber}
                </p>
                <p style={{ fontSize: "0.875rem", color: "#6b7280" }}>
                    {email}
                </p>
            </div>
        </div>
    );
};

export default SignatureTemplate1;
