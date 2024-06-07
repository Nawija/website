// pages/page.tsx
import MemeGenerator from "./_components/MemeGenerator";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col items-center anim-opacity justify-start">
            <h1 className="text-4xl font-bold mt-20 mb-6">Meme Generator</h1>
            <MemeGenerator />
        </div>
    );
}
