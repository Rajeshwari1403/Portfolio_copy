import React from 'react';
import { ABOUT_ME } from '../utils/data';
import profile_pic from '../assets/Images/Image2.jpg';

const AboutMe = () => {
  return (
    <section id='about' className='bg-primary mt-[-20px] mx-auto max-w-7xl rounded-lg scroll-mt-20'>
      <div className='container mx-auto px-8 md:px-10 py-10'>
      <h4 className='block lg:hidden w-[200px] sec-title text-left mb-10 cursor-pointer'>About Me</h4>
      <div className='flex flex-col lg:flex-row gap-8 md:gap-20 items-start justify-between'>
        <div className='w-[200px] md:w-[260px] h-[240px] md:h-[300px] bg-blue-100/100 rounded-3xl mx-auto'>
          <img src={profile_pic} alt='Profile_Pic' className='profile-pic' />
        </div>
        <div className='flex-1'>
          <h2 className='hidden lg:block w-[200px] sec-title text-left cursor-pointer'>About Me</h2>
          <p className='text-sm font-semibold text-justify leading-6 whitespace-pre-line mt-0 text-white cursor-pointer'>
            {ABOUT_ME.content}
          </p>

          <div className='flex gap-4 mt-4'>
            {ABOUT_ME.socialLinks.map((item) => (
              <a 
                key={item.label}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer" 
                className='cursor-pointer group'
              >
                <item.icon className='text-2xl text-background transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 group-hover:translate-y-[2px] group-hover:text-accent' />
              </a>
            ))}
          </div>
        </div>
      </div>
      </div>
      <div className='w-full bg-background rounded-md h-[1px] relative mt-0'></div>
    </section>
  )
}

export default AboutMe