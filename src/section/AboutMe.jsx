import React from 'react';
import { ABOUT_ME } from '../utils/data';
import profile_pic from '../assets/Images/Image2.jpg';

const AboutMe = () => {
  return (
    <section id='about' className='container px-8 py-16 mx-auto bg-background mt-14 scroll-mt-20'>
      <div className='max-w-7xl items-center mx-auto'>
      <h4 className='block lg:hidden w-[200px] sec-title text-left mb-16'>About Me</h4>
      <div className='flex flex-col lg:flex-row gap-16 items-start justify-between'>
        <div className='w-[250px] md:w-[320px] h-[300px] md:h-[400px] bg-blue-100/100 rounded-3xl mx-auto'>
          <img src={profile_pic} alt='Profile_Pic' className='profile-pic' />
        </div>
        <div className='flex-1'>
          <h2 className='hidden lg:block w-[200px] sec-title text-left'>About Me</h2>
          <p className='text-sm text-justify leading-6 whitespace-pre-line mt-4'>
            {ABOUT_ME.content}
          </p>

          <div className='flex gap-4 mt-6'>
            {ABOUT_ME.socialLinks.map((item) => (
              <a 
                key={item.label}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer" 
                className='cursor-pointer group'
              >
                <item.icon className='text-2xl text-secondary transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 group-hover:translate-y-[2px] group-hover:text-primary' />
              </a>
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}

export default AboutMe