import Title from '../components/Title';

import svg from '../assets/svg/about.svg';

const About = () => {
  return (
    <section className='bg-white py-20' id='about'>
      <div className='aligning grid md:grid-cols-2 items-center gap-16'>
        <img src={svg} alt='About Illustration' className='w-full h-64' />
        <article>
          <Title text={'New Horizons'} />
          <p className='text-slate-800 mt-8 leading-loose'>
            As a former student at Istanbul University-Cerrahpasa, I took a bold
            leap, leaving my studies in pursuit of happiness and productivity.
          </p>
          <p className='text-slate-800 mt-8 leading-loose'>
            In 2022, I ventured into web development, mastering HTML, CSS and
            Javascript. Along the way, I delved into version control, restful
            APIs, libraries and testing. Currently immersed in learning React.js
            and crafting innovative web front ends in Javascript.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
