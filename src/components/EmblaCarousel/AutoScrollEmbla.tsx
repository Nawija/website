"use client";

import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import Image from "next/image";
import { TestType } from "@/types/types";

type PropType = {
    allTests: [];
    options?: EmblaOptionsType;
};

const AutoScrollEmbla: React.FC<PropType> = (props) => {
    const { allTests, options } = props;
    const [emblaRef] = useEmblaCarousel(options, [
        AutoScroll({ playOnInit: true }),
    ]);

    return (
        <div className="embla bg-gray-100 py-12">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {allTests.map((item: TestType, index) => (
                        <div className="embla__slide" key={index}>
                            <div className="relative flex flex-col lg:flex-row space-y-4 lg:space-y-0">
                                <Image
                                    className="object-cover object-center mr-4 rounded-full w-16 h-16"
                                    src={item.img.responsiveImage.src}
                                    blurDataURL={
                                        item.img.responsiveImage.base64
                                    }
                                    loading="eager"
                                    width={33}
                                    height={33}
                                    placeholder="blur"
                                    alt="Your alt text"
                                />
                                <div className="max-w-screen-sm flex-col flex">
                                    <p className="text-2xl font-bold">
                                        {item.title}
                                    </p>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AutoScrollEmbla;
