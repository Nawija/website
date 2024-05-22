"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ComponentProps, useState } from "react";
import { BsMoonStarsFill } from "react-icons/bs";
import { IoSunnySharp } from "react-icons/io5";

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
            <nav className="max-w-screen-xl mx-auto p-4 flex items-center z-50 justify-between  relative">
                <Logo closeMenu={closeMenu} />
                <BurgerMenu onClick={handleShowMenu} showMenu={showMenu} />

                <div className="hidden lg:flex items-center justify-center">
                    <button className="text-primary-foreground hover:text-primary transition-colors p-2 hover:bg-background border rounded-xl">
                        <IoSunnySharp />
                    </button>
                </div>
                <ul
                    className={`${
                        showMenu
                            ? "translate-x-0 lg:-translate-x-1/2"
                            : "-translate-x-full lg:-translate-x-1/2"
                    } flex flex-col absolute top-full text-lg transition-transform left-0 w-10/12 border-r bg-black space-y-6 p-10 h-screen items-center justify-center lg:text-sm lg:flex-row lg:left-1/2 lg:space-y-0 lg:w-auto lg:h-auto lg:p-2 lg:top-1/2 lg:-translate-y-1/2 lg:bg-transparent lg:border-none`}
                >
                    <AllMappingNavLinks closeMenu={closeMenu} />
                    <div className="flex lg:hidden items-center justify-center">
                        <button className="text-primary-foreground hover:text-primary transition-colors p-2 hover:bg-background border rounded-xl">
                            <IoSunnySharp />
                        </button>
                    </div>
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
            <Image
                src="/seovileo.svg"
                alt="logo seovileo"
                height={25}
                width={25}
            />
            <span className="text-primary">Seovileo</span>
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
    const BurgerStyle = "w-4 h-px bg-white transition-transform";
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
                "px-2 py-4 font-medium transition-colors text-primary-foreground hover:text-primary",
                pathname === props.href && "text-primary"
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
