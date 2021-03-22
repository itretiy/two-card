import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import History from './History';

const props = {
  games: [],
};

const mount = (newProps = {}) => render(<History {...props} {...newProps} />);

afterEach(() => {
  jest.resetAllMocks();
});

it('should show room name in history', () => {
  const { findByText } = mount({ games: [{ roomId: 'roomId', roomName: 'roomName' }] });

  expect(findByText('roomName')).toBeTruthy();
});

it(`should show winner as None in history if room hasn't winner`, () => {
  const { findByText } = mount({ games: [{ roomId: 'roomId', roomName: 'roomName' }] });

  expect(findByText('None')).toBeTruthy();
});

it(`should show winner name in history if room has winner`, () => {
  const { findByText } = mount({
    games: [{ roomId: 'roomId', roomName: 'roomName', winner: { name: 'player' } }],
  });

  expect(findByText('player')).toBeTruthy();
});
