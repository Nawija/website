"use client";

import React, { useRef } from "react";
import { toPng } from "html-to-image";
import {
    DownloadHtmlButton,
    CopyHtmlButton,
    DownloadImageButton,
} from "./Buttons";
import {
    Temp1,
    Temp2,
    Temp3,
    Temp4,
    Temp5,
    Temp6,
    Temp7,
    Temp8,
} from "./temp/index";

const TEMPLATE_MAP = {
    template1: Temp1,
    template2: Temp2,
    template3: Temp3,
    template4: Temp4,
    template5: Temp5,
    template6: Temp6,
    template7: Temp7,
    template8: Temp8,
};

type TemplateKey = keyof typeof TEMPLATE_MAP;

type SignaturePreviewProps = {
    template: TemplateKey;
    formData: {
        firstName: string;
        lastName: string;
        imgUrl: string;
        phoneNumber: string;
        email: string;
    };
};

export default function SignaturePreview({
    template,
    formData,
}: SignaturePreviewProps) {
    const previewRef = useRef<HTMLDivElement>(null);
    const SelectedTemplate = TEMPLATE_MAP[template];

    const generateFullHtml = (htmlContent: string) => `
        <!DOCTYPE html>
        <html lang="pl">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
            * {
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
          <body>
            ${htmlContent}
          </body>
        </html>
    `;

    const handleDownloadHtml = () => {
        if (previewRef.current) {
            const blob = new Blob(
                [generateFullHtml(previewRef.current.innerHTML)],
                { type: "text/html" }
            );
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
            navigator.clipboard
                .writeText(generateFullHtml(previewRef.current.innerHTML))
                .then(
                    () => alert("HTML copied to clipboard!"),
                    () => alert("Failed to copy HTML.")
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
                .catch((error) =>
                    console.error("Error generating image:", error)
                );
        }
    };

    return (
        formData.firstName && (
            <div className="mt-4">
                <div ref={previewRef}>
                    <SelectedTemplate {...formData} />
                </div>
                <div className="flex mt-4 gap-2">
                    <DownloadHtmlButton onClick={handleDownloadHtml} />
                    <CopyHtmlButton onClick={handleCopyHtml} />
                    <DownloadImageButton onClick={handleDownloadImage} />
                </div>
            </div>
        )
    );
}
