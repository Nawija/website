import BtnMain from "@/components/BtnMain";
import PageHeader from "@/components/PageHeader";
import { APPS } from "@/constants/Apps";
import Link from "next/link";

export default function page() {
    return (
        <div className="anim-opacity">
            <PageHeader
                title="Programy"
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            />
            <section>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 wrapper">
                    {APPS.map((app, index) => (
                        <AppCard
                            key={index}
                            href={app.href}
                            title={app.title}
                            imgUrl={app.imgUrl}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}

function AppCard({
    imgUrl,
    href,
    title,
}: {
    imgUrl: string;
    href: string;
    title: string;
}) {
    return (
        <Link
            href={`/programy/${href}`}
            className="relative p-4 bg-white border rounded-xl text-center"
        >
            <div>
                <img src={imgUrl} className="h-full w-full" />
            </div>

            <h2 className="text-sm uppercase font-bold tracking-widest my-4">
                {title}
            </h2>
            <BtnMain>Zobacz</BtnMain>
        </Link>
    );
}
