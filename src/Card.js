import React from 'react';

import {getCardInfo} from './Deck';

import './Card.css';

const Card = ({cardIdx}) => {
  const {suitName, value} = getCardInfo(cardIdx);
  return (
    <div className={`card suit-${suitName}`}>
      <div className="value-top-left">{value}</div>
      <div className={`suit suit-${suitName}`}></div>
      <div className="value-bottom-right">{value}</div>
    </div>
  );
}

export default Card;
