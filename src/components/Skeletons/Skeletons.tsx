import { ImSpinner6 } from "react-icons/im";

export function LoadingItem() {
    return (
        <div className="pt-4 flex items-center justify-center">
            <ImSpinner6 className="mr-2 animate-spin" /> <p>Ładowanie...</p>
        </div>
    );
}
