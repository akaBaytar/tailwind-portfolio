import PropTypes from 'prop-types';

const Title = ({ text }) => {
  return (
    <div className='border-b-4 border-violet-500 pb-4'>
      <h2 className='text-3xl font-medium tracking-wide'>{text}</h2>
    </div>
  );
};

Title.propTypes = {
  text: PropTypes.string,
};

export default Title;
