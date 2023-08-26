import React from 'react';
import ProjectCard from './projectCard';
import { projects } from '../../data/data'; // Import the projects data

const Projects = () => {
  return (
    <div className="py-5 text-base-100 bg-white">
      <div className="sm:container mx-auto">
        <h1 className="text-center">Projects</h1>
        <div className="flex flex-wrap -mx-4">
          {projects.map((project) => (
            <div key={project.id} className="w-full sm:w-1/2 md:w-1/3 p-4">
              <ProjectCard project={project} /> {/* Pass the project data as prop */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
