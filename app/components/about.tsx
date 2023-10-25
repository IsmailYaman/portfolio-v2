import React from "react";
import { about } from "../data/data";
import Image from "next/image";

const About = () => {
    return (
        <div className="py-5 bg-base-100">
            <div className="sm:container mx-auto">
                <div className="grid grid-cols-2 grid-rows-4 gap-4">
                    <div className="row-span-4">
                        <Image src={about.photo} alt="Ismail" className="rounded-full" width={500} height={500} />
                    </div>
                    <div><p>Hello! I'm Ismail. {about.body1}</p></div>
                    <div className="col-start-2"><p>{about.body2}</p></div>
                    <div className="col-start-2 row-start-3">{about.body3}</div>
                    <div className="col-start-2 row-start-4">{about.body4}</div>
                </div>
            </div>
        </div>
    );
};

export default About;
