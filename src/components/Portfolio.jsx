import React from "react"
import cinema from "../assets/portfolio/cinema.jpg"
import simpson from "../assets/portfolio/simpson.jpg"
import appliphp from "../assets/portfolio/appli_php.jpeg"
import yugioh from "../assets/portfolio/Yugioh.jpg"
import landingPage from "../assets/portfolio/landingPage.jpeg"
import forum from "../assets/portfolio/forum.jpeg"

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: cinema,
            href: "https://github.com/Mamath68/Cinema_POO/tree/version-Framework",
        },
        {
            id: 2,
            src: yugioh,
            href: "https://github.com/Mamath68/ProjetElan2023",
        },
        {
            id: 3,
            src: appliphp,
            href: "https://github.com/Mamath68/Appli_PHP",
        },
        {
            id: 4,
            src: landingPage,
            href: "https://github.com/Mamath68/Landing-Page",
        },
        {
            id: 5,
            src: simpson,
            href: "https://github.com/Mamath68/Simpsons",
        },
        {
            id: 6,
            src: forum,
            href: "https://github.com/Mamath68/forum_pdo",
        },
    ]
    return (
        <div
            name="portfolio"
            className="bg-gradient-to-b from-black to-gray-800 w-full h-screen text-white md:min-h-screen"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-screen">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Portfolio
                    </p>
                    <p className="py-6">Check out some of my work right here</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {portfolios.map(({ id, src, href }) => (
                        <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                            <img
                                src={src}
                                alt={src}
                                className="rounded-md duration:200 hover:scale-105"
                            />
                            <div className="flex items-center justify-center">
                                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                                    Demo
                                </button>
                                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                                    <a href={href} target="_blank" rel="noopener noreferrer">Code</a>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Portfolio