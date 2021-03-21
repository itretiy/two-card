import { CardData } from './gameService';

export const hasPair = (card: CardData, cards: CardData[]) => {
  const pairs = getPairs(cards);

  return !!pairs
    .flat()
    .find((cardInPair) => cardInPair.rank === card.rank && cardInPair.suit === card.suit);
};

export const getPairsCount = (cards: CardData[] = []) => getPairs(cards).length;

export const getPairs = (cards: CardData[] = []): [CardData, CardData][] => {
  const pairs: [CardData, CardData][] = [];

  const sorted = [...cards].sort((card, nextCard) => card.rank.localeCompare(nextCard.rank));
  let current, next;
  while ((current = sorted.pop()) !== undefined && (next = sorted.pop()) !== undefined) {
    if (current.rank === next.rank) {
      pairs.push([current, next]);
    }
  }

  return pairs;
};
