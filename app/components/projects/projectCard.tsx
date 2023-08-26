import React from "react";
import Image from "next/image";

const ProjectCard = ({ project }) => {
    return (
        <div className="card bg-light shadow-xl p-4 h-full flex flex-col justify-between">
            <div>
                <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={500}
                />
                <h2 className="card-title mt-2">{project.title}</h2>
                {project.description.map((desc, index) => (
                    <p key={index} className="mt-2">
                        {desc.body1}
                    </p>
                ))}
            </div>
            <div className="flex justify-between mt-4">
                <div className="card-actions">
                    <button className="btn btn-primary">
                        {project.links.map((link, index) => (
                            <a key={index} href={link.url} className="mr-2">
                                {link.label}
                            </a>
                        ))}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
