'use client'
import Experience from './experience';
import Image from 'next/image'
import { useState } from 'react';
import React, { useEffect } from 'react';

export default function about() {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
      setIsActive(true);
    }, []);
  return (
    <div className={`fade-in-bot ${isActive ? 'active' : ''} ml-8 about flex flex-col w-2/5 items-end`}>
        <p className="w-full mb-4 t3">Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web development.
        Fast-forward to today, and I’ve had the privilege of building software for an advertising agency, a start-up, a student-led design studio, and a huge corporation.</p>

        <p className="w-full mb-4 t3">My main focus these days is building products and leading projects for our clients at Upstatement.
        In my free time I've also released an online video course that covers everything you need to know to build a web app with the Spotify API.</p>

        <p className="w-full mb-20 t3">When I’m not at the computer, I’m usually rock climbing, hanging out with my wife and two cats, or running around Hyrule searching for Korok seeds</p>

        <Experience />
    </div>
        
    
  )
}
