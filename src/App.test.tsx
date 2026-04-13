import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('Kno App Shell', () => {
    it('renders the main heading', () => {
        render(<App />);
        // Adjust 'Vite + React' to whatever text is actually in your App.tsx
        expect(screen.getByText(/Vite \+ React/i)).toBeInTheDocument();
    });
});