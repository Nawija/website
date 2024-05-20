"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ComponentProps, useState } from "react";

import { NAV_LINKS } from "@/constants/Links";
import Image from "next/image";

export default function Nav() {
    const [showMenu, setShowMenu] = useState(false);
    function handleShowMenu() {
        setShowMenu(!showMenu);
    }
    function closeMenu() {
        setShowMenu(false);
    }
    return (
        <header className="bg-foreground border-b w-full z-[998]">
            <nav className="max-w-screen-xl mx-auto p-4 flex items-center z-50 justify-between relative">
                <Logo />
                <BurgerMenu onClick={handleShowMenu} showMenu={showMenu} />

                {/* ----------- Desctop --------- */}
                <ul className="items-center justify-center lg:flex hidden text-sm">
                    <AllMappingNavLinks closeMenu={closeMenu} />
                </ul>
                {/* ----------- Mobile ---------- */}
                <ul
                    className={`${
                        showMenu ? "translate-x-0" : "-translate-x-full"
                    } flex flex-col absolute top-full text-lg -mt transition-transform left-0 w-full bg-background space-y-6 p-10 h-screen items-center justify-center lg:hidden`}
                >
                    <AllMappingNavLinks closeMenu={closeMenu} />
                </ul>
            </nav>
        </header>
    );
}

export function Logo() {
    return (
        <Link
            href="/"
            className="text-base font-medium flex items-center justify-center text-primary-foreground space-x-1.5"
        >
            <Image src="/seovileo.svg" height={25} width={25} alt="logo seovileo" loading="eager" />
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
    const BurgerStyle = "w-4 h-px bg-black transition-transform";
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
                "px-2 py-4 font-base transition-colors text-primary-foreground hover:text-accent-foreground",
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
