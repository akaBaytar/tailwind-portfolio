import { useState, useEffect } from 'react';
import { FaChevronUp } from 'react-icons/fa';

const Button = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => (window.scrollY > 400 ? setIsVisible(true) : setIsVisible(false));

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo(0, 0);

  return (
    <button
      className={`bg-violet-500 text-slate-100 p-2 bottom-24 right-4 rounded-full ${isVisible ? 'fixed' : 'hidden'}`}
      onClick={scrollToTop}>
      <FaChevronUp className='text-3xl' />
    </button>
  );
};

export default Button;
