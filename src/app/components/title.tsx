import Image from 'next/image'

export default function title() {
  return (
    <div className="title flex flex-col w-1/3 items-start">
      <div>
        <p className="t1">Kam Kooner</p>
        <p className="t2 ">Experienced Software Engineer</p>
        <p className="t3 mt-4">I build pixel-perfect, accessible products </p>
        <p className='t3'>for the web and beyond.</p>
      </div>




      <div className="mt-16 selectors">
        <div className="t3 flex" id="about">
          <hr className='mt-2'></hr><p className="mb-9 ml-2">ABOUT</p>
        </div>
      
        <div className="t3 flex" id="experience">
          <hr className='mt-2'></hr><p className="mb-9 ml-2">EXPERIENCE</p>
        </div>

        <div className="t3 flex" id="projects">
          <hr className='mt-2'></hr><p className="mb-9 ml-2">PROJECTS</p>
        </div>
      </div>


      <div className="social-icons mt-[350px]">
        <a href="https://github.com/KamKooner" target="_blank" className="social-icon"><i className="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/kam-kooner-941371174/" target="_blank" className="social-icon"><i className="fab fa-linkedin"></i></a>
        <a href="https://www.google.com" target="_blank" className="social-icon"><i className="fab fa-instagram"></i></a>
      </div>

      
    </div>
  )
}
