import React from 'react';
import styled from 'styled-components';

const StyledCardImg = styled.img<{ hasBorder: boolean; borderColor: string }>`
  width: 100px;
  margin-right: 1em;

  &:last-child {
    margin-right: 0;
  }

  border: ${(props) => (props.hasBorder ? '4px solid' : 'none')};
  border-color: ${(props) => props.borderColor || 'inherit'};
`;

export interface RoomProps {
  suit: string;
  rank: string;
  hasPair?: boolean;
}

export default function Card({ suit, rank, hasPair = false }: RoomProps) {
  const getBorderColor = () => {
    const mapping: { [key: string]: string } = {
      '2': 'redb',
      '3': 'orange',
      '4': 'yellow',
      '5': 'blue',
      '6': 'navy',
      '7': 'violet',
      '8': 'blue',
      '9': 'chocolate',
      '10': 'darkgray',
      J: 'purple',
      Q: 'brown',
      K: 'gold',
      A: 'black',
    };

    return mapping[rank] || 'inherit';
  };

  return (
    <StyledCardImg
      src={`http://h3h.net/images/cards/${suit}_${rank}.svg`}
      hasBorder={hasPair}
      borderColor={getBorderColor()}
      alt={`${rank} of ${suit}`}
    />
  );
}
