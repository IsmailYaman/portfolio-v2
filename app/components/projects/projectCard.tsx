"use client";
import React, { useState } from "react";
import Image from "next/image";
import ProjectModal from "./projectModal";

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
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        console.log("open modal");
        
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="card bg-gradient-to-tr from-[#100C28] to-primary shadow-2xl ease-out duration-100 hover:shadow-2xl hover:shadow-primary h-full flex flex-col justify-between">
            <div>
                <figure className="relative group">
                    <Image
                        src={project.image}
                        alt={project.title}
                        quality={100}
                        width={500}
                        height={500}
                        className="rounded-t-2xl"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 rounded-t-2xl bg-black bg-opacity-50 group-hover:opacity-100 transition-opacity">
                        <div className="text-white cursor-pointer" onClick={openModal}>
                            Click to read more
                        </div>
                        {isModalOpen && <ProjectModal project={project} onClose={closeModal} />}
                    </div>
                </figure>
                <h2 className="card-title pt-6 px-6 text-white">
                    {project.title}
                </h2>
            </div>
            <div className="flex justify-between p-6">
                <div className="card-actions justify-start">
                    {project.tools.map((tool) => (
                        <div
                            key={tool.label}
                            className="badge badge-primary text-white"
                        >
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
