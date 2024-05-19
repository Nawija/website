"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { GripHorizontal } from "lucide-react";

export default function PageHeader({
    title,
    desc,
}: {
    title: string;
    desc: string;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true });
    return (
        <div
            ref={ref}
            className="space-y-8 text-center p-6 lg:py-12 max-w-lg mx-auto flex items-center justify-center flex-col"
        >
            <h1
                style={{
                    transform: isInView ? "none" : "translateY(80px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1)",
                }}
                className="text-3xl lg:text-4xl xl:text-5xl font-medium"
            >
                {title}
            </h1>
            <p
                style={{
                    transform: isInView ? "none" : "translateY(80px)",
                    opacity: isInView ? 1 : 0,
                    transition:
                        "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
                }}
            >
                {desc}
            </p>
            <GripHorizontal
                style={{
                    opacity: isInView ? 1 : 0,
                    transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s",
                }}
            />
        </div>
    );
}
