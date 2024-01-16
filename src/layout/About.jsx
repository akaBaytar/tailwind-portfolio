import Title from '../components/Title';
import svg from '../assets/svg/about.svg';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className='bg-white py-20' id='about'>
      <div className='aligning grid md:grid-cols-2 items-center gap-16'>
        <motion.img
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', stiffness: 50, delay: 0.2 }}
          viewport={{ once: true }}
          src={svg}
          alt='About Illustration'
          className='w-full h-64'
        />
        <motion.article
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', stiffness: 50 }}
          viewport={{ once: true }}>
          <Title text={'New Horizons'} />
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 50, delay: 0.1 }}
            viewport={{ once: true }}
            className='text-slate-800 mt-8 leading-loose'>
            As a former student at Istanbul University-Cerrahpasa, I took a bold
            leap, leaving my studies in pursuit of happiness and productivity.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 50, delay: 0.2 }}
            viewport={{ once: true }}
            className='text-slate-800 mt-8 leading-loose'>
            In 2022, I ventured into web development, mastering HTML, CSS and
            Javascript. Along the way, I delved into version control, restful
            APIs, libraries and testing. Currently immersed in learning React.js
            and crafting innovative web front ends in Javascript.
          </motion.p>
        </motion.article>
      </div>
    </section>
  );
};

export default About;
