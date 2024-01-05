// pages/index.js

import React, { useEffect } from 'react';
import Title from './components/title';
import About from './components/about';

export default function Home() {

  return (
    <body>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>
      <div className='flex mt-[100px] h-screen justify-start ml-[360px] '>
        <Title />
        <div className="flex flex-col w-1/3 mr-8"></div>
        <About />
      </div>

    </body>
  );
}
