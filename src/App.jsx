// src/RandomQuotes.js

import React, { useState, useEffect } from 'react';

const quotes = [
  "The best way to predict the future is to create it.",
  "Life is 10% what happens to us and 90% how we react to it.",
  "The only limit to our realization of tomorrow is our doubts of today.",
  "The purpose of our lives is to be happy.",
  "Life is what happens when you're busy making other plans.",
  "Get busy living or get busy dying.",
  "You have within you right now, everything you need to deal with whatever the world can throw at you.",
  "Believe you can and you're halfway there.",
  "The only impossible journey is the one you never begin.",
  "Act as if what you do makes a difference. It does.",
  "Success is not how high you have climbed, but how you make a positive difference to the world.",
  "Happiness is not something ready made. It comes from your own actions.",
  "Your time is limited, don't waste it living someone else's life.",
  "The only way to do great work is to love what you do.",
  "If you are not willing to risk the usual, you will have to settle for the ordinary.",
  "Don't watch the clock; do what it does. Keep going.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "You miss 100% of the shots you don't take.",
  "It does not matter how slowly you go as long as you do not stop.",
  "Everything you’ve ever wanted is on the other side of fear.",
  "Hardships often prepare ordinary people for an extraordinary destiny.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "Believe you can and you’re halfway there.",
  "Don't wait. The time will never be just right.",
  "Act as if what you do makes a difference. It does.",
  "To be the best, you must be able to handle the worst.",
  "Keep your face always toward the sunshine—and shadows will fall behind you.",
  "Opportunities don't happen, you create them.",
  "Success is walking from failure to failure with no loss of enthusiasm.",
  "Good things come to people who wait, but better things come to those who go out and get them.",
  "If you are willing to do more than you are paid to do, eventually you will be paid to do more than you do.",
  "What seems to us as bitter trials are often blessings in disguise.",
  "Don't be afraid to give up the good to go for the great.",
  "If you cannot do great things, do small things in a great way.",
  "I find that the harder I work, the more luck I seem to have.",
  "Success is not in what you have, but who you are.",
  "The road to success and the road to failure are almost exactly the same.",
  "The function of leadership is to produce more leaders, not more followers.",
  "Success is liking yourself, liking what you do, and liking how you do it.",
  "As we look ahead into the next century, leaders will be those who empower others.",
  "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
  "In the end, we will remember not the words of our enemies, but the silence of our friends.",
];

const RandomQuotes = () => {
  const [quote, setQuote] = useState('');

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  };

  useEffect(() => {
    setQuote(getRandomQuote());
  }, []);

  const handleNewQuote = () => {
    setQuote(getRandomQuote());
  };

  return (
    <div style={{ textAlign: 'center',alignContent:'center',marginLeft:'400px',border:'2px solid black',backgroundColor:'red' ,color:'white',padding: '10px 20px', borderRadius:'10px' }}>
      <h1>Random Quote Generator</h1>
      <h3 style={{margin: '20px 0' }}>{quote}</h3>
      <button onClick={handleNewQuote} style={{ padding: '10px 20px',backgroundColor:'blue', color:'white'}}>Generate</button>
    </div>
  );
};

export default RandomQuotes;
