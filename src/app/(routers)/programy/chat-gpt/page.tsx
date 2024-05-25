
import Chat from "./_components/Chat";

export default function page() {
    return (
        <div className="wrapper flex items-center justify-center flex-col space-y-4 mt-12">
            <p className="mt-12 text-4xl">Chat-GPT</p>
            <Chat />
        </div>
    );
}
