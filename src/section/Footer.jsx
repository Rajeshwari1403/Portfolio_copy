import React from 'react'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import { IoMailOutline } from 'react-icons/io5'

const Footer = () => {
  return (
    <div className='bg-gradient-to-b from-[#85cbf7] to-[#6298BC] text-xs text-primary text-center p-8 mt-[-20px] mb-6'>
        <p className='font-semibold text-[12px]'>© 2025 Rajeshwari R. All rights reserved.</p>
        <p className='mt-2 font-semibold text-[12px]'>Full-Stack Developer | Quality Engineering | AI & Automation Enthusiast</p>
        <div className="flex justify-center gap-6 mt-3 text-2xl">
          <a href="https://www.linkedin.com/in/rajeshwari-r-cmc" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Rajeshwari1403" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="mailto:rajeshwari.cmc@gmail.com">
            <IoMailOutline />
          </a>
          <a href=" https://www.instagram.com/it_z_rathi05/">
            <FaInstagram />
          </a>
        </div>
    </div>
  )
}

export default Footer
