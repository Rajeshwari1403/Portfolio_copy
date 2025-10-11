import React from 'react'
import { ABOUT_ME } from '../utils/data'
import ContactInfoCard from '../components/ContactInfoCard'
import { IoMail } from "react-icons/io5"
import { IoPhonePortraitOutline } from "react-icons/io5"
import { MdOutlineWeb } from "react-icons/md"
import { FaLinkedin, FaInstagram } from 'react-icons/fa'
import { SiGeeksforgeeks, SiGithub, SiLeetcode } from 'react-icons/si'

const ContactMe = () => {
  return (
    <section id='contact' className='mx-auto max-w-7xl scroll-mt-20'>
      <div className='container mx-auto p-10'>
        <div className='w-full lg:w-[60vw] mx-auto'>
          <h4 className='sec-title'>Contact Me</h4>
          <p className='text-sm text-center mt-4 leading-6'>
            Open to tech collaborations and new opportunities — let's connect!
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
          <ContactInfoCard
            icon={<IoMail />}
            label="Email"
            text={ABOUT_ME.email}
            link={`mailto:${ABOUT_ME.email}`}
            isCopyable={true}
          />

          <ContactInfoCard
            icon={<IoPhonePortraitOutline />}
            label="Phone"
            text={ABOUT_ME.phone}
            link="no-link"
            isCopyable={true}
          />

          <ContactInfoCard
            icon={<FaLinkedin />}
            label="LinkedIn"
            text={ABOUT_ME.linkedin}
            link={ABOUT_ME.linkedin}
          />

          <ContactInfoCard
            icon={<FaInstagram />}
            label="Instagram"
            text={ABOUT_ME.instagram}
            link={ABOUT_ME.instagram}
          />

          <ContactInfoCard
            icon={<SiGithub />}
            label="GitHub"
            text={ABOUT_ME.github}
            link={ABOUT_ME.github}
          />

          <ContactInfoCard
            icon={<SiLeetcode />}
            label="LeetCode"
            text={ABOUT_ME.leetcode}
            link={ABOUT_ME.leetcode}
          />

          <ContactInfoCard
            icon={<SiGeeksforgeeks />}
            label="GeeksforGeeks"
            text={ABOUT_ME.geeksforgeeks}
            link={ABOUT_ME.geeksforgeeks}
          />
        </div>

        {/*<div>
              <h5 className='md:hidden text-secondary text-lg font-medium mt-4 pb-5'>Contact Form</h5>
          <form className='flex flex-col'>
            <input 
                type='text'
                name='fullName'
                placeholder='Full Name'
                id=''
                className='input-box'
                autoComplete='off'
            />
            <input 
                type='text'
                name='email'
                placeholder='Email'
                id=''
                className='input-box'
                autoComplete='off'
            />
            <textarea 
             type='text'
             name='message'
             placeholder='Message'
             id=''
             rows={3}
             className='input-box'
             autoComplete='off'
            />
            <button className='action-btn btn-scale-anim'>SUBMIT</button>
          </form>
          </div>
          */}
          
        
      </div>
    </section>
  )
}

export default ContactMe