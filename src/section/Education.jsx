import React from 'react';
import { EDUCATION } from '../utils/data';
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  return (
    <section id='education' className='container mx-auto px-8 py-16 bg-white lg:mt-14 scroll-mt-20'>
      <div className='max-w-7xl mx-auto'>
        {/* Section title */}
        <h4 className='block lg:hidden w-[200px] sec-title text-left'>Education</h4>
        <p className='block lg:hidden text-sm mt-2 leading-6'>Pursuing an Integrated Master's in Computer Science at Anna University with a strong interest in software development, automation, and building efficient, reliable solutions.</p>
        {/* Layout */}
        <div className='flex flex-col lg:flex-row gap-16 items-start justify-between'>
          {/* Left Side Icon */}
          <div className='mb-8 w-[250px] md:w-[320px] h-[300px] md:h-[400px] bg-blue-100 rounded-3xl mx-auto flex items-center justify-center mt-[54px]'>
            <FaGraduationCap className='profile-icon  w-70 h-70 md:w-60 md:h-60 text-black' />
          </div>
          {/* Right Side Education Content */}
          <div className='flex-1 flex flex-col gap-6 mt-[-52px] mb-[-60px]'>
            <h2 className='hidden lg:block w-[200px] sec-title text-left mb-[-10px]'>Education</h2>
            <p className='hidden lg:block text-sm'>Pursuing an Integrated Master's in Computer Science at Anna University with a strong interest in software development, automation, and building efficient, reliable solutions.</p>
            {EDUCATION.map((edu) => (
              <div key={edu.id} className='bg-gradient-to-b from-[#144361] to-[#6298BC] rounded-[14px] p-5 relative'>
                <span className='absolute top-4 right-5 text-white text-sm font-semibold cursor-pointer'>
                  {edu.year}
                  
                </span>
                <h4 className='text-2xl md:text-3xl font-semibold text-white cursor-pointer'>{edu.main}</h4>
                <h4 className='text-lg md:text-xl font-medium text-white mt-1 cursor-pointer'>{edu.title}</h4>
                <p className='text-sm md:text-[16px] font-normal text-white mt-1 cursor-pointer'>{edu.course}</p>
                <span className='text-sm font-normal text-white cursor-pointer'>{edu.percentage}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
