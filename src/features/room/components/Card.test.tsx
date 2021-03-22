import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import 'jest-styled-components';

import Card from './Card';

const props = {
  suit: 'club',
  rank: '2',
};

const mount = (newProps = {}) => render(<Card {...props} {...newProps} />);

afterEach(() => {
  jest.resetAllMocks();
});

it('should not have borders if card has no matching pair', () => {
  const { getByRole } = mount({ hasPair: false });

  expect(getByRole('img')).toHaveStyleRule('border', 'none');
});

it('should have borders if card has matching pair', () => {
  const { getByRole } = mount({ hasPair: true });

  expect(getByRole('img')).toHaveStyleRule('border', '4px solid');
});
