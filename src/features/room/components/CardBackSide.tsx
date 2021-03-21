import React from 'react';
import styled from 'styled-components';

const StyledCardBackSide = styled.div`
  display: inline-block;
  width: 100px;
  height: 125px;
  margin-right: 1em;
  box-sizing: border-box;

  &:last-child {
    margin-right: 0;
  }

  border: 1px solid black;
  border-radius: 5px;
`;

export default function CardBackSide() {
  return <StyledCardBackSide />;
}
