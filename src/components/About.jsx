import React from "react";
import Header from "./Header";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="min-h-screen pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold text-gray-900">About Me</h1>
              <p className="text-xl text-gray-600">Frontend Developer | React & TypeScript Specialist</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900">Background</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Specializing in React and TypeScript with focus on scalable architecture 
                    and state management. Experience spans authentication, API integration, 
                    and performance optimization.
                  </p>
                  <p>
                    Full-stack background in Node.js and MongoDB provides end-to-end 
                    development perspective.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Education</h3>
                  <div className="space-y-1 text-gray-600">
                    <p className="font-semibold">B.Tech in Computer Science (AI & ML)</p>
                    <p>Pragati Engineering College | 2022-2026</p>
                    <p>CGPA: 8.1/10</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900">Technical Skills</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Frontend</h3>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'TypeScript', 'JavaScript', 'Redux Toolkit', 'Tailwind CSS'].map((skill) => (
                        <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Backend & Database</h3>
                    <div className="flex flex-wrap gap-2">
                      {['Node.js', 'MongoDB', 'REST APIs', 'JWT Auth'].map((skill) => (
                        <span key={skill} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Tools & Practices</h3>
                    <div className="flex flex-wrap gap-2">
                      {['Git', 'Vite', 'Performance Optimization', 'Responsive Design'].map((skill) => (
                        <span key={skill} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Learning</h3>
                    <div className="flex flex-wrap gap-2">
                      {['Next.js', 'PostgreSQL', 'Docker'].map((skill) => (
                        <span key={skill} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 border-t pt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">What I'm Looking For</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-600">
                <div className="space-y-2">
                  <h3 className="font-medium text-gray-900">Ideal Role</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Early-stage startup (seed to Series A)</li>
                    <li>Frontend/Full-Stack with ownership</li>
                    <li>Modern stack (React, TypeScript, Next.js)</li>
                    <li>Remote-first or flexible</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium text-gray-900">What I Bring</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Production-ready code from day one</li>
                    <li>Full-stack perspective</li>
                    <li>Performance-first mindset</li>
                    <li>Self-starter with initiative</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;