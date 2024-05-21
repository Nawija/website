import { ComponentProps } from "react";

export default function BtnMain(
    props: Omit<ComponentProps<"button">, "className">
) {
    return (
        <button
            {...props}
            className="px-4 py-2 text-sm border hover:brightness-75 bg-black text-white rounded-xl transition font-semibold uppercase"
        />
    );
}
