import { CardData } from './gameService';

export const getRankFrequencyMap = (cards: CardData[] = []) => {
  const rankFrequencyMap = new Map<string, number>();
  cards.forEach((card) => {
    if (rankFrequencyMap.has(card.rank)) {
      rankFrequencyMap.set(card.rank, Number(rankFrequencyMap.get(card.rank)) + 1);
    } else {
      rankFrequencyMap.set(card.rank, 1);
    }
  });

  return rankFrequencyMap;
};

export const getPairsCount = (cards: CardData[] = []) => {
  // const rankFrequencyMap = cards.reduce((result, card) => {
  //   if (!result.has(card.rank)) {
  //     result.set(card.rank, 1);

  //     return result;
  //   }

  //   result.set(card.rank, Number(result.get(card.rank)) + 1);

  //   return result;
  // }, new Map<number, number>());

  // const rankFrequencyMap = new Map<number, number>();
  // cards.forEach((card) => {
  //   if (rankFrequencyMap.has(card.rank)) {
  //     rankFrequencyMap.set(card.rank, Number(rankFrequencyMap.get(card.rank)) + 1);
  //   } else {
  //     rankFrequencyMap.set(card.rank, 1);
  //   }
  // });
  const rankFrequencyMap = getRankFrequencyMap(cards);

  let pairsCount = 0;
  rankFrequencyMap.forEach((value) => {
    pairsCount += Math.floor(value / 2);
  });

  return pairsCount;
};

export const hasPair = (card: CardData, cards: CardData[] = []) => {
  const rankFrequencyMap = getRankFrequencyMap(cards);

  return rankFrequencyMap.has(card.rank) ? Number(rankFrequencyMap.get(card.rank)) > 1 : false;
};
