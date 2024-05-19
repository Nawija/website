import Link from "next/link";
import { ComponentProps } from "react";

export default function LinkMain(
    props: Omit<ComponentProps<typeof Link>, "className">
) {
    return (
        <Link
            {...props}
            className="px-4 py-2 text-sm border mt-12 hover:bg-white hover:text-black transition-colors font-semibold uppercase"
        />
    );
}
