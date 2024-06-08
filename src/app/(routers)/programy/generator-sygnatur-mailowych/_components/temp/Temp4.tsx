"use client";

import { SignatureTemplateProps } from "../../types";

export default function SignatureTemplate4({
    firstName,
    lastName,
    subTitle,
    imgUrl,
    additionalTexts,
    phoneNumber,
    email,
}: SignatureTemplateProps) {
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
                {subTitle && (
                    <p
                        style={{
                            fontSize: "1rem",
                            margin: "0.5rem 0",
                            fontWeight: "500",
                            color: "#000000",
                        }}
                    >
                        {subTitle}
                    </p>
                )}
                {additionalTexts &&
                    additionalTexts.map((text, index) => (
                        <p key={index}>{text}</p>
                    ))}
                {phoneNumber && (
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            style={{
                                height: "0.8rem",
                                width: "0.8rem",
                                marginRight: "0.3rem",
                            }}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                            />
                        </svg>
                        <p>{phoneNumber}</p>
                    </div>
                )}

                {email && (
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            style={{
                                height: "0.8rem",
                                width: "0.8rem",
                                marginRight: "0.3rem",
                            }}
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                            />
                        </svg>

                        <p>{email}</p>
                    </div>
                )}
            </div>
        </div>
    );
}
