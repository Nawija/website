"use client";

import React, { useRef } from "react";
import SignatureTemplate1 from "./temp/SignatureTemplate1";
import SignatureTemplate2 from "./temp/SignatureTemplate2";
import SignatureTemplate3 from "./temp/SignatureTemplate3";
import SignatureTemplate4 from "./temp/SignatureTemplate4";
import SignatureTemplate5 from "./temp/SignatureTemplate5";
import SignatureTemplate6 from "./temp/SignatureTemplate6";
import SignatureTemplate7 from "./temp/SignatureTemplate7";
import SignatureTemplate8 from "./temp/SignatureTemplate8";
import { toPng } from "html-to-image";
import {
    DownloadHtmlButton,
    CopyHtmlButton,
    DownloadImageButton,
} from "./Buttons";

interface SignaturePreviewProps {
    template:
        | "template1"
        | "template2"
        | "template3"
        | "template4"
        | "template5"
        | "template6"
        | "template7"
        | "template8";
    formData: {
        firstName: string;
        lastName: string;
        phoneNumber: string;
        email: string;
    };
}

const SignaturePreview: React.FC<SignaturePreviewProps> = ({
    template,
    formData,
}) => {
    const previewRef = useRef<HTMLDivElement>(null);

    const templateMap: { [key: string]: React.FC<any> } = {
        template1: SignatureTemplate1,
        template2: SignatureTemplate2,
        template3: SignatureTemplate3,
        template4: SignatureTemplate4,
        template5: SignatureTemplate5,
        template6: SignatureTemplate6,
        template7: SignatureTemplate7,
        template8: SignatureTemplate8,
    };

    const generateFullHtml = (htmlContent: string) => `
        <!DOCTYPE html>
        <html lang="pl">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
            body, table, td, div, p, a {
                margin: 0;
                padding: 0;
                border: 0;
                font-size: 100%;
                font: inherit;
                vertical-align: baseline;
            }
            body {
                line-height: 1.5;
                font-family: Arial, sans-serif;
                font-size: 15px;
            }
            </style>
          </head>
          <body class="p-4">
            ${htmlContent}
          </body>
        </html>
    `;

    const handleDownloadHtml = () => {
        if (previewRef.current) {
            const htmlContent = previewRef.current.innerHTML;
            const fullHtml = generateFullHtml(htmlContent);
            const blob = new Blob([fullHtml], { type: "text/html" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "signature.html";
            a.click();
            URL.revokeObjectURL(url);
        }
    };

    const handleCopyHtml = () => {
        if (previewRef.current) {
            const htmlContent = previewRef.current.innerHTML;
            const fullHtml = generateFullHtml(htmlContent);
            navigator.clipboard.writeText(fullHtml).then(
                () => {
                    alert("HTML copied to clipboard!");
                },
                () => {
                    alert("Failed to copy HTML.");
                }
            );
        }
    };

    const handleDownloadImage = () => {
        if (previewRef.current) {
            toPng(previewRef.current)
                .then((dataUrl) => {
                    const a = document.createElement("a");
                    a.href = dataUrl;
                    a.download = "signature.png";
                    a.click();
                })
                .catch((error) => {
                    console.error("Error generating image:", error);
                });
        }
    };

    const SelectedTemplate = templateMap[template];

    return (
        <>
            {formData.firstName && (
                <div style={{ marginTop: "1rem" }}>
                    <div ref={previewRef}>
                        <SelectedTemplate {...formData} />
                    </div>
                    <div
                        style={{
                            marginTop: "1rem",
                            display: "flex",
                            gap: "0.5rem",
                        }}
                    >
                        <DownloadHtmlButton onClick={handleDownloadHtml} />
                        <CopyHtmlButton onClick={handleCopyHtml} />
                        <DownloadImageButton onClick={handleDownloadImage} />
                    </div>
                </div>
            )}
        </>
    );
};

export default SignaturePreview;
