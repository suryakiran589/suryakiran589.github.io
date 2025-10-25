import React from "react";
import Header from "./Header";
import { Github, Linkedin, Mail, MapPin, Calendar } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="min-h-screen pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-4xl font-bold text-gray-900">Contact Me</h1>
            <p className="text-xl text-gray-600">Let's discuss your next project</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Open to Opportunities</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  I'm Surya Kiran Kommoju, actively seeking frontend or full-stack roles at 
                  early-stage startups. If you're building something impactful with React, 
                  TypeScript, or AI-integrated applications, I'd love to connect.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Available for remote positions with flexible hours. Ready to contribute 
                  production-ready code and ship features that matter.
                </p>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Reach Out</h3>
                
                <a 
                  href="mailto:kommojusurya61@gmail.com" 
                  className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors group"
                >
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <Mail size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Email</div>
                    <div className="text-sm">kommojusurya61@gmail.com</div>
                  </div>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/surya-kiran-kommoju-307a30258/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors group"
                >
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <Linkedin size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">LinkedIn</div>
                    <div className="text-sm">Connect with me</div>
                  </div>
                </a>
                
                <a 
                  href="https://github.com/suryakiran589/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors group"
                >
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                    <Github size={20} className="text-gray-700" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">GitHub</div>
                    <div className="text-sm">View my code</div>
                  </div>
                </a>
              </div>
            </div>
            
            {/* Right Column - Info Cards */}
            <div className="space-y-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Info</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin size={20} className="text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-gray-900">Location</div>
                      <div className="text-sm text-gray-600">Secunderabad, India (IST/GMT+5:30)</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Calendar size={20} className="text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-gray-900">Availability</div>
                      <div className="text-sm text-gray-600">Immediate start • Flexible hours</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">What I'm Looking For</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Frontend/Full-Stack roles at startups</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Remote-first or flexible work environment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Modern tech stack (React, TypeScript, Next.js)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>AI/ML, SaaS, or developer tools space</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>High-ownership, fast-paced teams</span>
                  </li>
                </ul>
              </div>

              
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 border border-blue-100">
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Ready to Work Together?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Whether you're hiring for a role, have a project idea, or just want to discuss 
              frontend development and AI integration, I'm always open to meaningful conversations.
            </p>
            <a 
              href="mailto:kommojusurya61@gmail.com?subject=Opportunity at [Your Company]&body=Hi Surya,%0D%0A%0D%0AI came across your portfolio and would love to discuss..." 
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Send an Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;