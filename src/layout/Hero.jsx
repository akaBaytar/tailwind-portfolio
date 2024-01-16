import svg from '../assets/svg/hero.svg';
import { FaSquareXTwitter, FaSquareGithub, FaLinkedin } from 'react-icons/fa6';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className='bg-violet-100 py-32'>
      <div className='aligning grid lg:grid-cols-2 items-center justify-center lg:justify-start gap-8'>
        <article>
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 100 }}
            viewport={{ once: true }}
            className='text-4xl lg:text-5xl font-semibold tracking-wide '>
            Hey, I&apos;m Burak
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 50, delay: 0.1 }}
            viewport={{ once: true }}
            className='mt-4 text-2xl lg:text-3xl text-slate-800 tracking-wide'>
            Frontend Developer
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 50, delay: 0.2 }}
            viewport={{ once: true }}
            className='mt-2 text-md lg:text-lg text-slate-800'>
            Elevating Web Experiences: HTMX, Tailwind, SASS, React, Next.js
          </motion.p>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 50, delay: 0.5 }}
            viewport={{ once: true }}
            className='flex gap-x-4 mt-4'>
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
          </motion.div>
        </article>
        <article className='block'>
          <motion.img
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 50, delay: 0.5 }}
            viewport={{ once: true }}
            src={svg}
            alt='Hero Illustration'
            className='h-50 lg:h-96'
          />
        </article>
      </div>
    </section>
  );
};

export default Hero;
