import Browser from "@/components/Browser";
import AutoScrollEmbla from "@/components/EmblaCarousel/AutoScrollEmbla";
import PageHeader from "@/components/PageHeader";
import { performRequest } from "@/lib/datocms";
import dynamic from "next/dynamic";

const Reviews = dynamic(() => import("@/app/_components/Reviews"), {
    ssr: false,
});

const PAGE_CONTENT_QUERY = `
{
  allGalers {
        img {
            responsiveImage {
                width
                height
                base64
                src
              }
        }
      }
  }`;

export default async function Home() {
    const {
        data: { allGalers },
    } = await performRequest({ query: PAGE_CONTENT_QUERY });
    return (
        <div className="anim-opacity">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10">
                <div className=" bg-gradient-to-l from-blue-500 to-pink-500 w-[80vw] h-[80vw] max-w-[900px] max-h-[300px] rounded-b-full blur-[122px] " />
            </div>
            <PageHeader
                title="Strona Seovileo"
                desc="programista do wynajecia"
            />
            <Browser />
        </div>
    );
}
