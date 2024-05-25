"use client";

import { cn } from "@/lib/utils";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function GameOverScreen({
    score,
    running,
}: {
    score: number;
    running: boolean;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true });

    const generateRandomDots = () => {
        return Array.from({ length: 50 }, () => ({
            x: Math.random() * 1800,
            y: Math.random() * 1200,
        }));
    };
    const [dots, setDots] = useState(generateRandomDots());

    useEffect(() => {
        const interval = setInterval(() => {
            setDots(generateRandomDots());
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div
                className={cn(
                    `absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-[122px] w-[70vw] h-[70vw] max-w-[900px] max-h-[200px] rounded-full bg-green-600`,
                    score > 200 && "animate-pulse",
                    score >= 300 && running && "changleColor"
                )}
            />
            {dots.map((dot, index) => (
                <div
                    key={index}
                    ref={ref}
                    style={{
                        top: dot.y,
                        left: dot.x,
                        transform: isInView ? "none" : "translateY(80px)",
                        opacity: isInView ? 1 : 0,
                        transition: `all ${index}s cubic-bezier(0.17, 0.55, 0.55, 1) ${index}ms`,
                    }}
                    className="absolute w-2 h-2 bg-white/40 rounded-full"
                />
            ))}
        </>
    );
}
