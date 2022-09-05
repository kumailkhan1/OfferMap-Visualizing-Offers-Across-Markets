import { render, screen } from '@testing-library/react';
import App from './App';

it('should not display market data (charts) when data is loading initially',async () => {
    render(<App />)
    const marketData = screen.queryByText(/market data/i);
    expect(marketData).not.toBeInTheDocument();

})

it('should display market data (charts) when data is done loading',async () => {
    render(<App />)
    const marketData = screen.queryByText(/market data/i);
    expect(marketData).toBeInTheDocument();

})