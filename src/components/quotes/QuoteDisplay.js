import React, { useState } from 'react';
import Quote from './Quote';
import { useQuote } from '../../hooks/useQuote';
import styles from  './Quotes.css';

const QuoteDisplay = () => {
  const { quote, handleClick } = useQuote();

  return (
    <div className={styles.quotes}>
      <button onClick={handleClick}> SPEAK </button>
      <Quote quote={quote} />
    </div>
  );
};

export default QuoteDisplay;
