export const hasPair = (card: Card, cards: Card[]) => {
  const pairs = getPairs(cards);

  return !!pairs
    .flat()
    .find((cardInPair) => cardInPair.rank === card.rank && cardInPair.suit === card.suit);
};

export const getPairsCount = (cards: Card[] = []) => getPairs(cards).length;

export const getPairs = (cards: Card[] = []): [Card, Card][] => {
  const pairs: [Card, Card][] = [];

  const sorted = [...cards].sort((card, nextCard) => card.rank.localeCompare(nextCard.rank));
  let current, next;
  while ((current = sorted.pop()) !== undefined && (next = sorted.pop()) !== undefined) {
    if (current.rank === next.rank) {
      pairs.push([current, next]);
    }
  }

  return pairs;
};
