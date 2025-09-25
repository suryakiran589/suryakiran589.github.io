import React from "react";
import Header from "./Header";
import { projectsData } from "../utils/constants";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="min-h-screen pt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-4xl font-bold text-gray-900">Projects</h1>
            <p className="text-xl text-gray-600">Things I've built</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;