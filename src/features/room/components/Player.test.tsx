import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import 'jest-styled-components';

import Player from './Player';

const props = {
  name: 'name',
  cards: [],
  isWinner: false,
};

const mount = (newProps = {}) => render(<Player {...props} {...newProps} />);

afterEach(() => {
  jest.resetAllMocks();
});

it('should show player name', () => {
  const { findByText } = mount();

  expect(findByText(props.name)).toBeTruthy();
});

it('should not have borders if player is not winner', () => {
  const { getByTestId } = mount({ isWinner: false });

  expect(getByTestId('player')).toHaveStyleRule('border', 'none');
});

it('should have borders if player is winner', () => {
  const { getByTestId } = mount({ isWinner: true });

  expect(getByTestId('player')).toHaveStyleRule('border', '4px solid');
});
