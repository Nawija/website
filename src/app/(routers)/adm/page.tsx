import Link from "next/link";
import React from "react";

export default function AdminPage() {
    return (
        <div className="flex items-center justify-center h-[80vh] w-full lg:space-x-4 space-y-4 lg:space-y-0">
            <Link
                href="https://website-3187.admin.datocms.com/editor"
                target="_blank"
                className="px-4 py-2 bg-black text-white font-bold text-xl"
            >
                CMS
            </Link>
            <Link
                href="/"
                className="px-4 py-2 bg-black text-white font-bold text-xl"
            >
                Wiadomości
            </Link>
            <Link
                href="/"
                className="px-4 py-2 bg-black text-white font-bold text-xl"
            >
                Statystyki
            </Link>
        </div>
    );
}
