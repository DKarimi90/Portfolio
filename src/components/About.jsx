import React from 'react';
import { Link } from 'react-scroll';

const About = () => {

  return (
    <div name='about' className='w-full px-4 container max-w-[1000px] mx-auto'>
      <section className='w-full h-full  flex flex-col justify-center'>
        <div className='title'>
          <h2 className=''>About Me</h2>
        </div>
        <div className='grid md:grid-cols-2 shadow-xl rounded-xl p-4'>
          <div className='flex flex-col'>
            <section>
              <h1 className='text-2xl sm:text-3xl md:text-5xl text-[var(--primary2)] my-5'>
                I'M BASED IN NAIROBI, KENYA
              </h1>
            </section>
          </div>
          <div className='flex flex-col'>
            <section>
              <p className='text-sm md:text-md md:text-lg text-[var(--secondary2)]'>
                With a passion for coding and a natural talent for problem-solving, I'm out there to
                create a positive change in the software development industry.{' '}
                <span className='span'>David</span> is a quick learner and enjoys staying current
                with the latest trends and best practices. He is excited and looking forward to
                collaborating with others to innovate projects and solutions. I'm willing to take up
                new projects on a <span className='span'>full-time</span> or{' '}
                <span className='span'>freelance basis.</span>
              </p>
            </section>
          </div>
        </div>
        <div className='mt-6 flex justify-center'>
          <button className=''>
            <Link to='skills' smooth={true} duration='700' className='text-sm sm:text-xl btn'>
              More...
            </Link>
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
