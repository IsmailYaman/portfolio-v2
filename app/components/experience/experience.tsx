import React from "react";
import ExperiencesCard from "./experiencesCard"; // Import the projects card component
import { experiences } from "../../data/data"; // Import the projects data

const Experiences = () => {
    return (
        <div className="py-5 text-base-100 bg-white">
            <div className="sm:container mx-auto">
                <h1 className="text-center">Experiences</h1>
                <div className="flex flex-wrap mx-4">
                    <div>
                        <h2>Programming Languages</h2>
                        {experiences[0].programmingLanguages.map((language) => (
                            <ExperiencesCard
                                key={language.id}
                                label={language.label}
                                image={language.image}
                                id={0}
                            />
                        ))}

                        <h2>Frameworks and Libraries</h2>
                        {experiences[0].frameworksLibraries.map((framework) => (
                            <ExperiencesCard
                                key={framework.id}
                                label={framework.label}
                                image={framework.image}
                                id={0}
                            />
                        ))}

                        <h2>Ecommerce</h2>
                        {experiences[0].ecommerce.map((ecommerce) => (
                            <ExperiencesCard
                                key={ecommerce.id}
                                label={ecommerce.label}
                                image={ecommerce.image}
                                id={0}
                            />
                        ))}

                        <h2>Design</h2>
                        {experiences[0].design.map((design) => (
                            <ExperiencesCard
                                key={design.id}
                                label={design.label}
                                image={design.image}
                                id={0}
                            />
                        ))}

                        <h2>Game development</h2>
                        {experiences[0].gameDevelopment.map((gameDevelopment) => (
                            <ExperiencesCard
                                key={gameDevelopment.id}
                                label={gameDevelopment.label}
                                image={gameDevelopment.image}
                                id={0}
                            />
                        ))}

                        <h2>Other</h2>
                        {experiences[0].other.map((other) => (
                            <ExperiencesCard
                                key={other.id}
                                label={other.label}
                                image={other.image}
                                id={0}
                            />
                        ))}
                        {/* Repeat the above pattern for other categories */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experiences;
