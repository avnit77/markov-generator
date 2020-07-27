import React from 'react';
import PropTypes from 'prop-types';
import styles from './Quotes.css';

const Quote = ({ text }) => {
  return (
    <div className={styles.quote}>
      <p>{text}</p>
    </div>
  );
};

Quote.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Quote;
