import { useState } from 'react';

export const useQuote = () => {
  const [quote, setQuote] = useState('');
  const ron = require('../data/ron-swanson');
  const Text = require('markov-chains-text').default;

  const handleClick = (event) => {
    event.preventDefault();
    const generatedSentence = new Text(ron.text);
    let testQuote = generatedSentence.makeSentence();
    while(typeof testQuote === 'object'){
      testQuote = generatedSentence.makeSentence();
    }
    setQuote(testQuote);

  };

  return { quote, handleClick };
};

