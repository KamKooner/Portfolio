'use client'
import Image from 'next/image'
import { useState } from 'react';
import React, { useEffect } from 'react';


export default function title() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(true);
  }, []);

  return (
    <div className={`fade-in-top ${isActive ? 'active' : ''} title flex flex-col w-1/3 items-start`}>
      <div>
        <p className="t1">Kam Kooner</p>
        <p className="t2 ">Experienced Software Engineer</p>
        <p className="t3 mt-4">I build pixel-perfect, accessible products </p>
        <p className='t3'>for the web and beyond.</p>
      </div>




      <div className="mt-9 selectors">
        <div className="t3 flex" id="about">
          <hr className='mt-2'></hr><p className="mb-5 ml-2">ABOUT</p>
        </div>
      
        <div className="t3 flex" id="experience">
          <hr className='mt-2'></hr><p className="mb-5 ml-2">EXPERIENCE</p>
        </div>

        <div className="t3 flex" id="projects">
          <hr className='mt-2'></hr><p className="mb-5 ml-2">PROJECTS</p>
        </div>
      </div>



      <div className="social-icons mt-[350px]">
        <a href="https://github.com/KamKooner" target="_blank" className="social-icon"><i className="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/kam-kooner-941371174/" target="_blank" className="social-icon"><i className="fab fa-linkedin"></i></a>
        <a href="https://www.google.com" target="_blank" className="social-icon"><i className="fab fa-instagram"></i></a>
        <a href="https://www.google.com" target="_blank" className="social-icon ml-12 down"><i className="fa fa-download"></i><span className="ml-2 text-[16px]">Resume</span></a>
        
      </div>

      


      
    </div>
  )
}
