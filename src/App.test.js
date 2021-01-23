import { render, screen } from '@testing-library/react';
import App from './App';

test('renders players', () => {
  render(<App />);
  const title = screen.getByText(/Jugadores/i);
  expect(title).toBeInTheDocument();
});

test('renders titular', () => {
  render(<App />);
  const title = screen.getByText(/Titulares/i);
  expect(title).toBeInTheDocument();
});

test('renders substitut', () => {
  render(<App />);
  const title = screen.getByText(/Suplentes/i);
  expect(title).toBeInTheDocument();
});
