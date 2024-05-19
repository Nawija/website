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
    return <></>;
}
