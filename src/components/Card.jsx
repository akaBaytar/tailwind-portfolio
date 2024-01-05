import PropTypes from 'prop-types';

const Card = ({ title, icon, text }) => {
  return (
    <article className='border-2 border-violet-500 bg-violet-100 rounded-xl p-4'>
      <span>{icon}</span>
      <h4 className='mt-6 font-bold'>{title}</h4>
      <p className='mt-2 text-slate-800'>{text}</p>
    </article>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.object,
  text: PropTypes.string,
};

export default Card;
