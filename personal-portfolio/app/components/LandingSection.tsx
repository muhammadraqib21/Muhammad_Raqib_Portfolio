"use client"
import React from "react";
import Image from "next/image"
import { TypeAnimation } from 'react-type-animation';

const LandingSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-12 p-6">
                <div className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold"> 
                        <span className="text-[#635f5f] mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">Hello I'm ,</span>
                        
                        <br/>
                        <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Muhammad Raqib',
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            'Software Engineer',
                            1000,
                            'Web Developer',
                            1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        />
                    </h1>
                    
                    <p className="text-white text-lg lg:text-xl mb-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque adipisci animi eos, consequuntur quo reprehenderit qui architecto autem facilis explicabo maiores quia corrupti iusto quaerat ab velit praesentium. Alias, error.
                    </p>
                    <div>
                        <button className="px-6 py-3 rounded-full bg-white hover:bg-slate-200 text-black w-full sm:w-fit">
                            Download CV
                        </button>
                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w=[500px] lg:h-[300px] relative">
                        <Image
                            src={"/images/Mattermost_Picture.jpg"}
                            alt="Portfolio Picture"
                            width={300}
                            height={300}
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 p-6"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LandingSection