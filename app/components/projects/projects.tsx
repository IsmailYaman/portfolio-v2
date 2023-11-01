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
    <div className="py-5 bg-base-100">
        <div className="sm:container mx-auto">
            <h1>Projects</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-4">
                {projects.map((project) => (
                    <div key={project.id} className="p-4">
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
