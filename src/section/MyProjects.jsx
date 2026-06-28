import React, { useState } from 'react';
import { PROJECTS } from '../utils/data';
import ProjectCard from '../components/ProjectCard';

const MyProjects = () => {
  // Available Tabs corresponding to our data keys
  const [activeTab, setActiveTab] = useState("ai-apps");

  // Dynamically filter data based on selected category
  const filteredProjects = PROJECTS.filter(project => project.category === activeTab);

  return (
    <section id='projects' className='bg-primary mt-[-16px] mx-auto max-w-7xl rounded-lg scroll-mt-20'>
      <div className='container mx-auto px-6 md:px-10 py-10'>
        
        {/* Header Block */}
        <div className='w-full lg:w-[60vw] mx-auto text-center'>
          <h4 className='sec-title mt-[-8px] cursor-pointer'>
            Projects
          </h4>
          <p className='text-sm mt-2 leading-6 text-white font-semibold'>
            Developed clean AI pipelines, scalable software architectures, and automated data engines. 
            Select an engineering domain below to explore specific implementations.
          </p>
        </div>

        {/* Tab Switcher Buttons */}
        <div className='flex flex-wrap justify-center gap-3 my-8 max-w-2xl mx-auto'>
          <button
            onClick={() => setActiveTab("ai-apps")}
            className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
              activeTab === "ai-apps"
                ? "bg-white text-black shadow-md scale-105"
                : "bg-[#6298BC] text-blue-950 hover:bg-[#6298BC]/50 hover:text-white"
            }`}
          >
            🤖 AI Systems
          </button>
          <button
            onClick={() => setActiveTab("data-analytics")}
            className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
              activeTab === "data-analytics"
                ? "bg-white text-black shadow-md scale-105"
                : "bg-[#6298BC] text-blue-950 hover:bg-[#6298BC]/50 hover:text-white"
            }`}
          >
            📊 Data & Analytics
          </button>
          <button
            onClick={() => setActiveTab("fullstack-iot")}
            className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
              activeTab === "fullstack-iot"
                ? "bg-white text-black shadow-md scale-105"
                : "bg-[#6298BC] text-blue-950 hover:bg-[#6298BC]/50 hover:text-white"
            }`}
          >
            🌐 Full-Stack & IoT
          </button>
        </div>

        {/* Clean Static Responsive Grid Container (No Slides, No Arrows) */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4 pb-8'>
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className='transform transition-all duration-300 hover:-translate-y-1'
            >
              <ProjectCard
                imgUrl={project.image}
                title={project.title}
                tags={project.tags}
                link={project.link}
                deployed_link={project.deployed_link}
                description={project.description}
              />
            </div>
          ))}
        </div>

      </div>
      <div className='w-full bg-background rounded-md h-[1px] relative mt-[-10px]'></div>
    </section>
  );
};

export default MyProjects;