'use client'
import Experience from './experience';
import { useState } from 'react';
import React, { useEffect } from 'react';
import Projects from './projects';
import ProblemSolving from '../problemSolving';

export default function about() {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
      setIsActive(true);
    }, []);
  return (
    <div className={`fade-in-bot ${isActive ? 'active' : ''} ml-8 about flex flex-col w-2/5 items-end`}>


        <p className="w-full mb-4 text-white"><span className='t3'>Eleven years ago, I decided to enroll in a highschool computer programming course. Since then, I've interned as a front end developer
        for a financial data aggregation startup - </span> <span className='!opacity-100'>Willbear.io</span><span className='t3'>, worked as an associate software developer at one of the world's largest tech companies</span> <span className='!opacity-100'>Infosys</span><span className='t3'>, and worked on many personal projects.</span> </p>

        
        <p className="w-full mb-4"><span className='t3'>My main focus these days is deploying full stack applications, and expanding my skillset.
        In my free time I've also begun working on my own startup </span><span className='!opacity-100 text-white'>Dukaan.com</span>.</p>

        <p className="w-full mb-20"><span className='t3'>When I’m not at the computer, I’m usually developing hobby software, working out, or coding up mods for my favourite </span><span className='!opacity-100 text-white'>games</span>.</p>

        <Experience />
        <Projects />
        <ProblemSolving />

    </div>
        
    
  )
}
