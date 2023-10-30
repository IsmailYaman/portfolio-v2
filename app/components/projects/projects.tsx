'use client'
import React, { useState } from "react";
import ProjectCard from "./projectCard";
import ProjectModal from "./projectModal"; // Import the ProjectModal component
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
        }, 300); // Assuming the fade-out animation duration is 300ms
    };

    return (
        <div className="py-5 bg-base-100">
            <div className="sm:container mx-auto">
                <h1 className="text-center">Projects</h1>
                <div className="flex flex-wrap mx-4">
                    {projects.map((project) => (
                        <div key={project.id} className="w-full sm:w-1/2 md:w-1/3 p-4">
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
