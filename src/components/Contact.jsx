import React from "react";
import Header from "./Header";
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="min-h-screen pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-4xl font-bold text-gray-900">Get In Touch</h1>
            <p className="text-xl text-gray-600">Let's work together</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Let's Connect</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  I'm currently looking for internship opportunities and would love to hear from you. 
                  Whether you have a project in mind, want to collaborate, or just want to chat about 
                  web development, feel free to reach out.
                </p>
              </div>
              
              <div className="space-y-4">
                <a 
                  href="mailto:suryakiran@example.com" 
                  className="flex items-center space-x-3 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <Mail size={20} />
                  <span>kommojusurya61@gmail.com</span>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/surya-kiran-kommoju-307a30258/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <Linkedin size={20} />
                  <span>LinkedIn Profile</span>
                </a>
                
                <a 
                  href="https://github.com/suryakiran589/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <Github size={20} />
                  <span>GitHub Profile</span>
                </a>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Send a Message</h3>
              <div className="space-y-4">
                <div>
                  <div className="block text-sm font-medium text-gray-700 mb-1">Name</div>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <div className="block text-sm font-medium text-gray-700 mb-1">Email</div>
                  <input 
                    type="email" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <div className="block text-sm font-medium text-gray-700 mb-1">Message</div>
                  <textarea 
                    rows="4" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  ></textarea>
                </div>
                
                <button 
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;