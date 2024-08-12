import { render, screen } from '@testing-library/react';
import App from './App';

test('renders All Vehicles link', () => {
  render(<App />);
  const linkElement = screen.getByText(/All Vehicles/i);
  expect(linkElement).toBeInTheDocument();
});
