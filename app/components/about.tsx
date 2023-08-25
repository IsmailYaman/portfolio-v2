import React from "react";
import { about } from "../data/data";

const About = () => {
    return (
        <div className="py-5 text-base-100 bg-white ">
            <div className="sm:container mx-auto">
                <h1 className="text-center">About</h1>
                <div className="grid grid-flow-col grid-rows-3 gap-4">
                    <div className="row-span-4 w-64">
                        {/* <Image src="/img/ismail.jpg" width={500} height={500} alt="ismail" /> */}
                        <img
                            src={about.photo}
                            alt="ismail"
                            className="rounded-full"
                        />
                    </div>
                    <div>
                        <p>Hello! my name is Ismail Kayadelen. {about.body1}</p>
                    </div>
                    <div>
                        <p>{about.body2}</p>
                    </div>
                    <div>
                        <p>{about.body3}</p>
                    </div>
                    <div>
                        <p>{about.body4}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
