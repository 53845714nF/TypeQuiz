import {act, render, screen} from '@testing-library/react';
import {Timer} from './Timer';

describe('Test the Timer Component', () => {
    beforeEach(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.useRealTimers();
    });

    it('Render Timer Component 0 s', () => {
        render(<Timer onTimeChange={jest.fn()}/>);
        expect(screen.getByText('Time: 0 s')).toBeInTheDocument();
    });

    it('Render Timer Component 2 s', () => {
        render(<Timer onTimeChange={jest.fn()}/>);
        act(() => {
            jest.advanceTimersByTime(2000);
        });
        expect(screen.getByText('Time: 2 s')).toBeInTheDocument();
    });
});