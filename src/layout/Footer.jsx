import { FaSquareGithub, FaLinkedin, FaSquareXTwitter } from 'react-icons/fa6';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='mx-auto px-8 py-4 bg-violet-100 text-center flex flex-col items-center'>
      <div className='flex flex-col items-center lg:flex-row lg:items-end lg:w-full lg:justify-between'>
        <h2 className='text-2xl font-bold'>
          Burak<span className='text-violet-600'>Bilgili</span>
        </h2>
        <div className='flex gap-x-2 mt-2'>
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
      </div>
      <p className='text-xs text-slate-800 mt-2 lg:text-end lg:w-full'>
        Copyright {year} © All right reserved.
      </p>
    </footer>
  );
};

export default Footer;
