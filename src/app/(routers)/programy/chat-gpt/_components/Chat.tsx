"use client";
import { useChat } from "ai/react";
import { useEffect, useRef } from "react";
import { FaArrowUp } from "react-icons/fa6";

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
            <div className="w-[83vw] max-w-[600px]">
                {messages.map((m, index) => (
                    <div
                        key={m.id}
                        className={`flex items-center justify-start border-b p-2 ${
                            m.role === "user" ? "user-chat" : "ai-chat"
                        }`}
                    >
                        <div className="p-3 w-8 h-8 text-lg rounded-full mr-3 bg-green-800 text-white flex items-center justify-center">
                            K
                        </div>
                        <p>{m.content}</p>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div
            ref={chatContainer}
            className="flex items-center justify-between flex-col h-full"
        >
            {renderResponse()}

            <form
                className="z-20 flex items-center py-2 px-4 justify-center bg-zinc-700 rounded-2xl"
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    placeholder="Napisz do Chat-GPT"
                    className="w-[70vw] max-w-[600px] p-2  rounded-l-xl outline-none bg-zinc-700 placeholder:text-sm"
                    onChange={handleInputChange}
                    value={input}
                />
                <button
                    type="submit"
                    className="p-2 rounded-full bg-zinc-900 hover:brightness-75 transition text-white"
                >
                    <FaArrowUp size={18} />
                </button>
            </form>
        </div>
    );
};

export default Chat;
