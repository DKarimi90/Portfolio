import { useEffect, useState } from 'react'
import ReactTyped from 'react-typed'
import { Link } from 'react-scroll'
import {BsGithub, BsFacebook, BsLinkedin, BsWhatsapp, BsTwitter} from 'react-icons/bs'
import {SlArrowUp} from 'react-icons/sl'

const Home = () => {
const [showButton, setShowButton] = useState()

  const handleDownloadCV = () => {
    const filePath = './files/David_Resume.pdf';
    const link = document.createElement('a');
    link.href = import.meta.env.BASE_URL + filePath;
    link.download = 'David_Resume.pdf';
    link.click();
  };

// Handling the scroll-to-top button
useEffect(() => {
const handleScrollButton = () => {
const scrollTop = window.pageYOffset; 
const threshold = 100;

setShowButton(scrollTop > threshold)
}
window.addEventListener('scroll', handleScrollButton); 
return () => window.removeEventListener('scroll', handleScrollButton)
},[])

  return (
    <div name='home' className='w-full pt-32'>
        <section className='w-full h-full max-w-[1000px] mx-auto flex flex-col justify-center px-6 relative '>
            <div>
                <div className='w-full flex justify-between items-center'>
                    <h2 className='text-lg md:text-3xl px-2 dark:text-[var(--primary1)]'>Hi, I AM</h2>
                    <Link to="contact" smooth={true} duration="700" activeClass='active-link' spy={true}><button className='btn text-sm sm:text-lg md:font-bold md:text-xl dark:text-[var(--secondary2)] dark:hover:text-[#fff]'><span >Shoot me an email</span></button></Link>
                </div>
                <h1 className='text-3xl sm:text-4xl md:text-8xl font-bold text-[var(--secondary2)]'>David Karimi</h1>
             </div>
             <div className='text-2xl md:text-4xl px-2 mt-4 text-[var(--primary2)]'>
                <ReactTyped 
                    strings={['A software Developer']}
                    typeSpeed={30}
                />
             </div>
             <div className='md:text-2xl px-2 mt-6 dark:text-[var(--primary1)]'>
                <ReactTyped 
                    strings={[
                        'Currently focused on',
                        'developing fully-responsive', 
                        'full-stack web applications.'
                    ]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                />
             </div>
             <div className='md:px-2 mt-6 flex justify-between md:block'>
                <button className='btn text-sm sm:text-xl'><Link to="about" smooth={true} duration="700">More...</Link></button>
                <button onClick={handleDownloadCV} className='btn ml-2 text-sm sm:text-xl'>Download Resume</button>
             </div>
             <div className='mt-8 dark:text-[var(--primary1)] hover:text-[var(--secondary2)] dark:hover:text-[var(--primary2)]'>
                    <a className='flex items-center' href="https://github.com/DKarimi90" target="_blank" rel="noreferrer" >Jump straight to my Github <span className='ml-6'> <BsGithub className=''/></span></a>             
             </div>
             <div className='flex justify-evenly mt-6 text-3xl dark:text-[var(--primary1)] max-w-[600px]'>
                <a href="https://www.linkedin.com/in/karimi-m-345a79259/" target="_blank" rel="noreferrer"><BsLinkedin className='icon dark:hover:text-white'/></a>
                <a href="/"><BsFacebook className='icon dark:hover:text-white'/></a>
                <a href="https://twitter.com/davyEsDee" target="_blank" rel="noreferrer"><BsTwitter className='icon dark:hover:text-white'/></a>
                <a href="/"><BsWhatsapp className='icon dark:hover:text-white'/></a>
             </div>
        </section>
            <Link to="home" smooth={true} duration="700"><button className={`fixed bottom-2 right-3 z-10 bg-[var(--primary2)] p-4 rounded-full animate-bounce ${showButton? 'block': 'hidden'}`}><SlArrowUp /></button></Link>
    </div>
  )
}

export default Home