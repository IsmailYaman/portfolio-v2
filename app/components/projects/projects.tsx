"use client";
import React, { useState } from "react";
import ProjectCard from "./projectCard";
import ProjectModal from "./projectModal";
import { projects } from "../../data/data";
import VisitGithub from "./visitGithub";

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<number | null>(null);

    const openModal = (projectId: number) => {
        setSelectedProject(projectId);
    };

    const closeModal = () => {
        const modalElement = document.querySelector(".modal");
        if (modalElement) {
            modalElement.classList.remove("modal-open");
        }
        setTimeout(() => {
            setSelectedProject(null);
        }, 300);
    };

    return (
        <div className="pb-36 px-4" id="projects">
            <div className="sm:container sm:mx-auto">
                <div className="relative inline-block">
                    <h2>
                        <span className="relative z-10 bg-gradient-to-br from-pink-700 via-purple-700 to-blue-400 text-transparent h-full bg-clip-text text-4xl leading-loose font-black">
                            Projects
                        </span>{" "}
                        I&#39;ve worked on
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {projects.map((project) => (
                        <div key={project.id}>
                            <div onClick={() => openModal(project.id)} className="cursor-pointer">
                                <ProjectCard project={project} />
                            </div>
                        </div>
                    ))}
                    <VisitGithub />
                </div>
            </div>

            {selectedProject !== null && <ProjectModal project={projects[selectedProject - 1]} onClose={closeModal} />}
        </div>
    );
};

export default Projects;
