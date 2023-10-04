import React from 'react'

const Contact = () => {

    // const contacts = [
    //     {
    //         id: 1,
    //         src: html,
    //         name: "HTML",
    //         style: "shadow-orange-500"
    //     },
    //     {
    //         id: 2,
    //         src: css,
    //         name: "CSS",
    //         style: "shadow-blue-500"
    //     },
    //     {
    //         id: 3,
    //         src: javascript,
    //         name: "JavaScript",
    //         style: "shadow-yellow-500"
    //     },
    //     {
    //         id: 4,
    //         src: reactImage,
    //         name: "React",
    //         style: "shadow-blue-600"
    //     },
    //     {
    //         id: 5,
    //         src: graphql,
    //         name: "GraphQl",
    //         style: "shadow-pink-400"
    //     },
    //     {
    //         id: 6,
    //         src: nextJs,
    //         name: "Next JS",
    //         style: "shadow-white"
    //     },
    //     {
    //         id: 7,
    //         src: gitHub,
    //         name: "GitHub",
    //         style: "shadow-gray-500"
    //     },
    //     {
    //         id: 8,
    //         src: tailwind,
    //         name: "TailWind",
    //         style: "shadow-sky-500"
    //     },
    // ]

    return (
        <div 
        name="contact" 
        className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white">
            <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-screen ">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
                    <p className="py-6">Subtmit the form below to get in touch with me</p>

                    <div className="flex justify-center items-center">
                        <form action="https://getform.io/f/a8940881-04f5-47e6-93bf-bfde0fc31015" method="post" className="flex flex-col w-full md:w-1/2  ">
                            <input 
                            type="text" 
                            name="name" 
                            placeholder='Enter Your name' 
                            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none " 
                            />
                            <input 
                            type="email" 
                            name="email" 
                            placeholder='Enter Your email' 
                            className=" my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none " 
                            />
                            <textarea 
                            name="message" 
                            rows="10"
                            placeholder='Enter Your Message' 
                            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none">
                            </textarea>

                            <button type="submit" className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">Let's Talk</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact