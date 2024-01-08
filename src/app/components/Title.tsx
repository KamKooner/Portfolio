'use client'
import { useState } from 'react';
import React, { useEffect } from 'react';


export default function title() {
  const [isActive, setIsActive] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  var isAbout = true;
  var isExperience = false;
  var isProject = false;


  useEffect(() => {
    setIsActive(true);

    const handleScroll = () => {
      setScrollY(document.documentElement.scrollTop);
      
      //classify the page section based on scroll y
      //at less than 524 highlight about
      if (scrollY<524){
        isAbout == true;
        [isExperience, isProject] = [false, false]
        
      }
      //525 and above, 1300 and below highlight Experience
      else if(scrollY>=525 && scrollY <=1300){
        isExperience = true;
        [isAbout, isProject] = [false, false]
      }//1301 and above, 2820 and below highlight projects 
      else if(scrollY >= 1301){
        isProject = true;
        [isAbout, isExperience] = [false, false]
      }      
    };

    
    window.addEventListener('scroll', handleScroll);
  }, [scrollY]);

  return (
    <div className={`fade-in-top ${isActive ? 'active' : ''} title flex flex-col w-1/3 items-start`}>
      <div>
        <p className="t1">Kam Kooner</p>
        <p className="t2 ">Experienced Software Engineer</p>
        <p className="t3 mt-4">Modelled off Brittany Chiang's portfolio </p>
        <p><span className='t3'>Coded from the ground up - </span><span className='!opacity-100 text-white'>here</span> </p>
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

        <div className="t3 flex" id="projects">
          <hr className='mt-2'></hr><p className="mb-5 ml-2">PROBLEM SOLVING</p>
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
