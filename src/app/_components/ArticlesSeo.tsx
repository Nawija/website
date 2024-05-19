import Image from "next/image";
import s1 from "../../../public/people/camera-7903435_1280.webp";

const data = [
    {
        img: s1,
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit Fugiat esse minima voluptatem corporis tequod aspernatur voluptatum exercitationem et, optio tenetur distinctio iernatur, omnis nisi. Repellat repellendus deleniti dignissimos fugit accusantium minus voluptatibus.",
        desc1: "Lorem ipsum dolor sit amet, consectr, omnis nisi. Repellat repellendus deleniti dignissimos fugit accus voluptatibus.",
        desc2: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora debitis vitae asperiores recusandae esse, quod aspernatur voluptatum exercitationem et, optio tenetur distinctioatur, omnis nisi. Repellat repellendus deleniti dignissimos fugit accusantium minus voluptatibus.",
    },
    {
        img: s1,
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit Fugiat esse minima voluptatem corporis tempora, totam, laboriosam laborum itaque",
        desc1: "Lorem ipsum dolor sit amet, consectr, omnis nisi. Repellat repellendus deleniti dignissimos fugit accusantium minus voluptatibus.",
        desc2: "bus maxime culpa eligendi quasi. Non optio accusamus molestias nobis! Aspernatur, omnis nisi. Repellat repellendus deleniti dignissimos fugit accusantium minus voluptatibus.",
    },
    {
        img: s1,
        title: "elit Fugiat esse minima voluptatem corporis tempora, totam, laboriosam laborum itaque",
        desc1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora debitis vitae asperiores recusandae esse, quod aspernatur voluptatum exercitationem et, optio tenetur distinctio illum temporibus maxime culpa eligendi quasi. Non optio accusamus molestias nobis! Aspernatur, omnis nisi. Repellat repellendus deleniti dignissimos fugit accusantium minus voluptatibus.",
        desc2: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora debitis vitae asperiores recusandae esse, quod aspernatur voluptatum exercitationem et, optio tenetur distinctio illum tems nisi. Repellat repellendus deleniti dignissimos fugit accusantium minus voluptatibus.",
    },
];

export default function ArticlesSeo() {
    return (
        <>
            <h2 className="text-center text-2xl lg:text-3xl font-bold max-w-screen-lg mx-auto my-20 lg:my-24 px-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio quo perferendis, dolores totam
            </h2>
            <section className="max-w-screen-2xl mx-auto">
                {data.map((article, index) => (
                    <div
                        key={index}
                        className="flex lg:flex-row lg:my-24 flex-col items-center justify-center"
                    >
                        <div
                            className={`relative w-full h-96 ${
                                index % 2 ? "lg:order-1" : "order-0"
                            }`}
                        >
                            <Image
                                src={s1}
                                className="h-full w-full object-cover"
                                layout="fill"
                                alt="..."
                            />
                        </div>
                        <div className="p-10 space-y-4 max-w-screen-md text-lg lg:text-xl">
                            <h3 className="text-2xl lg:text-3xl font-bold">
                                {article.title}
                            </h3>
                            <p>{article.desc1}</p>
                            <p>{article.desc2}</p>
                        </div>
                    </div>
                ))}
            </section>
        </>
    );
}
