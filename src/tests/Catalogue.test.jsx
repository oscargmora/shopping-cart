import {render, screen} from '@testing-library/react'
import { describe, it, expect } from 'vitest';
import Catalogue from '../routes/shop/catalogue/Catalogue';
import { BrowserRouter } from 'react-router-dom';

describe('Catalogue', () => {
    it('renders "Loading Catalogue..."', () => {
        render(<BrowserRouter><Catalogue /></BrowserRouter>);
        expect(screen.getByText('Loading Catalogue...')).toBeInTheDocument();
    });
});