import {render, screen, act} from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest';
import Catalogue from '../routes/shop/catalogue/Catalogue';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

describe('Catalogue', () => {
    it('renders "Loading Catalogue..."', () => {
        render(<BrowserRouter><Catalogue /></BrowserRouter>);
        expect(screen.getByText('Loading Catalogue...')).toBeInTheDocument();
    });

    it('Execute callback passed when clicked', async () => {
        const onClick = vi.fn();
        const user = userEvent.setup();
        render(<BrowserRouter><Catalogue addToBasket={onClick} /></BrowserRouter>);
        
        await act(async () => {
            await new Promise((resolve) => setTimeout(resolve, 1000))
        });

        const button = screen.getByRole('button', {name: 'Add To Cart' });
        await user.click(button);
        expect(onClick).toHaveBeenCalled();
    })
});
