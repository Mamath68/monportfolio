import React from 'react'
import cinema from '../assets/portfolio/cinema.jpg'
import installNode from '../assets/portfolio/installNode.jpg'
import navbar from '../assets/portfolio/navbar.jpg'
import reactParallax from '../assets/portfolio/reactParallax.jpg'
import reactSmooth from '../assets/portfolio/reactSmooth.jpg'
import reactWeather from '../assets/portfolio/reactWeather.jpg'

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: cinema,
            href: 'https://github.com/Mamath68/Cinema_POO/tree/version-Framework',
        },
        {
            id: 2,
            src: reactParallax,
            href: 'https://www.linkedin.com/in/mathieu-stamm-680885224/',
        },
        {
            id: 3,
            src: navbar,
            href: 'https://www.linkedin.com/in/mathieu-stamm-680885224/',
        },
        {
            id: 4,
            src: reactSmooth,
            href: 'https://www.linkedin.com/in/mathieu-stamm-680885224/',
        },
        {
            id: 5,
            src: installNode,
            href: 'https://www.linkedin.com/in/mathieu-stamm-680885224/',
        },
        {
            id: 6,
            src: reactWeather,
            href: 'https://www.linkedin.com/in/mathieu-stamm-680885224/',
        },
    ]
    return (
        <div
            name="portfolio"
            className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className='pb-8'>
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