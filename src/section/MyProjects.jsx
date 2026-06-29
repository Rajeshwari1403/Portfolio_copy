import React, { useState, useRef } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { PROJECTS } from '../utils/data';
import ProjectCard from '../components/ProjectCard';

const MyProjects = () => {
  const [activeTab, setActiveTab] = useState("ai-apps");
  const scrollContainerRef = useRef(null);

  const filteredProjects = PROJECTS.filter(project => project.category === activeTab);

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      
      // Smoothly scrolls by roughly one card width
      const scrollAmount = direction === 'left' 
        ? scrollLeft - 340 
        : scrollLeft + 340;

      scrollContainerRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id='projects' className='bg-primary mt-[-16px] mx-auto max-w-7xl rounded-lg scroll-mt-20'>
      <div className='container mx-auto px-4 md:px-10 py-10'>
        
        {/* Header Block */}
        <div className='w-full lg:w-[60vw] mx-auto text-center'>
          <h4 className='sec-title mt-[-10px] text-white text-2xl font-bold'>Projects</h4>
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
                : "bg-[#1f2937]/50 text-gray-300 hover:bg-[#1f2937]"
            }`}
          >
            🤖 AI Systems
          </button>
          <button
            onClick={() => setActiveTab("data-analytics")}
            className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
              activeTab === "data-analytics"
                ? "bg-white text-black shadow-md scale-105"
                : "bg-[#1f2937]/50 text-gray-300 hover:bg-[#1f2937]"
            }`}
          >
            📊 Data & Analytics
          </button>
          <button
            onClick={() => setActiveTab("fullstack-iot")}
            className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
              activeTab === "fullstack-iot"
                ? "bg-white text-black shadow-md scale-105"
                : "bg-[#1f2937]/50 text-gray-300 hover:bg-[#1f2937]"
            }`}
          >
            🌐 Full-Stack & IoT
          </button>
        </div>

        {/* Permanent Side Scroll Window Wrapper - Added max-w-5xl to keep it compact on desktop */}
        <div className='relative w-full max-w-7xl mx-auto px-8 group'>
          
          {/* Left Arrow Button */}
          <button 
            onClick={() => handleScroll('left')}
            className='absolute left-[-5px] top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 bg-white border border-gray-100 rounded-full shadow-lg text-black hover:bg-gray-50 hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer'
            aria-label="Scroll left"
          >
            <IoIosArrowBack size={20} />
          </button>

          {/* Horizontal Slide Track */}
          <div 
            ref={scrollContainerRef}
            className='flex overflow-x-auto gap-6 pb-2 pt-4 snap-x snap-mandatory scroll-smooth scrollbar-none justify-start lg:justify-center md:px-2'
          >
            {filteredProjects.map((project) => (
              /* 🌟 FIX: Reduced dimensions. 
                Mobile remains friendly at 80vw width. 
                Desktop (md) scales down dramatically to a tight, crisp max-width layout of ~320px.
              */
              <div 
                key={project.id} 
                className='w-[80vw] sm:w-[45vw] md:w-[320px] flex-shrink-0 snap-center'
              >
                <ProjectCard
                  imgUrl={project.image}
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  link={project.link}
                  deployed_link={project.deployed_link}
                />
              </div>
            ))}
          </div>

          {/* Right Arrow Button */}
          <button 
            onClick={() => handleScroll('right')}
            className='absolute right-[-5px] top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 bg-white border border-gray-100 rounded-full shadow-lg text-black hover:bg-gray-50 hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer'
            aria-label="Scroll right"
          >
            <IoIosArrowForward size={20} />
          </button>

        </div>

      </div>
      <div className='w-full bg-background rounded-md h-[1px] relative mt-[-10px]'></div>
    </section>
  );
};

export default MyProjects;