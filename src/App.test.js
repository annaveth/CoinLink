// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CoinLink title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CoinLink/i);
    expect(titleElement).toBeInTheDocument();
});
