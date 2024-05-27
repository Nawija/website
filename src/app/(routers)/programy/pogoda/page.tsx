import React from "react";

async function getData() {
    const url =
        "https://spotify23.p.rapidapi.com/search/?q=%3CREQUIRED%3E&type=multi&offset=0&limit=10&numberOfTopResults=5";
    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key":
                "cd3a4ebbe3msh1eab7291408e893p17df4fjsnb4109dd5e167",
            "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
        },
    };
    const res = await fetch(url, options);

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
}

export default async function page() {
    const data = await getData();
    console.log(data.albums.items);
    return (
        <div className="wrapper text-center">
            <p className="text-primary text-xl py-12">
                Albums: {data.albums.totalCount}
            </p>
            <div className="grid grid-cols-5">
                {data.albums.items.map((album, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-center flex-col"
                    >
                        <p>{album.data.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
