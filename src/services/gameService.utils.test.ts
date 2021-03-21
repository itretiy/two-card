import Card, { Suit, Rank } from 'models/Card';
import { hasPair, getPairsCount, getPairs } from './gameService.utils';

describe('gameService.utils', () => {
  describe('.hasPair', () => {
    it(`should return false for Ace if hand doesn't have any Ace`, () => {
      const ace = new Card(Suit.Clubs, Rank.Ace);
      const hand = [
        new Card(Suit.Clubs, Rank.Two),
        new Card(Suit.Clubs, Rank.Three),
        new Card(Suit.Clubs, Rank.Four),
        new Card(Suit.Clubs, Rank.Five),
        new Card(Suit.Clubs, Rank.Six),
        new Card(Suit.Clubs, Rank.Seven),
        new Card(Suit.Clubs, Rank.Eight),
      ];

      expect(hasPair(ace, hand)).toBeFalsy();
    });

    it(`should return true for Ace if hand has two Aces`, () => {
      const ace = new Card(Suit.Clubs, Rank.Ace);
      const hand = [
        new Card(Suit.Clubs, Rank.Ace),
        new Card(Suit.Hearts, Rank.Ace),
        new Card(Suit.Clubs, Rank.Two),
        new Card(Suit.Clubs, Rank.Three),
        new Card(Suit.Clubs, Rank.Four),
        new Card(Suit.Clubs, Rank.Five),
        new Card(Suit.Clubs, Rank.Six),
      ];

      expect(hasPair(ace, hand)).toBeTruthy();
    });
  });

  describe('.getPairsCount', () => {
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
  });

  describe('.getPairs', () => {
    it(`should return emppty array if hand doesn't have any pair`, () => {
      const hand = [
        new Card(Suit.Clubs, Rank.Two),
        new Card(Suit.Clubs, Rank.Three),
        new Card(Suit.Clubs, Rank.Four),
        new Card(Suit.Clubs, Rank.Five),
        new Card(Suit.Clubs, Rank.Six),
        new Card(Suit.Clubs, Rank.Seven),
        new Card(Suit.Clubs, Rank.Eight),
      ];

      const pairs = getPairs(hand);

      expect(pairs).toHaveLength(0);
    });

    it(`should return 1 pair if hand has 2 Aces`, () => {
      const hand = [
        new Card(Suit.Clubs, Rank.Ace),
        new Card(Suit.Diamonds, Rank.Two),
        new Card(Suit.Hearts, Rank.Three),
        new Card(Suit.Clubs, Rank.Six),
        new Card(Suit.Diamonds, Rank.King),
        new Card(Suit.Hearts, Rank.Queen),
        new Card(Suit.Hearts, Rank.Ace),
      ];

      const pairs = getPairs(hand);

      expect(pairs).toMatchInlineSnapshot(`
        Array [
          Array [
            Card {
              "rank": "A",
              "suit": "heart",
            },
            Card {
              "rank": "A",
              "suit": "club",
            },
          ],
        ]
      `);
    });

    it(`should return 2 pairs if hand has 3 Twos and 2 Aces`, () => {
      const hand = [
        new Card(Suit.Diamonds, Rank.Two),
        new Card(Suit.Clubs, Rank.Three),
        new Card(Suit.Clubs, Rank.Ace),
        new Card(Suit.Spades, Rank.Ace),
        new Card(Suit.Clubs, Rank.Six),
        new Card(Suit.Hearts, Rank.Two),
        new Card(Suit.Clubs, Rank.Two),
      ];

      const pairs = getPairs(hand);

      expect(pairs).toMatchInlineSnapshot(`
        Array [
          Array [
            Card {
              "rank": "A",
              "suit": "spade",
            },
            Card {
              "rank": "A",
              "suit": "club",
            },
          ],
          Array [
            Card {
              "rank": "2",
              "suit": "club",
            },
            Card {
              "rank": "2",
              "suit": "heart",
            },
          ],
        ]
      `);
    });
  });
});
