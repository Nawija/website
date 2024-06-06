"use client";

import React from "react";

interface SignatureTemplateProps {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
}

const SignatureTemplate1: React.FC<SignatureTemplateProps> = ({
    firstName,
    lastName,
    phoneNumber,
    email,
}) => {
    return (
        <div
            style={{
                padding: "1rem",
                border: "1px solid #e2e8f0",
                borderRadius: "0.375rem",
                boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
            }}
        >
            <p
                style={{
                    fontSize: "1.125rem",
                    fontWeight: "600",
                    color: "#000000",
                }}
            >
                {firstName} {lastName}
            </p>
            <p style={{ fontSize: "0.875rem", color: "#6b7280" }}>
                {phoneNumber}
            </p>
            <p style={{ fontSize: "0.875rem", color: "#6b7280" }}>{email}</p>
        </div>
    );
};

export default SignatureTemplate1;
