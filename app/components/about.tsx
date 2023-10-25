import React from "react";
import { about } from "../data/data";
import Image from "next/image";

const About = () => {
    return (
        <div className="py-5 bg-base-100">
            <div className="sm:container mx-auto">
                <div className="grid grid-cols-2 grid-rows-4 gap-4">
                    <div className="row-span-4 relative">
                        <Image src={about.photo} alt="Ismail" className="rounded-2xl mx-auto" width={500} height={500} />
                        <div className="chat chat-start absolute w-80 right-0 top-5">
                            <div className="chat-bubble w-full"><strong className="bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 text-transparent bg-clip-text font-black text-3xl">
                                Hello! I'm Ismail.
                            </strong></div>
                        </div>
                        
                    </div>
                    <div>
                        <p className="text-justify">{about.body1}</p>
                    </div>
                    <div className="col-start-2 text-justify">
                        <p>{about.body2}</p>
                    </div>
                    <div className="col-start-2 row-start-3 text-justify">{about.body3}</div>
                    <div className="col-start-2 row-start-4 text-justify">{about.body4}</div>
                </div>
            </div>
        </div>
    );
};

export default About;
