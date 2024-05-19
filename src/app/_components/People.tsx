import Image from "next/image";
import s1 from "../../../public/people/chrzest-helenka-opinia.jpg";
import s2 from "../../../public/people/chrzest-mira.jpg";
import s3 from "../../../public/people/magda-i-dawid-opinia-.jpg";
import s4 from "../../../public/people/ola-i-pawel-opinia-.jpg";

const data = [
    {
        img: s1,
        title: "Ania & Tomek",
        desc: "Pełen profesjonalizm! Myślę, że najlepszą recenzją będzie fakt, że efekty przerosły Nasze najśmielsze oczekiwania 😍 Jarek towarzyszył Nam podczas Chrztu Świętego córki i z całego serca polecam wszystkim współpracę z Jarkiem podczas tak ważnego wydarzenia. Jarek zaczarował małą i idealnie uchwycił wszystkie gesty i momenty. Na pewno jeszcze nie raz spotkamy się z Jarkiem podczas ważnych dla Nas wydarzeń. ❤️",
    },
    {
        img: s2,
        title: "Magdalena & Karol",
        desc: "Fotograf na 5! 😊 Uchwycił wszystkie najważniejsze momenty i atmosferę tego dnia. Współpraca układała się znakomicie. Wspiera i doradzą a jest to bardzo potrzebne gdy pojawią się zdenerwowanie😁 Wspaniałe zdjęcia dzięki którym z łezka w oku będę wracać do dnia ślubu. Serdecznie polecam!",
    },
    {
        img: s3,
        title: "Ola & Paweł",
        desc: "Zdjęcia cudowne! :) Jesteśmy zachwyceni współpracą. Jarek jest osobą pełną pasji i pomysłów na zdjęcia. Sesja ślubna jak i plenerowa przebiegła w super atmosferze. Z całego serca polecam! :)",
    },
    {
        img: s4,
        title: "Małgorzata & Mirosław",
        desc: "Fantastyczną robotę robi, facet wie do czego służy aparat. W dodatku w dniu mojego ślubu uśmiechnięty, pomógł opanować stres związany z ślubem, mocno polecam",
    },
];

export default function People() {
    return (
        <>
            <h2 className="text-center text-2xl lg:text-4xl font-bold max-w-screen-lg mx-auto my-20 lg:my-24 px-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio quo perferendis, dolores totam
            </h2>
            <section className="gap-4 mx-auto mb-12 lg:mb-24 px-4 grid lg:grid-cols-4 max-w-screen-2xl">
                {data.slice(0, 4).map((article) => (
                    <div key={article.title} className="relative">
                        <div className="relative ">
                            <Image
                                src={article.img}
                                className="object-contain h-full w-full -z-10"
                                height={200}
                                width={300}
                                alt="..."
                            />
                            <p className="absolute left-0 bottom-0 w-full text-end text-lg lg:text-xl font-bold z-10 text-white bg-black/20 backdrop-blur-lg p-2">
                                {article.title}
                            </p>
                        </div>
                        <div className="font-medium p-4 w-max ml-auto bg-black text-white mt-2 rounded-2xl relative">
                            <div className="bg-black text-white w-4 h-4 absolute right-8 rotate-45 -top-2 z-10" />
                            <p>Zobacz Opinie</p>
                        </div>
                    </div>
                ))}
            </section>
        </>
    );
}
