import React from 'react';
import { EDUCATION } from '../utils/data';
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  return (
    <section id='education' className='bg-primary lg:mt-[-24px] mt-[-26px] mx-auto max-w-8xl rounded-lg scroll-mt-20'>
      <div className='container mx-auto px-8 md:px-10 py-10'>
        {/* Section title */}
        <h4 className='block lg:hidden w-[200px] text-left sec-title'>Education</h4>
        <p className='block lg:hidden text-sm mt-0 leading-6 text-white font-semibold'>Pursuing an Integrated Master's in Computer Science at Anna University with a strong interest in software development, automation, and building efficient, reliable solutions.</p>
        {/* Layout */}
        <div className='flex flex-col lg:flex-row gap-16 items-start justify-between'>
          {/* Left Side Icon */}
          <div className='w-[200px] md:w-[260px] h-[240px] md:h-[300px] bg-blue-100 rounded-3xl mx-auto flex items-center justify-center mb-[-32px] md:mt-[104px] mt-6'>
            <FaGraduationCap className='profile-icon w-36 h-48 md:w-48 md:h-48 text-primary' />
          </div>
          {/* Right Side Education Content */}
          <div className='flex-1 flex flex-col gap-4 mb-[-60px]'>
            <h2 className='hidden lg:block w-[200px] sec-title text-left mb-[-14px]'>Education</h2>
            <p className='hidden lg:block text-sm text-white font-semibold leading-6 mb-[-4px]'>Pursuing an Integrated Master's in Computer Science at Anna University with a strong interest in software development, automation, and building efficient, reliable solutions.</p>
            {EDUCATION.map((edu) => (
              <div key={edu.id} className='bg-gradient-to-b from-[#85cbf7] to-[#6298BC] rounded-[14px] p-4 relative'>
                <span className='absolute top-4 right-5 text-white text-sm font-semibold cursor-pointer hover:text-primary'>
                  {edu.year}
                  
                </span>
                <h4 className='text-xl md:text-xl font-semibold text-primary cursor-pointer mb-[-6px]'>{edu.main}</h4>
                <h4 className='text-xl md:text-xl font-normal text-white mt-1 cursor-pointer'>{edu.title}</h4>
                <p className='text-sm md:text-[16px] font-normal text-white mt-1 cursor-pointer'>{edu.course}</p>
                <span className='text-sm font-normal text-white cursor-pointer hover:text-primary'>{edu.percentage}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
       <div className='w-[1480px] lg:ml-24 bg-background rounded-md h-[1px] relative mt-12'></div>
    </section>
  );
}

export default Education;
