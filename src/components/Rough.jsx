// src/components/SkillsTab.jsx
import React from "react";
import { SKILLS } from "../utils/data";

const SkillsTab = () => {
  return (
    <div className="bg-[#0B1A2D] text-white py-12 px-6 md:px-16">
      <h2 className="text-3xl font-bold text-center mb-10">Technical Skills</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILLS.map((skill) => {
          const Icon = skill.icon;
          return (
            <div
              key={skill.title}
              className="p-5 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <Icon className={`${skill.color} text-3xl`} />
                <h3 className="text-lg font-semibold">{skill.title}</h3>
              </div>
              <p className="text-gray-300 text-sm">
                {skill.items.join(" | ")}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsTab;
