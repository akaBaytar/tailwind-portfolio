import svg from '../assets/svg/hero.svg';

import { FaSquareXTwitter, FaSquareGithub, FaLinkedin } from 'react-icons/fa6';

const Hero = () => {
  return (
    <section className='bg-violet-100 py-24'>
      <div className='mx-auto max-w-7xl px-8 grid md:grid-cols-2 items-center gap-8'>
        <article>
          <h1 className='text-5xl font-semibold tracking-wide'>Hi, I&apos;m Burak</h1>
          <p className='mt-4 text-3xl text-slate-800 tracking-wide'>Frontend Developer</p>
          <p className='mt-2 text-lg text-slate-800'>
            Elevating Web Experiences: HTMX, Tailwind, React – The Alchemy of Digital Artistry.
          </p>
          <div className='flex gap-x-4 mt-4'>
            <a href='https://github.com/akaBaytar' target='_blank' rel='noreferrer'>
              <FaSquareGithub className='h-8 w-8 text-slate-800 hover:text-[#333] duration-300' />
            </a>
            <a href='https://www.linkedin.com/in/akabaytar/' target='_blank' rel='noreferrer'>
              <FaLinkedin className='h-8 w-8 text-slate-800 hover:text-[#0077b5] duration-300' />
            </a>
            <a href='https://twitter.com/akaBaytar' target='_blank' rel='noreferrer'>
              <FaSquareXTwitter className='h-8 w-8 text-slate-800 hover:text-[#14171A] duration-300' />
            </a>
          </div>
        </article>
        <article className='hidden md:block'>
          <img src={svg} alt='Hero Illustration' className='h-80 lg:h-96' />
        </article>
      </div>
    </section>
  );
};

export default Hero;
