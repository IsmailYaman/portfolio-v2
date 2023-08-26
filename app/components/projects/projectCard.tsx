import React from "react";
import Image from "next/image";

// Define the type/interface for the props
interface ProjectCardProps {
    project: {
        image: string;
        title: string;
        tools: { label: string }[];
        description: { body1: string }[];
        links: { url: string; label: string }[];
    };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <div className="card bg-gradient-to-tr from-[#100C28]  to-primary shadow-xl ease-out duration-100 hover:shadow-xl  hover:shadow-primary h-full flex flex-col justify-between">
            <div>
                <figure>
                    <Image
                        src={project.image}
                        alt={project.title}
                        width={500}
                        height={500}
                        className="rounded-t-2xl"
                    />
                </figure>
                <h2 className="card-title pt-4 px-4 text-white">{project.title}</h2>
            </div> 
            <div className="flex justify-between p-4 mt-4">
                <div className="card-actions justify-start">
                    {project.tools.map((tool) => (
                        <div key={tool.label} className="badge badge-primary text-white">
                            {tool.label}
                        </div>
                    ))}
                </div>
                <div className="card-actions justify-end">
                    {project.links.map((link, index) => (
                        <a
                            className="btn btn-primary text-white"
                            key={index}
                            href={link.url}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
