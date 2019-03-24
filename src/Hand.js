import React from 'react';

import './Hand.css';

import Card from './Card';

const Hand = ({cards}) =>
  <div className="hand">
    {
      cards.map((cardIdx) =>
        <Card key={cardIdx} cardIdx={cardIdx}/>
      )
    }
  </div>;

export default Hand;
