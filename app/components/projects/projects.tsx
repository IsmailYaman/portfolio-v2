'use client'
import React, { useState } from "react";
import ProjectCard from "./projectCard";
import ProjectModal from "./projectModal"; 
import { projects } from "../../data/data";

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<number | null>(null);

    const openModal = (projectId: number) => {
        setSelectedProject(projectId);
    };

    const closeModal = () => {
        const modalElement = document.querySelector('.modal');
        if (modalElement) {
            modalElement.classList.remove('modal-open');
        }
        setTimeout(() => {
            setSelectedProject(null);
        }, 300); 
    };

    return (
    <div className="pb-36 bg-base-100">
        <div className="sm:container sm:mx-auto mx-4 ">
            <h1 className="mb-4">Projects</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <div key={project.id}>
                        <div onClick={() => openModal(project.id)} className="cursor-pointer">
                            <ProjectCard project={project} />
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {selectedProject !== null && (
            <ProjectModal project={projects[selectedProject - 1]} onClose={closeModal} />
        )}
    </div>
);

};

export default Projects;
