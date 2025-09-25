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
              <p className="text-xl text-gray-600">Get to know me better</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900">My Story</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    I'm a passionate frontend developer with a love for creating beautiful, 
                    functional web experiences. My journey into web development started with 
                    curiosity about how websites work, and has evolved into a deep appreciation 
                    for clean code and user-centered design.
                  </p>
                  <p>
                    I specialize in React and modern JavaScript, with a strong focus on 
                    responsive design and performance optimization. I believe that great 
                    software is not just functional, but also accessible and delightful to use.
                  </p>
                  <p>
                    When I'm not coding, you can find me exploring new technologies, 
                    contributing to open source projects, or learning about AI and its 
                    applications in web development.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900">Skills & Experience</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Frontend Development</h3>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS'].map((skill) => (
                        <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Backend & Tools</h3>
                    <div className="flex flex-wrap gap-2">
                      {['Node.js', 'MongoDB', 'Firebase', 'Git', 'VS Code'].map((skill) => (
                        <span key={skill} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Learning</h3>
                    <div className="flex flex-wrap gap-2">
                      {[ 'Next.js','Postgres',  'Docker'].map((skill) => (
                        <span key={skill} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Education</h3>
                    <div className="space-y-2 text-gray-700">
                      <p className="font-semibold">Bachelor of Technology (B.Tech) in Computer Science(AI & ML) </p>
                      <p>Pragati Engineering College, 2022 - 2026</p>
                      <p>GPA: 8.1/10</p>
                    </div>
                  </div>

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
