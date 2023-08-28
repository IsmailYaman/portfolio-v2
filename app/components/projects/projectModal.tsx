import Image from "next/image";
import React from "react";
import { Project } from "../../types";

interface ModalProps {
    onClose: () => void;
}

const ProjectModal: React.FC<ModalProps & { project: Project }> = ({
    onClose,
    project,
}) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div
                className="absolute inset-0 bg-black opacity-50"
                // onClick={onClose}
            ></div>
            <div className="card lg:card-side glass max-w-7xl shadow-xl">
                <figure>
                    <Image
                        src={project.image}
                        quality={100}
                        width={500}
                        height={500}
                        alt={project.title}
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-white">{project.title}</h2>
                    {project.description.map((desc, index) => (
                        <p className="text-white text-justify" key={index}>
                            {desc.body1}
                            {desc.body2}
                        </p>
                    ))}
                        <p className="text-white font-bold ">I&apos;ve worked on this project using:</p>
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
                        <button className="btn btn-primary" onClick={onClose}>
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ProjectModal;
