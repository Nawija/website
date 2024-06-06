"use client";

import React, { useRef } from "react";
import SignatureTemplate1 from "./SignatureTemplate1";
import SignatureTemplate2 from "./SignatureTemplate2";

interface SignaturePreviewProps {
    template: "template1" | "template2";
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

    const handleDownloadHtml = () => {
        if (previewRef.current) {
            const htmlContent = previewRef.current.innerHTML;
            const fullHtml = `
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
                font-size: 14px;
                color: #333;
            }
            </style>
          </head>
          <body class="p-4">
            ${htmlContent}
          </body>
        </html>
      `;
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
            const fullHtml = `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Signature</title>
            <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
          </head>
          <body class="p-4">
            ${htmlContent}
          </body>
        </html>
      `;
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

    return (
        <>
            {formData.firstName && (
                <div className="mt-4">
                    <div ref={previewRef}>
                        {template === "template1" ? (
                            <SignatureTemplate1 {...formData} />
                        ) : (
                            <SignatureTemplate2 {...formData} />
                        )}
                    </div>
                    <div className="mt-4 flex space-x-2">
                        <button
                            onClick={handleDownloadHtml}
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Download as HTML
                        </button>
                        <button
                            onClick={handleCopyHtml}
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                        >
                            Copy HTML
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default SignaturePreview;
