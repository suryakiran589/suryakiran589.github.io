import React from "react";
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
      <img 
        src={project.image} 
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <span key={tech} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-3">
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 transition-colors text-sm"
          >
            <Github size={16} />
            <span>Code</span>
          </a>
          {
            project.live &&
            <a 
            href={project.live} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 transition-colors text-sm"
            >
            <ExternalLink size={16} />
            <span>Live Demo</span>
          </a>
          }
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;