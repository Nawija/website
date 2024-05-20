import Link from "next/link";
import { MainBtn } from "@/components/buttons/MainBtn";

export default function NotFound() {
  return (
    <div className="relative flex h-[90vh] flex-col items-center justify-center space-y-10 overflow-hidden px-4 text-center">
      <p className="absolute left-1/2 top-12 w-max -translate-x-1/2 bg-gradient-to-t from-white/10 to-transparent bg-clip-text text-5xl font-bold tracking-widest text-transparent lg:text-8xl">
        ERROR 404
      </p>
      <h1 className=" text-3xl font-bold uppercase text-white lg:text-6xl">
        Nie znaleziono strony
      </h1>
      <p className="mx-auto max-w-screen-sm">
        Przepraszamy za niedogodności. Strona nie została znaleziona. Kliknij
        przycisk, aby powrócić do strony głównej.
      </p>
      <MainBtn>
        <Link href="/">Strona Główna</Link>
      </MainBtn>
    </div>
  );
}
