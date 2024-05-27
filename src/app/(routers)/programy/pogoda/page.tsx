import React from "react";

export default async function page() {
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

    try {
        const response = await fetch(url, options);
        const res = await response.json();
        return res.json();
    } catch (error) {
        console.error(error);
    }
    return <div>{console.log(res)}</div>;
}
