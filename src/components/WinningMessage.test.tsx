import {render, screen} from '@testing-library/react';
import {WinningMessage} from './WinningMessage';

describe('Test the WinningMessage Component', () => {
    it('Test the WinningMessage Component at Looser Level', () => {
        render(<WinningMessage score={0} timerValue={700}/>);
        expect(screen.getByText("You can do better!")).toBeInTheDocument();
    })

    it('Test the WinningMessage Component at Iron Level', () => {
        render(<WinningMessage score={100} timerValue={100}/>);
        expect(screen.getByText("Typescript at Iron Level!")).toBeInTheDocument();
    })

    it('Test the WinningMessage Component at Bronze Level', () => {
        render(<WinningMessage score={400} timerValue={100}/>);
        expect(screen.getByText("Typescript at Bronze Level!")).toBeInTheDocument();
    })
    it('Test the WinningMessage Component at Silver Level', () => {
        render(<WinningMessage score={500} timerValue={100}/>);
        expect(screen.getByText("Typescript at Silver Level!")).toBeInTheDocument();
    })
    it('Test the WinningMessage Component at Gold Level', () => {
        render(<WinningMessage score={1000} timerValue={100}/>);
        expect(screen.getByText("Typescript at Gold Level!")).toBeInTheDocument();
    })
})