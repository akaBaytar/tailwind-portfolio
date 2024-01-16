import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const Card = ({ title, icon, text }) => {
  return (
    <motion.article
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ type: 'spring', stiffness: 50 }}
      viewport={{ once: true }}
      className='border-2 border-violet-500 bg-violet-100 rounded-xl p-4'>
      <span>{icon}</span>
      <h4 className='mt-6 font-bold'>{title}</h4>
      <p className='mt-2 text-slate-800'>{text}</p>
    </motion.article>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.object,
  text: PropTypes.string,
};

export default Card;
