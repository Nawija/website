import dynamic from 'next/dynamic';
import React from 'react';
import PageHeader from "@/components/PageHeader";
import { APPS } from "@/constants/Apps";

function SkeletonAppCard() {
    return (
        <div
            className="relative p-2 border rounded bg-foreground text-center group overflow-hidden"
        >
            <div
                className="h-80 w-full bg-white/10 object-cover group-hover:scale-95 transition-transform duration-300"
            />
            <div className="absolute bottom-0 left-0 bg-[#1111116a] backdrop-blur-3xl w-full p-2">
                <div className="w-[30%] z-10 uppercase font-bold tracking-widest py-3 bg-white"
                />
                <p className="mb-3"/>
                <div className="mr-auto w-full">
                    <div className='bg-black/10 w-32 h-6' />
                </div>
            </div>
        </div>
    );
}

export default function Page() {
    return (
        <div className="anim-opacity">
            <PageHeader
                title="Programy"
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pb-12 wrapper">
                {APPS.map((app, index) => {
                    // Dynamically imported AppCard component for each app
                    const DynamicAppCard = dynamic(() => import('./_components/AppCards'), {
                        ssr: false,
                        loading: () => <SkeletonAppCard />,
                    });

                    return (
                        <DynamicAppCard
                            key={index}
                            href={app.href}
                            title={app.title}
                            desc={app.desc}
                            imgUrl={app.imgUrl}
                        />
                    );
                })}
            </div>
        </div>
    );
}
