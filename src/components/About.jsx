import React from 'react'

const About = () => {
    return (
        <div
            name="about"
            className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-screen">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        About
                        </p>
                </div>

                <p className="text-xl mt-20 ">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est exercitationem perspiciatis ratione, cumque ad reiciendis aspernatur illum aperiam quibusdam rerum debitis maxime sint quidem ipsam accusantium doloremque saepe deserunt autem molestiae. Neque inventore commodi optio assumenda nemo cum, officia ducimus facilis, veritatis debitis tempore tenetur, ab nam recusandae ipsam harum.
                </p>

                <br />

                <p className="text-xl">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente debitis a voluptatibus dolor corrupti nisi labore? Necessitatibus omnis, a, porro nihil in repellendus praesentium velit consequuntur, deserunt expedita iusto sunt harum culpa fugiat rem sed aliquam? Maxime facilis rem animi dolore hic ipsam cum enim soluta, ratione sint! Quas, quidem!
                </p>
            </div>

        </div>
    )
}

export default About