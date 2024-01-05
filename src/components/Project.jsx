import PropTypes from 'prop-types';

import { FaGithubSquare } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';

const Project = ({ img, url, github, title, text, tags }) => {
  return (
    <article className='bg-violet-100 rounded-lg shadow-md hover:shadow-xl duration-300'>
      <a href={url} target='_blank' rel='noreferrer'>
        <img src={img} alt={title} className='w-full h-64 object-cover object-top rounded-t-lg' />
      </a>
      <div className='p-8'>
        <h2 className='text-xl tracking-wide font-medium'>{title}</h2>
        <p className='mt-4 text-slate-800 text-sm'>{text}</p>
        <div className='mt-4 flex gap-x-4'>
          <a href={url} target='_blank' rel='noreferrer'>
            <TbWorldWww className='h-8 w-8 text-slate-800 hover:text-black duration-300' />
          </a>
          <a href={github} target='_blank' rel='noreferrer'>
            <FaGithubSquare className='h-8 w-8 text-slate-800 hover:text-black duration-300' />
          </a>
        </div>
        <div className='mt-4 flex gap-2 flex-wrap'>
          {tags.map((tag, idx) => (
            <span key={idx} className='bg-violet-500 text-slate-100 px-2 py-1 rounded-xl text-sm'>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

Project.propTypes = {
  img: PropTypes.string,
  url: PropTypes.string,
  github: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  tags: PropTypes.array,
};

export default Project;
