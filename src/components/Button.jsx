import { useState, useEffect, useRef } from 'react';
import { FaChevronUp } from 'react-icons/fa';

const Button = () => {
  const [isVisible, setIsVisible] = useState(false);

  const buttonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      let scrollHeight = window.scrollY;

      const bodyHeight = document.body.clientHeight;
      const rootHeight = document.documentElement.clientHeight;
      const height = bodyHeight - rootHeight;

      let percent = (scrollHeight / height) * 100;

      scrollHeight > 100 ? setIsVisible(true) : setIsVisible(false);

      buttonRef.current.style.background = `conic-gradient(#8b5cf6 ${percent}%, #c4b5fd ${percent}%)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo(0, 0);

  return (
    <button
      className={`scroll-button ${isVisible ? 'fixed' : 'hidden'}`}
      ref={buttonRef}
      onClick={scrollToTop}>
      <span className='progress-bar'>
        <FaChevronUp className='text-lg' />
      </span>
    </button>
  );
};

export default Button;
