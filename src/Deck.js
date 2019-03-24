
// https://bit.ly/2SVEoEl
// Provided this boilerplate, deal a hand of n random playing cards to the DOM when the button is pressed, where n could be 1 to 52. Duplicate cards should not be possible, just like when dealing from a real deck.

export const SUITS = [
  "Spades",
  "Hearts",
  "Clubs",
  "Diamonds",
];

export const VALUES = [
  2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"
];

const FULL_DECK_SIZE = SUITS.length * VALUES.length;

export default class Deck {

  constructor() {
    this.init();
  }

  init = () => {
    const deck = new Array(FULL_DECK_SIZE);
    // Initial state: all cards available (none dealt)
    for (let i = deck.length - 1; i >= 0; --i) {
      deck[i] = i;
    }
    this.deck = deck;
    this.shuffle();
  }

  shuffle = () => {
    const deck = this.deck;
    for (let i = deck.length - 1; i >= 0; --i) {
      // Choose a target location, and swap.
      const j = Math.floor(Math.random() * FULL_DECK_SIZE);
      if (j !== i) {
        [deck[i], deck[j]] = [deck[j], deck[i]];
      }
    }
  }

  /**
   * Deal a new hand from the deck. (Assumption: Deck is already shuffled.)
   *
   * @returns {Number[]}
   */
  getHand = (handSize = 5) => {
    let cards = new Array(handSize);
    for (let numDealt = 0; numDealt < handSize; numDealt++) {
      if (this.deck.length === 0) {
        this.init();
      }
      cards.push(this.deck.pop());
    }
    return cards;
  }

}

export function getCardInfo(cardIdx) {
  return {
    suitName: SUITS[Math.floor(cardIdx / VALUES.length)],
    value: VALUES[cardIdx % VALUES.length]
  };
}
