import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Average Calculator title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Average Calculator/i);
  expect(linkElement).toBeInTheDocument();
});
