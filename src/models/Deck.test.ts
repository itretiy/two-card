import Deck from './Deck';

describe('Deck', () => {
  it('should be standard 52-card Deck', () => {
    const deck = new Deck();

    expect(deck.cards.length).toBe(52);
    expect(new Set(deck.cards).size).toBe(52);
  });

  it('should be able to shuffle deck', () => {
    const deck = new Deck();
    const originalCards = deck.cards;

    deck.shuffle();

    expect(deck.cards).not.toEqual(originalCards);
    expect(deck.cards).toHaveLength(originalCards.length);
  });

  it('should draw 7 cards for each hand and remove those cards from deck', () => {
    const deck = new Deck();

    const handCards = deck.draw();

    expect(handCards).toHaveLength(7);
    expect(deck.cards).toHaveLength(52 - handCards.length);
    expect(deck.cards).not.toContain(handCards);
  });
});
