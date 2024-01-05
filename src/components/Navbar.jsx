import { links } from '../data/index';

const Navbar = () => {
  return (
    <nav className='bg-violet-100'>
      <div className='mx-auto max-w-7xl px-8 py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8'>
        <h2 className='text-2xl font-bold'>
          Burak<span className='text-violet-600'>Bilgili</span>
        </h2>
        <div className='flex gap-x-3'>
          {links.map(({ id, href, text }) => (
            <a
              href={href}
              key={id}
              className='capitalize tracking-wide font-semibold hover:text-violet-600 duration-300 pt-2 sm:pt-0'>
              {text}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
