import svg from '../assets/svg/hero.svg';
import { FaSquareXTwitter, FaSquareGithub, FaLinkedin } from 'react-icons/fa6';

const Hero = () => {
  return (
    <section className='bg-violet-100 py-32'>
      <div className='aligning grid lg:grid-cols-2 items-center justify-center lg:justify-start gap-8'>
        <article>
          <h1 className='text-4xl lg:text-5xl font-semibold tracking-wide '>
            Hey, I&apos;m Burak
          </h1>
          <p className='mt-4 text-2xl lg:text-3xl text-slate-800 tracking-wide'>
            Frontend Developer
          </p>
          <p className='mt-2 text-md lg:text-lg text-slate-800'>
            Elevating Web Experiences: HTMX, Tailwind, SASS, React, Next.js
          </p>
          <div className='flex gap-x-4 mt-4'>
            <a
              href='https://github.com/akaBaytar'
              target='_blank'
              rel='noreferrer'>
              <FaSquareGithub className='h-8 w-8 text-slate-800 hover:text-[#333] duration-300' />
            </a>
            <a
              href='https://www.linkedin.com/in/akabaytar/'
              target='_blank'
              rel='noreferrer'>
              <FaLinkedin className='h-8 w-8 text-slate-800 hover:text-[#0077b5] duration-300' />
            </a>
            <a
              href='https://twitter.com/akaBaytar'
              target='_blank'
              rel='noreferrer'>
              <FaSquareXTwitter className='h-8 w-8 text-slate-800 hover:text-[#14171A] duration-300' />
            </a>
          </div>
        </article>
        <article className='block'>
          <img src={svg} alt='Hero Illustration' className='h-50 lg:h-96' />
        </article>
      </div>
    </section>
  );
};

export default Hero;
