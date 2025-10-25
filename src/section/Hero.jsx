import React, { useState } from 'react'
import icon_1 from '../assets/Images/icon.jpg'
import I2 from '../assets/Images/backend.png'
import I1 from '../assets/Images/javascript.png'
import I3 from '../assets/Images/Program.png'
import I4 from '../assets/Images/frontend.png'
import { STATS } from '../utils/data'
import StatInfoCard from '../components/StatInforCard'

const Hero = () => {

  return (
    <section id='hero' className='container mx-auto max-w-8xl px-8 scroll-mt-20'>
      <div className='flex flex-col lg:flex-row gap-14 items-center justify-between mt-[64px]'>
        <div className='order-2 lg:order-1 text-center lg:text-left mt-2 lg:mt-0'>
          <h3 className='text-xl lg:text-2xl font-semibold text-white'>👋 Hi, I'm Rajeshwari R</h3>
          <h1 className='w-full lg:w-[480px] text-3xl lg:text-5xl font-bold leading-[50px] lg:leading-[60px] mt-2 bg-background bg-clip-text text-transparent'>
            Full-Stack & Automation
          </h1>
          <p className='w-full lg:w-[500px] text-sm lg:text-base mt-2 text-white font-semibold'>
            Passionate about full-stack development, automation, and AI, constantly refining skills to build efficient solutions.
          </p>
          <div className='flex justify-center lg:justify-start gap-4 md:gap-8 mt-6'>
            <button
              onClick={() => {
                const element = document.getElementById('about');
                if (element) element.scrollIntoView({ behavior: 'auto' });
              }}
              className='flex-1 md:flex-none action-btn-outline btn-scale-anim'
            >
              View My work
            </button>
            {/* Instead of direct link, show popup */}
            <button
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/resume.pdf'; // works in Vite or any static host
                link.download = 'Rajeshwari_R_Resume.pdf';
                link.click();
              }}
              className="flex-1 md:flex-none action-btn btn-scale-anim"
            >
              Download Resume
            </button>


          </div>
        </div>
        
        {/* Profile Image Section */}
        <div className='w-[200px] md:w-[260px] h-[240px] md:h-[300px] bg-blue-100/100 rounded-3xl relative order-1 lg:order-2'>
          <img src={icon_1} alt='Profile_Pic' className='profile-pic' />
          <img src={I1} alt='Icon 1' className='icon-img -left-6 bottom-20 rotate-[1.75deg]' />
          <img src={I2} alt='Icon 2' className='icon-img left-5 md:left-10 -bottom-8 rotate-[2.75deg]'/>
          <img src={I3} alt='Icon 3' className='icon-img left-[110px] md:left-[170px] -bottom-8 rotate-[3.75deg]'/>
          <img src={I4} alt='Icon 4' className='icon-img left-[180px] md:left-[230px] bottom-8 md:bottom-10 rotate-[4.75deg]'/>
        </div>
      </div>

      <div className='flex gap-6 mt-4 md:mt-14 flex-wrap'>
        {STATS.map((item) => (
          <StatInfoCard key={item.id} count={item.count} label={item.label} />
        ))}
      </div>
      <div className='max-w-8xl bg-background rounded-md h-[1px] relative mt-8'></div>
    </section>
  )
}

export default Hero
