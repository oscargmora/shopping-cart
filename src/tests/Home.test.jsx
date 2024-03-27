import {render, screen} from '@testing-library/react'
import { describe, it, expect } from 'vitest';
import Home from '.././routes/home/Home';
import { BrowserRouter } from 'react-router-dom';

describe('Home', () => {
    it('renders "Stop Shop"', () => {
        render(<BrowserRouter><Home /></BrowserRouter>);
        const h3Element = screen.getByRole('heading', { level: 3 });
        expect(h3Element).toHaveTextContent('Stop Shop');
    });
});