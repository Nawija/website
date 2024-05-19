import { Star } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { EmblaOptionsType } from "embla-carousel";
const AlignEmblaCarousel = dynamic(
    () => import("@/components/EmblaCarousel/AlignEmblaCarousel")
);

type PropType = {
    allHeros: [];
    OPTIONS?: EmblaOptionsType;
};
export default function Reviews(props: PropType) {
    const { allHeros, OPTIONS } = props;
    return (
        <div className="py-12 lg:py-24 bg-gray-100 relative">
            <section className="max-w-[1900px]  mx-auto space-y-8">
                <div className="flex items-center justify-between max-w-screen-lg mx-auto px-4">
                    <h2 className="text-3xl font-bold">Opinie</h2>
                    <div>
                        <div className="flex items-center space-x-1">
                            <Star fill="orange" color="none" />
                            <Star fill="orange" color="none" />
                            <Star fill="orange" color="none" />
                            <Star fill="orange" color="none" />
                            <span className="font-bold text-lg">5/5</span>
                        </div>
                        <Link className="flex justify-end" target="_blank" aria-label="opinie google" href="https://www.google.com/search?sa=X&sca_esv=89411bb37f4aa9f8&rlz=1C1YTUH_plPL1002PL1002&tbm=lcl&sxsrf=ADLYWILs8XVNr0VGdMnT0XlRXWHbVrfQiQ:1715777738432&q=Jarek+Olszewski+-+Fotograf+Opinie&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIyNrEwMTcyMzcyMLE0tjA3MTTewMj4ilHRK7EoNVvBP6e4KrW8ODtTQVfBLb8kP70oMU3BvyAzLzN1ESthNQCuQqjCYQAAAA&rldimm=348472672049387413&hl=pl-PL&ved=2ahUKEwiU_fKU2o-GAxWVQvEDHactDIwQ9fQKegQIGBAF&biw=1920&bih=945&dpr=1#lkt=LocalPoiReviews">
                            Wiecej opini
                        </Link>
                    </div>
                </div>
                <AlignEmblaCarousel allHeros={allHeros} options={OPTIONS} />
            </section>
        </div>
    );
}
