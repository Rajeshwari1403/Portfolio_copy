import React, { useEffect, useState } from 'react';
import { MENU_LINKS } from '../utils/data';
import LOGO from '../assets/Images/Portfolio.png';

const NavBar = () => {
  // FIX: Changed from true to false so the menu is closed by default on page load
  const [isOpen, setisOpen] = useState(false);

  const toggleMenu = () => {
    setisOpen(!isOpen);
  };

  useEffect(() => {
    const handlereSize = () => {
      if(window.innerWidth >= 768) {
        setisOpen(true);  // Always keep menu visible on laptops
      } else {
        setisOpen(false); // Keep menu hidden on mobile unless clicked
      }
    };
    
    // Set initial state based on screen size
    handlereSize();

    // Listen to Resize Events
    window.addEventListener("resize", handlereSize);

    return () => {
      window.removeEventListener("resize", handlereSize);
    }
  }, [])

  return (
    <nav className='container mx-auto max-w-7xl sticky top-7 z-10'>
      <div className='flex items-center justify-between rounded-full bg-white/50 border border-primary m-5 p-3 backdrop-blur-[10px] md:p-0'>
        {/*LOGO*/}
        <img className='h-7 ml-6 -mb-1' src={LOGO} alt='Logo' />

        <button 
          className='block md:hidden text-[#333] mr-6 focus:outline-none'
          onClick={toggleMenu}
        >
          <svg 
            className='w-6 h-6' 
            fill='none' 
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            { isOpen ? (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M6 18L18 6M6 6l12 12'
              />
            ) : (
              <path 
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
         
        {/*Navigation Links - Completely untouched UI styles*/}
        <ul className={`${isOpen ? "flex" : "hidden"} menu-wrapper`}>
          {MENU_LINKS.map((item) => (
            <li key={item.id}>
              <span
                className="menu-item cursor-pointer"
                onClick={() => {
                  const element = document.getElementById(item.to);
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                  if (window.innerWidth < 768) setisOpen(false); // Auto-closes menu overlay after selecting an option
                }}
              >
                {item.label}
              </span>
            </li>
          ))}
        </ul>

        {/*Hire Me Button*/}
        <button
          onClick={() => {
            const element = document.getElementById('contact');
            if (element) element.scrollIntoView({ behavior: 'auto' });
          }}
          className='hidden md:block h-12 text-[15px] font-semibold text-primary bg-white rounded-full border-4 border-background
                    px-9 transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-primary hover:text-white hover:border-4 hover:border-white'
        >
          Hire Me
        </button>
      </div>
    </nav>
  )
}

export default NavBar;