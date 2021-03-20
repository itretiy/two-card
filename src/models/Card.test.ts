import Card, { Suit, Rank } from './Card';

// TODO draft
describe('Card', () => {
  it('should have suit and rank field', () => {
    const card = new Card(Suit.Clubs, Rank.Ace);

    expect(card.suit).toBeDefined();
    expect(card.rank).toBeDefined();
  });
});
