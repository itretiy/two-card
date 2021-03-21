import React from 'react';
import styled from 'styled-components';

const StyledCardImg = styled.img<{ hasPair: boolean; borderColor: string }>`
  width: 100px;
  margin-right: 1em;

  &:last-child {
    margin-right: 0;
  }

  border: ${(props) => (props.hasPair ? '4px solid' : 'none')};
  border-color: ${(props) => props.borderColor || 'inherit'};
`;

export interface RoomProps {
  suit: string;
  rank: string;
  hasPair?: boolean;
}

export default function Card({ suit, rank, hasPair = false }: RoomProps) {
  const card = `${suit}_${rank}`;

  const getBorderColor = () => {
    const mapping: { [key: string]: string } = {
      '2': 'salmon',
      '3': 'orange',
      '4': 'gold',
      '5': 'chocolate',
      '6': 'darkgray',
      '7': 'midnightblue',
      '8': 'sienna',
      '9': 'yellow',
      '10': 'violet',
      J: 'silver',
      Q: 'pink',
      K: 'red',
      A: 'black',
    };

    return mapping[rank] || 'inherit';
  };

  return (
    <StyledCardImg
      src={`http://h3h.net/images/cards/${card}.svg`}
      hasPair={hasPair}
      borderColor={getBorderColor()}
      alt={card}
    />
  );
}
