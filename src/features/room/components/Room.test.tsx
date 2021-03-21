import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Room from './Room';

const props = {
  name: 'name',
  players: [],
  onDeal: jest.fn(),
  canAdd: true,
  onAddPlayer: jest.fn(),
  canRemove: true,
  onRemovePlayer: jest.fn(),
};

const mount = (newProps = {}) => render(<Room {...props} {...newProps} />);

afterEach(() => {
  jest.resetAllMocks();
});

it('should show room name', () => {
  const { findByText } = mount();

  expect(findByText(props.name)).toBeTruthy();
});

it('should show all players', () => {
  const { findByText } = mount({ players: [{ name: 'playerA' }, { name: 'playerB' }] });

  expect(findByText('playerA')).toBeTruthy();
  expect(findByText('playerB')).toBeTruthy();
});

it('should call props.onRemovePlayer when remove player button is clicked', () => {
  const { getByTestId } = mount();

  fireEvent.click(getByTestId('button.removePlayer'));

  expect(props.onRemovePlayer).toBeCalled();
});

it(`should disable remove player button if can't remove player`, () => {
  const { getByTestId } = mount({ canRemove: false });

  expect(getByTestId('button.removePlayer')).toBeDisabled();
});

it('should call props.onAddPlayer when add player button is clicked', () => {
  const { getByTestId } = mount();

  fireEvent.click(getByTestId('button.addPlayer'));

  expect(props.onAddPlayer).toBeCalled();
});

it(`should disable add player button if can't add player`, () => {
  const { getByTestId } = mount({ canAdd: false });

  expect(getByTestId('button.addPlayer')).toBeDisabled();
});

it('should call props.onDeal when deal button is clicked', () => {
  const { getByTestId } = mount();

  fireEvent.click(getByTestId('button.deal'));

  expect(props.onDeal).toBeCalled();
});
