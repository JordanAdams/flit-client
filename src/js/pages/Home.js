import React from 'react';
import Scoreboard from '../components/Scoreboard';
import WordGraph from '../components/WordGraph';

export default ({words, positive, negative}) => (
  <div>
    <div className="section">
        <h1>Flit</h1>
        <p className="tagline">Tracking realtime sentiment on Twitter.</p>
    </div>

    <div className="section">
      <Scoreboard positive={positive} negative={negative}/>
    </div>

    <div className="section">
        <div className="row">
            <div className="six columns">
              <WordGraph type="positive" words={words.positive}/>
            </div>
            <div className="six columns">
              <WordGraph type="negative" words={words.negative}/>
            </div>
        </div>
    </div>

    <div className="section">
      <p className="small center aligned muted text">
        Created with <span className="red text">&hearts;</span> by Jordan Adams
      </p>
    </div>
  </div>
);
