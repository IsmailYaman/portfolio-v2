import React from "react";
import ExperiencesCard from "./experiencesCard"; // Import the projects card component
import { experiences } from "../../data/data"; // Import the projects data

const Experiences = () => {
    return (
        <div className="py-5 bg-base-100">
            <div className="sm:container mx-auto">
                <h1>Experiences</h1>
                <h2 className="mb-8">Programming</h2>
                <div className="flex flex-wrap items-center mx-2">
                    {experiences.programming.map((programming, index) => (
                        <div key={programming.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-2 mb-4">
                            <ExperiencesCard label={programming.label} image={programming.image} id={0} />
                        </div>
                    ))}
                </div>

                <h2>Ecommerce</h2>
                <div className="flex flex-wrap items-center mx-2">
                    {experiences.ecommerce.map((ecommerce, index) => (
                        <div key={ecommerce.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-2 mb-4">
                            <ExperiencesCard label={ecommerce.label} image={ecommerce.image} id={0} />
                        </div>
                    ))}
                </div>

                <h2>Design</h2>
                <div className="flex flex-wrap items-center mx-2">
                    {experiences.design.map((design, index) => (
                        <div key={design.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-2 mb-4">
                            <ExperiencesCard label={design.label} image={design.image} id={0} />
                        </div>
                    ))}
                </div>

                <h2>Game Development</h2>
                <div className="flex flex-wrap items-center mx-2">
                    {experiences.gameDevelopment.map((gameDevelopment, index) => (
                        <div key={gameDevelopment.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-2 mb-4">
                            <ExperiencesCard label={gameDevelopment.label} image={gameDevelopment.image} id={0} />
                        </div>
                    ))}
                </div>

                <h2>Other</h2>
                <div className="flex flex-wrap items-center mx-2">
                    {experiences.other.map((other, index) => (
                        <div key={other.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-2 mb-4">
                            <ExperiencesCard label={other.label} image={other.image} id={0} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experiences;
