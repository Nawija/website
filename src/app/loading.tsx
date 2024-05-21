import { Loader2 } from "lucide-react";

export default function loading() {
    return (
        <div className="w-full h-screenflex items-center justify-center text-primary text-4xl font-extrabold">
            <div className="-mt-24">
                <Loader2 size={33} className="animate-spin" />
            </div>
        </div>
    );
}
