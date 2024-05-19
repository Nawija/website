import { performRequest } from "@/lib/datocms";
import Gallery from "./_components/Gallery";
import { GripHorizontal } from "lucide-react";
import PageHeader from "@/components/PageHeader";
const PAGE_CONTENT_QUERY = `
{
  allGalers {
    img {
      responsiveImage {
        webpSrcSet
        width
        height
        base64
        src
      }
    }
  }
}`;

type GalleryType = {
    img: {
        url: string;
        height: number;
        width: number;
    };
};

export default async function page() {
    const {
        data: { allGalers },
    } = await performRequest({ query: PAGE_CONTENT_QUERY });

    const allImages = allGalers.flatMap((gallery: GalleryType) => gallery.img);

    return (
        <div className="anim-opacity">
            <PageHeader
                title="Fotograf Siedlce"
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nemo autem iure."
            />
            <Gallery allImages={allImages} />
        </div>
    );
}
