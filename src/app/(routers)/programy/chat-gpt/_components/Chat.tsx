import { useChat } from "ai/react";
import { useEffect, useRef } from "react";

const Chat = () => {
    const { messages, input, handleInputChange, handleSubmit } = useChat({
        api: "/api/openai",
    });

    const chatContainer = useRef<HTMLDivElement>(null);

    const scroll = () => {
        const { offsetHeight, scrollHeight, scrollTop } =
            chatContainer.current as HTMLDivElement;
        if (scrollHeight > -scrollTop + offsetHeight) {
            chatContainer.current?.scrollTo(0, scrollHeight + 200);
        }
    };

    useEffect(() => {
        scroll();
    }, [messages]);

    const renderResponse = () => {
        return (
            <div>
                {messages.map((m, index) => (
                    <div
                        key={m.id}
                        className={`${
                            m.role === "user" ? "user-chat" : "ai-chat"
                        }`}
                    >
                        <p>{m.content}</p>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div ref={chatContainer} className="flex items-center justify-between">
            {renderResponse()}
            <form
                className="z-20 flex items-center justify-center"
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    className="w-full py-1.5 px-4 rounded-l-xl bg-gray-200 outline-none"
                    onChange={handleInputChange}
                    value={input}
                />
                <button type="submit" className="py-1.5 px-4 rounded-r-xl bg-green-700 text-white">Enter</button>
            </form>
        </div>
    );
};

export default Chat;
