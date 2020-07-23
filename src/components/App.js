import React from 'react';

export default function App() {
  const ron = require('../data/ron-swanson');

  const Text = require('markov-chains-text').default;

  const generatedSentence = new Text(ron.text);

  console.log(generatedSentence.makeSentence());

  return <h1>Hello World</h1>;
}
