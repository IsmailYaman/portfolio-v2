import React from "react";
import { about } from "../../data/data";
import Image from "next/image";
import AboutSkills from "./aboutSkills";

const About = () => {
    return (
        <div className="py-36 bg-base-100" id="about">
            <div className="sm:container sm:mx-auto mx-4 ">
                <div className="grid lg:grid-cols-2 lg:grid-rows-1 grid-rows-1 lg:gap-x-10">
                    <div className="relative hover:transform hover:scale-105 transition duration-100 ease-in-out group sm:row-span-2 my-auto">
                        <Image
                            src="/img/purple.png"
                            alt="Ismail"
                            className="rounded-2xl mx-auto shadow-2xl shadow-primary/50 group-hover:shadow-primary ease-out duration-100 lg:mb-0 mb-16"
                            width={500}
                            height={500}
                        />
                
                        <div className="chat chat-start absolute w-80 right-0 top-5 hidden xs:block ">
                            <div className="chat-bubble w-full">
                                <strong className="bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 text-transparent bg-clip-text font-black text-3xl">
                                    {about.title}
                                </strong>
                            </div>
                        </div>
                    </div>
                    <div className="my-auto">
                        <h2 className="font-medium">
                            I&#39;m a <AboutSkills /> {about.body1}
                        </h2>
                        <p className="text-justify mt-5">
                            {about.body2} <br /> <br /> {about.body3}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
