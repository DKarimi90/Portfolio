import React from 'react'
import { NavLink } from 'react-router-dom'

const Projects = () => {
  return (
  <div name='projects' className='container md:mb-20 max-w-[1000px] mx-auto'>
      <div className='flex flex-col items-center'>
        <p className='title'>Projects</p>
        <p className='dark:text-[var(--secondary2)]'>Here is a sample of Projects I am working on/completed in recent past</p>
      </div>
    <div className='w-full grid sm:grid-cols-2 md:grid-cols-3 gap-4 px-2'>

        {/* first card*/}
      <div className='h-[40vh] w-full group perspective overflow-hidden py-2'>
        <div className='relative group-hover:my-rotate-y-180 w-full h-full preserve-3d duration-1000'>
          <div className='absolute w-full backface-hidden h-full rounded-3xl'>
           <img src='./images/web.jpg' alt='cover' className='w-full h-full object-cover rounded-3xl'/>
           <div className=' flex justify-center items-center absolute top-0 w-full h-full rounded-3xl'>
              <p className='text-3xl text-[var(--primary2)]'>Web Razors</p>
           </div>
          </div>
          <div className='absolute h-full w-full backface-hidden my-rotate-y-180 bg-white flex items-between justify-center px-3 pt-2 dark:border-[var(--secondary2)] border rounded-3xl dark:bg-black dark:text-[var(--secondary2)] text-sm sm:text-base overflow-hidden'>
            <p className=''>Web Razors' company profile web app seamlessly blends design and functionality, embodying professionalism, innovation, and a commitment to cutting-edge web solutions. It showcases the company's services, expertise, and achievements, providing a dynamic and engaging platform for clients and partners.</p>
            <div className='pt-4'>
              <button className='rounded left-[10%] -bottom-20 absolute delay-500 duration-500 group-hover:bottom-5 flex items-center'>
                <p className='mr-2 font-bold'>In Progress</p>
                <NavLink to='https://web-razors.vercel.app/' target='_blank' className='btn '>LIVE SITE</NavLink></button>
            </div>
          </div>
        </div>
      </div>


      {/* second card*/}
      <div className='h-[40vh] w-full group perspective overflow-hidden py-2'>
        <div className='relative group-hover:my-rotate-y-180 w-full h-full preserve-3d duration-1000'>
          <div className='absolute w-full backface-hidden h-full rounded-3xl'>
           <img src='./images/blog.jpg' alt='cover' className='w-full h-full object-cover rounded-3xl'/>
           <div className=' flex justify-center items-center absolute top-0 w-full h-full rounded-3xl'>
              <p className='text-3xl text-[var(--primary2)]'>Blog Box</p>
           </div>
          </div>
          <div className='absolute h-full w-full backface-hidden my-rotate-y-180 bg-white flex items-between justify-center px-3 pt-2 dark:border-[var(--secondary2)] border rounded-3xl dark:bg-black dark:text-[var(--secondary2)] text-sm sm:text-base overflow-hidden'>
            <p className=''>Step into the world of 'Blog Box,' a robust MERN stack application where users unleash their creativity by sharing compelling blogs. Powered by MongoDB, Express, React, and Node.js, this platform seamlessly integrates user-friendly features, encouraging a vibrant community to connect, explore, and share their thoughts through engaging and insightful blog posts.</p>
            <div className='pt-4'>
              <div className='rounded left-[10%] -bottom-20 absolute delay-500 duration-500 group-hover:bottom-5 flex items-center'>
                 <p className='mr-2 font-bold'>In Progress</p>
                <NavLink to='https://weblog-client.vercel.app/' target='_blank' className='btn'>LIVE SITE</NavLink></div>
            </div>
          </div>
        </div>
      </div>

      {/* third card*/}
      <div className='h-[40vh] w-full group perspective overflow-hidden py-2'>
        <div className='relative group-hover:my-rotate-y-180 w-full h-full preserve-3d duration-1000'>
          <div className='absolute w-full backface-hidden h-full rounded-3xl'>
           <img src='./images/travel.jpg' alt='cover' className='w-full h-full object-cover rounded-3xl'/>
           <div className=' flex justify-center items-center absolute top-0 w-full h-full rounded-3xl'>
              <p className='text-3xl text-[var(--primary2)]'>Travels</p>
           </div>
          </div>
          <div className='absolute h-full w-full backface-hidden my-rotate-y-180 bg-white flex items-between justify-center px-3 pt-2 dark:border-[var(--secondary2)] border rounded-3xl dark:bg-black dark:text-[var(--secondary2)] text-sm sm:text-base overflow-hidden'>
            <p className=''>Embark on a virtual journey with 'Travels,' a static travel website where my React and Tailwind CSS skills shine. This project, a testament to my passion for web development, offers a seamless fusion of beautiful design and responsive functionality, showcasing picturesque destinations and honing my expertise in front-end technologies.</p>
            <div className='pt-4'>
              <div className='rounded left-[10%] -bottom-20 absolute delay-500 duration-500 group-hover:bottom-5 flex items-center'>
                <p className='mr-2 font-bold'>In Progress</p>
                <NavLink to='https://travellers-five.vercel.app/' target='_blank' className='btn'>LIVE SITE</NavLink></div>
            </div>
          </div>
        </div>
      </div>


    </div>
  </div>
  )
}

export default Projects