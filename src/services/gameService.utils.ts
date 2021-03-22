export const hasPair = (card: Card, cards: Card[]) => {
  const pairs = getPairs(cards);

  return !!pairs
    .flat()
    .find((cardInPair) => cardInPair.rank === card.rank && cardInPair.suit === card.suit);
};

export const getPairsCount = (cards: Card[] = []) => getPairs(cards).length;

/**
 * The idea here is to sort cards by rank so that all the same rank cards be close
 * and then take by 2 items from arrays head in a loop until it's not empty
 * if they are equal then save pair and proceed
 * if they are not equal put the 2-nd item back to the head and proceed
 *
 * Initial solution used building frequency map which was faster and took O(n)
 * but the current one is more readable especially taking into account that cards is a small array
 *
 * @param Cards[]
 * @returns array of pair tuples
 */
export const getPairs = (cards: Card[] = []): [Card, Card][] => {
  const pairs: [Card, Card][] = [];

  const sorted = [...cards].sort((card, nextCard) => card.rank.localeCompare(nextCard.rank));
  let current, next;
  while ((current = sorted.pop()) !== undefined && (next = sorted.pop()) !== undefined) {
    if (current.rank === next.rank) {
      pairs.push([current, next]);
    } else {
      sorted.push(next);
    }
  }

  return pairs;
};
