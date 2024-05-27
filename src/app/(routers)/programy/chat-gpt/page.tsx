
import Chat from "./_components/Chat";

export default function page() {
    return (
        <div className="wrapper flex items-center justify-center h-[80vh] mx-4 flex-col space-y-4 lg:mt-12">
            <p className="mt-12 text-4xl">Chat-GPT</p>
            <Chat />
        </div>
    );
}
