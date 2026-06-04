import React from 'react';
import { ABOUT_ME } from '../utils/data';
import profile_pic from '../assets/Images/Image2.jpg';
import {
  FaReact,
  FaPython,
  FaGithub,
  FaNodeJs,
  FaBrain,
  FaDatabase,
} from "react-icons/fa";

import { SiMongodb, SiFlask } from "react-icons/si";

const AboutMe = () => {
  return (
    <section id='about' className='bg-primary md:mt-[-8px] mt-[-20px] mx-auto max-w-7xl rounded-lg scroll-mt-20 mb-[-14px]'>
      <div className='container mx-auto px-8 md:px-10 py-10'>
      <h4 className='block lg:hidden w-[200px] sec-title text-left mb-6 cursor-pointer'>About Me</h4>
      <div className='flex flex-col lg:flex-row gap-8 md:gap-20 items-start justify-between'>
        {/*<div className='w-[200px] md:w-[260px] h-[240px] md:h-[300px] bg-blue-100/100 rounded-3xl mx-auto'>
          <img src={profile_pic} alt='Profile_Pic' className='profile-pic' />
        </div>*/}
        <div className="relative w-[320px] h-[320px] mx-auto">

  <style>
    {`
      @keyframes orbit1 {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }

      @keyframes orbit2 {
        from { transform: rotate(360deg); }
        to { transform: rotate(0deg); }
      }

      .orbit {
        position: absolute;
        width: 100%;
        height: 100%;
      }

      .orbit-slow {
        animation: orbit1 20s linear infinite;
      }

      .orbit-reverse {
        animation: orbit2 25s linear infinite;
      }

      .tech-icon {
        position: absolute;
        width: 58px;
        height: 58px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background: rgba(255,255,255,0.05);
        backdrop-filter: blur(8px);
        transition: all 0.3s ease;
      }

      .tech-icon:hover {
        transform: scale(1.15);
        box-shadow: 0 0 20px rgba(34,211,238,.5);
      }
    `}
  </style>

  {/* Center Database */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
    <div className="w-20 h-20 rounded-full bg-cyan-500/10 border border-cyan-400 flex items-center justify-center shadow-[0_0_25px_rgba(34,211,238,0.6)]">
      <FaDatabase className="text-5xl text-cyan-400" />
    </div>
  </div>

  {/* Main Orbit */}
  <div className="orbit orbit-slow">

    <div
      className="tech-icon"
      style={{
        top: "0%",
        left: "50%",
        transform: "translateX(-50%)"
      }}
    >
      <FaBrain className="text-4xl text-cyan-400" />
    </div>

    <div
      className="tech-icon"
      style={{
        top: "20%",
        right: "5%"
      }}
    >
      <FaPython className="text-4xl text-yellow-400" />
    </div>

    <div
      className="tech-icon"
      style={{
        bottom: "20%",
        right: "5%"
      }}
    >
      <FaNodeJs className="text-4xl text-green-500" />
    </div>

    <div
      className="tech-icon"
      style={{
        bottom: "0%",
        left: "50%",
        transform: "translateX(-50%)"
      }}
    >
      <SiFlask className="text-4xl text-orange-400" />
    </div>

    <div
      className="tech-icon"
      style={{
        bottom: "20%",
        left: "5%"
      }}
    >
      <SiMongodb className="text-4xl text-green-600" />
    </div>

    <div
      className="tech-icon"
      style={{
        top: "20%",
        left: "5%"
      }}
    >
      <FaReact className="text-4xl text-sky-400" />
    </div>

  </div>

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