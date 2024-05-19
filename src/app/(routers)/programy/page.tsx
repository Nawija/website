import BtnMain from "@/components/BtnMain";
import PageHeader from "@/components/PageHeader";

export default function page() {
    return (
        <div className="anim-opacity">
            <PageHeader
                title="Programy"
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            />
            <section>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 wrapper">
                    <AppCard
                        href="bezpieczne-haslo"
                        title="Bezpieczne Hasło"
                        imgUrl="https://cdn.pixabay.com/photo/2017/10/31/09/55/fingerprint-2904774_1280.jpg"
                    />
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
        <div className="relative p-4 bg-white border rounded-xl text-center space-y-12">
            <div>
                <img src={imgUrl} className="h-full w-full" />
            </div>

            <h2 className="text-sm uppercase font-bold tracking-widest mb-4">
                {title}
            </h2>
            <BtnMain href={`/programy/` + href}>Zobacz</BtnMain>
        </div>
    );
}
