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
                <h2 className="text-2xl font-semibold text-gray-900">Technical Background</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    I'm Surya Kiran Kommoju, a frontend developer specializing in building 
                    production-ready web applications with React, TypeScript, and modern JavaScript. 
                    My expertise spans efficient state management with Redux Toolkit and Context API, 
                    RESTful API integration, and performance optimization techniques.
                  </p>
                  <p>
                    My technical approach emphasizes clean, maintainable code and scalable 
                    architecture. I've successfully implemented JWT authentication, integrated 
                    AI-powered APIs (DeepSeek Chat API, TMDB API), and optimized frontend 
                    performance using memoization, debouncing, and efficient rendering strategies.
                  </p>
                  <p>
                    With full-stack capabilities in Node.js and MongoDB, I bring a comprehensive 
                    understanding of the development lifecycle—from database design to responsive 
                    UI implementation. Currently focused on contributing to early-stage startups 
                    where I can ship impactful features and grow alongside innovative teams.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900">Technical Skills</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Frontend Development</h3>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'TypeScript', 'JavaScript (ES6+)', 'Redux Toolkit', 'Context API', 'Tailwind CSS', 'HTML5', 'CSS3'].map((skill) => (
                        <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Backend & Database</h3>
                    <div className="flex flex-wrap gap-2">
                      {['Node.js', 'MongoDB', 'RESTful APIs', 'JWT Auth', 'Firebase'].map((skill) => (
                        <span key={skill} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">AI & Integration</h3>
                    <div className="flex flex-wrap gap-2">
                      {['DeepSeek API', 'TMDB API', 'AI Integration', 'API Design'].map((skill) => (
                        <span key={skill} className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Tools & Optimization</h3>
                    <div className="flex flex-wrap gap-2">
                      {['Git', 'Vite', 'Webpack', 'Postman', 'Performance Optimization', 'Responsive Design'].map((skill) => (
                        <span key={skill} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Currently Exploring</h3>
                    <div className="flex flex-wrap gap-2">
                      {['Next.js', 'PostgreSQL', 'Docker', 'GraphQL'].map((skill) => (
                        <span key={skill} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Education</h3>
                    <div className="space-y-2 text-gray-700">
                      <p className="font-semibold">Bachelor of Technology in Computer Science (AI & ML)</p>
                      <p>Pragati Engineering College</p>
                      <p>2022 - 2026 | CGPA: 8.1/10</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Additional Section - What I'm Looking For */}
            <div className="mt-12 border-t pt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">What I'm Looking For</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-600">
                <div className="space-y-2">
                  <h3 className="font-medium text-gray-900">Ideal Opportunity</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Early-stage startup (seed to Series A)</li>
                    <li>Frontend or Full-Stack role with ownership</li>
                    <li>Modern tech stack (React, TypeScript, Next.js)</li>
                    <li>Remote-first or flexible work environment</li>
                    <li>AI/ML, SaaS, or developer tools space</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium text-gray-900">What I Bring</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Production-ready code from day one</li>
                    <li>Full-stack perspective on frontend work</li>
                    <li>AI API integration experience</li>
                    <li>Performance optimization mindset</li>
                    <li>Self-starter with strong initiative</li>
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