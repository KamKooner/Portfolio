// pages/index.js

import React, { useEffect } from 'react';
import Title from './components/title';
import About from './components/about';
export default function Home() {

  return (
    <body>
      <div className='flex mt-[100px] h-screen justify-start ml-[360px] '>
        <Title />
        <About />
      </div>
      
    </body>
  );
}
