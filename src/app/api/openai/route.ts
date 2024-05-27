import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY } || " ");

export const runtime = "edge";

export async function POST(req: Request, res: Response) {
    const { messages } = await req.json();
    console.log("messages:", messages);

    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: "system",
                content: "jestes programista type script",
            },
            ...messages,
        ],
        stream: true,
        temperature: 1,
    });
    console.log(response);
    const stream = OpenAIStream(response);
    return new StreamingTextResponse(stream);
}
