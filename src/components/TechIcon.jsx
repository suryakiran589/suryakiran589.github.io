import React from "react";

const TechIcon = ({ tech, index }) => {
  return (
    <div className="flex flex-col items-center space-y-2 p-4 rounded-lg hover:bg-gray-50 transition-colors">
      <img src={tech.icon} alt="NO img" />
      <span className="text-sm text-gray-600 text-center">{tech.name}</span>
    </div>
  );
};

export default TechIcon;