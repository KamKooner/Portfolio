'use client'
import { useState } from 'react';
import React, { useEffect } from 'react';


export default function Title() {
  const [isActive, setIsActive] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isAbout, setIsAbout] = useState(true);
  const [isExperience, setIsExperience] = useState(false);
  const [isProject, setIsProject] = useState(false);


  useEffect(() => {
    setIsActive(true);

    const handleScroll = () => {
      const currentScrollY = document.documentElement.scrollTop;
      setScrollY(currentScrollY);

      // Classify the page section based on scroll y
      // At less than 524 highlight about
      if (currentScrollY < 400) {
        setIsAbout(true);
        setIsExperience(false);
        setIsProject(false);
      }
      // 525 and above, 1300 and below highlight Experience
      else if (currentScrollY >= 400 && currentScrollY <= 900) {
        setIsAbout(false);
        setIsExperience(true);
        setIsProject(false);
      }
      // 1301 and above, 2820 and below highlight projects
      else if (currentScrollY >= 901) {
        setIsAbout(false);
        setIsExperience(false);
        setIsProject(true);
      }
    };


    window.addEventListener('scroll', handleScroll);
  }, [scrollY]);


const handleClick = (event: React.MouseEvent<HTMLDivElement>) =>{
  var divId = event.currentTarget.id;
  switch (divId){
    case 'about':
      setIsAbout(true);
      setIsExperience(false);
      setIsProject(false);
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      
      break;
    case 'experience':
      setIsAbout(false);
      setIsExperience(true);
      setIsProject(false);
      window.scrollTo({
        top: 400, 
        behavior: 'smooth',
      });

      break;
    case 'projects':
      setIsAbout(false);
      setIsExperience(false);
      setIsProject(true);
      window.scrollTo({
        top: 1100, 
        behavior: 'smooth',
      });

      break;

  }

}





  return (
    <div className={`fade-in-top ${isActive ? 'active' : ''} title flex flex-col w-1/3 items-start`}>
      <div>
        <p className="t1">Kam Kooner</p>
        <p className="t2 ">Experienced Software Engineer</p>
        <p><span className='t3 mt-4'>Let me introduce myself </span></p>
      </div>




      <div className="mt-9 selectors">
        <div className="flex cursor-pointer" onClick={handleClick} id="about">
          {isAbout ? (
            <span className='flex'>
              <hr className='mt-2 w-[100px] transition-width ease-in-out duration-300'></hr>
              <p className="mb-5 ml-2 font-light opacity-100 text-turquoise">ABOUT</p>
            </span>
          ) : (
            <span className='flex'>
              <hr className='opacity-60 mt-2 w-[35px] transition-width ease-in-out duration-300'></hr>
              <p className="mb-5 ml-2 text-13 opacity-60 text-white">ABOUT</p>
            </span>
          )}
        </div>

        <div className="flex cursor-pointer" onClick={handleClick} id="experience">
          {isExperience ? (
            <span className='flex'>
              <hr className='mt-2 w-[100px] transition-width ease-in-out duration-300'></hr>
              <p className="mb-5 ml-2 font-light  opacity-100 text-turquoise">EXPERIENCE</p>
            </span>
          ) : (
            <span className='flex'>
              <hr className='opacity-60 mt-2 w-[35px] transition-width ease-in-out duration-300'></hr>
              <p className="mb-5 ml-2 text-13 opacity-60 text-white">EXPERIENCE</p>
            </span>
          )}
        </div>


        <div className="flex cursor-pointer" onClick={handleClick} id="projects">
          {isProject ? (
            <span className='flex'>
              <hr className='mt-2 w-[100px] transition-width ease-in-out duration-300'></hr>
              <p className="mb-5 ml-2 font-light opacity-100 text-turquoise">PROJECT</p>
            </span>
          ) : (
            <span className='flex'>
              <hr className='opacity-60 mt-2 w-[35px] transition-width ease-in-out duration-300'></hr>
              <p className="mb-5 ml-2 text-13 opacity-60 text-white">PROJECT</p>
            </span>
          )}
        </div>

        {/* <div className="t3 flex" id="projects">
          <hr className='mt-2'></hr><p className="mb-5 ml-2">PROBLEM SOLVING</p>
        </div> */}
      </div>





      <div className="social-icons mt-[350px]">
        <a href="https://github.com/KamKooner" target="_blank" className="social-icon"><i className="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/kam-kooner-941371174/" target="_blank" className="social-icon"><i className="fab fa-linkedin"></i></a>
        {/* <a href="https://www.google.com" target="_blank" className="social-icon"><i className="fab fa-instagram"></i></a> */}
        <a href="https://www.google.com" target="_blank" className="social-icon down"><i className="fa fa-download"></i><span className="ml-2 text-[16px]">
        <a href="resume.pdf" download="YourResume.pdf">Resume</a>
        </span></a>
      </div>





    </div>
  )
}
