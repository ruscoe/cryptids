import { render, screen } from '@testing-library/react';
import App from './App';

test('renders cryptid button', () => {
  render(<App />);
  const buttonElement = screen.getByText(/Show Another Cryptid/i);
  expect(buttonElement).toBeInTheDocument();
});
