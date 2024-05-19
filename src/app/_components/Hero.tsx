"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import Link from "next/link";

export default function Hero() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true });
    return (
        <section
            ref={ref}
            className="flex items-center justify-center flex-col max-w-screen-lg mx-auto space-y-4 lg:space-y-10 my-12 lg:my-24 text-center px-4"
        >
            <h1
                style={{
                    transform: isInView ? "none" : "translateY(80px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1)",
                }}
                className="text-2xl lg:text-4xl xl:text-7xl font-extrabold uppercase"
            >
                Profesjonalny Fotograf w Siedlcach
            </h1>
            <p
                style={{
                    transform: isInView ? "none" : "translateY(80px)",
                    opacity: isInView ? 1 : 0,
                    transition:
                        "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
                }}
                className="text-black lg:text-xl max-w-screen-md mx-auto"
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                neque odio veritatis dignissimos animi ipsam eaque a voluptas
                earum. Consequuntur quaerat
            </p>
            <div
                style={{
                    transform: isInView ? "none" : "translateX(-80px)",
                    opacity: isInView ? 1 : 0,
                    transition:
                        "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s",
                }}
                className="flex items-center justify-center space-x-2"
            >
                <Link
                    href="/galeria"
                    className="uppercase px-5 py-2 font-bold lg:text-lg text-xs tracking-wider bg-black text-white"
                >
                    Portfolio
                </Link>
            </div>
        </section>
    );
}
