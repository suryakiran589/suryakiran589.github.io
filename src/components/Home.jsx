import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import { techStack } from "../utils/constants";
import TechIcon from "./TechIcon";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="min-h-screen pt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Frontend Developer
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Specializing in React, TypeScript, and performance-optimized web applications
                </p>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">Hi, I'm Surya Kiran Kommoju</h2>
                <p className="text-gray-600 leading-relaxed">
                  I craft production-ready applications with React and TypeScript, focusing on 
                  efficient state management, API integration, and performance optimization. 
                  My work includes implementing JWT authentication, Redux Toolkit for complex state, 
                  and responsive interfaces with Tailwind CSS.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Experience with full-stack development using Node.js and MongoDB, AI API integration 
                  (DeepSeek, TMDB), and optimization techniques like memoization and debouncing for 
                  seamless user experiences. Currently seeking opportunities to contribute to 
                  early-stage startups building impactful products.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 pt-6">
                <Link 
                  to="/projects"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View Projects
                </Link>
                <Link 
                  to="/contact"
                  className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
            
            <div className="flex justify-center">
              <img
                src="https://res.cloudinary.com/djcbpkxwh/image/upload/v1749816405/profile_2_hubz22.jpg"
                alt="Surya Kiran"
                className="w-80 h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
          
          {/* Tech Stack */}
          <div className="mt-20">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Technologies I Work With</h3>
            <div className="grid grid-cols-4 sm:grid-cols-8 gap-6">
              {techStack.map((tech, index) => (
                <TechIcon key={tech.name} index={index} tech={tech} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;