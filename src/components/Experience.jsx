import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import reactImage from '../assets/react.png'
import graphql from '../assets/graphql.png'
import nextJs from '../assets/nextjs.png'
import gitHub from '../assets/github.png'
import tailwind from '../assets/tailwind.png'

const Experience = () => {

    const experiences = [
        {
            id: 1,
            src: html,
            name: "HTML",
            style: "shadow-orange-500"
        },
        {
            id: 2,
            src: css,
            name: "CSS",
            style: "shadow-blue-500"
        },
        {
            id: 3,
            src: javascript,
            name: "JavaScript",
            style: "shadow-yellow-500"
        },
        {
            id: 4,
            src: reactImage,
            name: "React",
            style: "shadow-blue-600"
        },
        {
            id: 5,
            src: graphql,
            name: "GraphQl",
            style: "shadow-pink-400"
        },
        {
            id: 6,
            src: nextJs,
            name: "Next JS",
            style: "shadow-white"
        },
        {
            id: 7,
            src: gitHub,
            name: "GitHub",
            style: "shadow-gray-500"
        },
        {
            id: 8,
            src: tailwind,
            name: "TailWind",
            style: "shadow-sky-500"
        },
    ]

    return (
        <div name="experience" className="bg-gradient-to-b from-gray-800 to-black w-full h-screen">
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
                <div>
                    <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Experience</p>
                    <p className="py-6">These are the technologies I've Worked with</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                    {experiences.map(({ id, src, name, style }) => (
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                            <img
                                src={src}
                                alt={src}
                                className="w-20 mx-auto"
                            />

                            <p className="mt-4">{name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experience