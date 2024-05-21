"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ComponentProps, useState } from "react";
import { BsMoonStarsFill } from "react-icons/bs";
import { IoSunnySharp } from "react-icons/io5";

import { NAV_LINKS } from "@/constants/Links";

export default function Nav() {
    const [showMenu, setShowMenu] = useState(false);
    function handleShowMenu() {
        setShowMenu(!showMenu);
    }
    function closeMenu() {
        setShowMenu(false);
    }
    return (
        <header className="bg-white dark:bg-black border-b w-full z-[998]">
            <nav className="max-w-screen-xl mx-auto p-4 flex items-center z-50 justify-between text-black dark:text-white relative">
                <Logo closeMenu={closeMenu} />
                <BurgerMenu onClick={handleShowMenu} showMenu={showMenu} />

                {/* ----------- Desctop --------- */}
                <ul className="items-center justify-center lg:flex hidden text-sm">
                    <AllMappingNavLinks closeMenu={closeMenu} />
                </ul>
                <div>
                    {localStorage.theme === "dark" ? (
                        <IoSunnySharp />
                    ) : (
                        <BsMoonStarsFill />
                    )}
                </div>
                {/* ----------- Mobile ---------- */}
                <ul
                    className={`${
                        showMenu ? "translate-x-0" : "-translate-x-full"
                    } flex flex-col absolute top-full text-lg -mt transition-transform left-0 w-10/12 border-r bg-black space-y-6 p-10 h-screen items-center justify-center lg:hidden`}
                >
                    <AllMappingNavLinks closeMenu={closeMenu} />
                </ul>
            </nav>
        </header>
    );
}

export function Logo({ closeMenu }: { closeMenu: () => void }) {
    return (
        <Link
            onClick={() => {
                closeMenu();
            }}
            href="/"
            className="text-base font-medium flex items-center justify-center space-x-1.5"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="none"
            >
                <path
                    fill-rule="evenodd"
                    d="M20.121.272c-1.821-.764-3.952.078-4.759 1.88l-1.889 4.216-5.803-3.342A5.16 5.16 0 0 0 .744 4.782c-2.343 3.808 1.211 8.4 5.592 7.224l5.24-1.407-3.369 7.517c-1.124 2.508.02 5.403 2.554 6.467 4.163 1.746 8.436-2.454 6.656-6.544l-2.46-5.651c-.313-.719-.376-1.47-.236-2.172 1.727.379 3.066 1.896 3.012 3.787l-.029 1.01c-.104 3.652 4.829 4.999 6.768 1.848 1.043-1.694.49-3.873-1.234-4.866l-7.076-4.076a3.88 3.88 0 0 1 1.991-.778l.802-.078c3.723-.362 4.58-5.357 1.165-6.789z"
                    className="fill-black dark:fill-white"
                />
            </svg>
            <span>Seovileo</span>
        </Link>
    );
}

type BurgerMenuProps = Omit<
    ComponentProps<"button">,
    "onClick" | "disabled"
> & {
    onClick: () => void;
    showMenu: boolean;
};
export function BurgerMenu({ showMenu, ...props }: BurgerMenuProps) {
    const BurgerStyle = "w-4 h-px bg-black dark:bg-white transition-transform";
    return (
        <button
            {...props}
            className="flex flex-col items-center justify-center space-y-1 lg:hidden"
        >
            <div
                className={`${BurgerStyle} ${
                    showMenu ? "transform rotate-[405deg] translate-y-1.5" : ""
                }`}
            />
            <div className={`${BurgerStyle} ${showMenu ? "opacity-0" : ""}`} />
            <div
                className={`${BurgerStyle} ${
                    showMenu ? "transform -rotate-45 -translate-y-1" : ""
                }`}
            />
        </button>
    );
}

type NavLinkProps = Omit<ComponentProps<typeof Link>, "className"> & {
    closeMenu: () => void;
};

export function NavLink({ closeMenu, ...props }: NavLinkProps) {
    const pathname = usePathname();
    return (
        <Link
            {...props}
            onClick={() => {
                closeMenu();
            }}
            className={cn(
                "px-2 py-4 font-base transition-colors hover:text-accent-foreground",
                pathname === props.href && "text-accent"
            )}
        />
    );
}

type AllMappingNavLinksProps = {
    closeMenu: () => void;
};

export function AllMappingNavLinks({ closeMenu }: AllMappingNavLinksProps) {
    return (
        <>
            {NAV_LINKS.map((link) => (
                <li key={link.href}>
                    <NavLink href={link.href} closeMenu={closeMenu}>
                        {link.title}
                    </NavLink>
                </li>
            ))}
        </>
    );
}
