import React, { useState } from 'react';
import './Story.css';
import sad_icon from '../Assets/sad-circle-svgrepo-com.svg';
import heart_icon from '../Assets/hearts-svgrepo-com.svg';
import action_icon from '../Assets/war-swords-cross-svgrepo-com(1).svg';
import horror_icon from '../Assets/horror-mask-illustration-1-svgrepo-com.svg';
import { SAD } from '../../data/Sad'; // Import the SAD array of quotes
import { ROMANCE } from '../../data/Romance'; // Import the ROMANCE array of quotes
import { ACTION } from '../../data/Action';
import { HORROR } from '../../data/Horror';

const RandomStory = () => {
  const [quote, setQuote] = useState({
    text:  "Click On One of the Genres",
   // author: "",
  });

  const getStory = (quoteArray) => {
    const selectedQuote = quoteArray[Math.floor(Math.random() * quoteArray.length)];
    setQuote(selectedQuote);
  }

  const randomSad = () => {
    getStory(SAD);
  }
  const randomRomance = () => {
    getStory(ROMANCE);
  }
   const randomAction = () => {
    getStory(ACTION);
  }
    const randomHorror = () => {
    getStory(HORROR);
  }

  return (
    <div className='container'>
      <div className="quote">{quote.text}</div>
      <div>
        <div className="line"></div>
        <div className="bottom">
          <div className="author">{quote.author}</div>
          <div className="icon">
          <img src={horror_icon} onClick={randomHorror} alt="" />
            <img src={sad_icon} onClick={randomSad} alt="" />
            <img src={heart_icon} onClick={randomRomance} alt="" />
            <img src={action_icon} onClick={randomAction} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default RandomStory;