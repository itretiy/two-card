import Card, { Suit, Rank } from 'models/Card';
import { getPairsCount } from './gameService.utils';

describe('gameService.utils', () => {
  describe('getPairsCount', () => {
    const testCases = [
      [
        [
          new Card(Suit.Clubs, Rank.Ace),
          new Card(Suit.Clubs, Rank.Two),
          new Card(Suit.Clubs, Rank.Three),
          new Card(Suit.Clubs, Rank.Four),
          new Card(Suit.Clubs, Rank.Five),
          new Card(Suit.Clubs, Rank.Six),
          new Card(Suit.Clubs, Rank.Seven),
        ],
        0,
      ],
      [
        [
          new Card(Suit.Clubs, Rank.Ace),
          new Card(Suit.Diamonds, Rank.Ace),
          new Card(Suit.Clubs, Rank.Two),
          new Card(Suit.Clubs, Rank.Three),
          new Card(Suit.Clubs, Rank.Four),
          new Card(Suit.Clubs, Rank.Five),
          new Card(Suit.Clubs, Rank.Six),
        ],
        1,
      ],
      [
        [
          new Card(Suit.Clubs, Rank.Ace),
          new Card(Suit.Diamonds, Rank.Ace),
          new Card(Suit.Hearts, Rank.Ace),
          new Card(Suit.Clubs, Rank.Two),
          new Card(Suit.Clubs, Rank.Three),
          new Card(Suit.Clubs, Rank.Four),
          new Card(Suit.Clubs, Rank.Five),
        ],
        1,
      ],
      [
        [
          new Card(Suit.Clubs, Rank.Ace),
          new Card(Suit.Diamonds, Rank.Ace),
          new Card(Suit.Hearts, Rank.Ace),
          new Card(Suit.Spades, Rank.Ace),
          new Card(Suit.Clubs, Rank.Two),
          new Card(Suit.Clubs, Rank.Three),
          new Card(Suit.Clubs, Rank.Four),
        ],
        2,
      ],
    ];

    test.each(testCases)(
      'should return correct pairs count for the given cards: %o',
      (cards, expectedPairsCount) => {
        const pairsCount = getPairsCount(cards as Card[]);
        expect(pairsCount).toEqual(expectedPairsCount);
      },
    );

    it('should return true', () => {
      // console.log([new Card(Suit.Clubs, Rank.Ace)]);
      // const cards = [new Card(Suit.Clubs, Rank.Ace), new Card(Suit.Diamonds, Rank.Ace)];
      // const pairsCount = getPairsCount(cards);
      // expect(pairsCount).toEqual(1);
    });
  });
});
