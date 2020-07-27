import React from 'react';
import PropTypes from 'prop-types';
import styles from './Quotes.css';

const Quote = ({ quote }) => {
  return (
    <div className={styles.quote}>
      <p>{quote}</p>
    </div>
  );
};

Quote.propTypes = {
  quote: PropTypes.string.isRequired,
};

export default Quote;
