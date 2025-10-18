import React from 'react';
import { EDUCATION } from '../utils/data';
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  return (
    <section id='education' className='bg-primary lg:mt-[-2px] mt-0 mx-auto max-w-7xl rounded-lg scroll-mt-20'>
      <div className='container mx-auto px-8 md:px-10 py-10'>
        {/* Section title */}
        <h4 className='block lg:hidden w-[200px] text-left sec-title'>Education</h4>
        <p className='block lg:hidden text-sm mt-2 leading-6 text-white font-semibold'>Pursuing an Integrated Master's in Computer Science at Anna University with a strong interest in software development, automation, and building efficient, reliable solutions.</p>
        {/* Layout */}
        <div className='flex flex-col lg:flex-row gap-16 items-start justify-between'>
          {/* Left Side Icon */}
          <div className='w-[250px] md:w-[320px] h-[300px] md:h-[400px] bg-blue-100 rounded-3xl mx-auto flex items-center justify-center mb-[-14px] mt-[34px]'>
            <FaGraduationCap className='profile-icon w-70 h-70 md:w-60 md:h-60 text-black' />
          </div>
          {/* Right Side Education Content */}
          <div className='flex-1 flex flex-col gap-6 mb-[-60px]'>
            <h2 className='hidden lg:block w-[200px] sec-title text-left mb-[-16px]'>Education</h2>
            <p className='hidden lg:block text-sm text-white font-semibold leading-6'>Pursuing an Integrated Master's in Computer Science at Anna University with a strong interest in software development, automation, and building efficient, reliable solutions.</p>
            {EDUCATION.map((edu) => (
              <div key={edu.id} className='bg-gradient-to-b from-[#144361] to-[#6298BC] rounded-[14px] p-5 relative'>
                <span className='absolute top-4 right-5 text-white text-sm font-semibold cursor-pointer hover:text-primary'>
                  {edu.year}
                  
                </span>
                <h4 className='text-xl md:text-xl font-bold text-primary cursor-pointer'>{edu.main}</h4>
                <h4 className='text-xl md:text-xl font-medium text-white mt-1 cursor-pointer'>{edu.title}</h4>
                <p className='text-sm md:text-[16px] font-normal text-white mt-1 cursor-pointer'>{edu.course}</p>
                <span className='text-sm font-normal text-white cursor-pointer'>{edu.percentage}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
       <div className='w-full bg-background rounded-md h-[1px] relative mt-14'></div>
    </section>
  );
}

export default Education;
