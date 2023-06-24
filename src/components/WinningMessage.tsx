import { Alert } from '@mui/material';
import React from 'react';
interface WinningMessageProps {
    timerValue: number;
    score: number;
}

export const WinningMessage: React.FC<WinningMessageProps> = ({ timerValue, score }) => {
    function calculateWinningScore(time: number, score: number): string {
        const timeBonus = 1000 - time;
        const winningScore = timeBonus + score;

        if (winningScore < 500) {
            return "You can do better!";
        }
        if (winningScore < 1300) {
            return "Typescript at Iron Level!";
        }
        if (winningScore < 1400) {
            return "Typescript at Bronze Level!";
        }
        if (winningScore < 1600) {
            return "Typescript at Silver Level!";
        }
        return "Typescript at Gold Level!";
    }

    return (
        <>
            <Alert severity="success" sx={{mt:3}}> {calculateWinningScore(timerValue, score)}</Alert>
        </>
    );
};