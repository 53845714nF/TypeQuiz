import {fireEvent, render, screen} from '@testing-library/react';
import App, {MAX_QUESTIONS} from "./App";
import * as quizData from "./QuizData";
import {QuizQuestion} from "./AppTypes";

describe('Tests for App Component', () => {

    it('Render App Component', () => {
        render(<App/>);
        expect(screen.getByText("Typescript Quiz")).toBeInTheDocument();
        expect(screen.getByRole('startButton')).toBeInTheDocument();
    })

    it('Test the start button', () => {
        render(<App/>);
        const startButton = screen.getByRole('startButton');
        fireEvent.click(startButton);
        expect(screen.getByText("Score: 0")).toBeInTheDocument();
    })

    it('Test the next button', () => {
        render(<App/>);
        const startButton = screen.getByRole('startButton');
        fireEvent.click(startButton);
        const nextButton = screen.getByRole('nextButton');
        fireEvent.click(nextButton);
        expect(screen.getByText("Question: 2 / 10")).toBeInTheDocument();
    })

    it('Test the nextQuestion function checks the end', () => {
        render(<App/>);
        const startButton = screen.getByRole('startButton');
        fireEvent.click(startButton);
        const nextButton = screen.getByRole('nextButton');

        for (let i = 0; i < MAX_QUESTIONS; i++) {
            fireEvent.click(nextButton);
        }
        expect(screen.getByRole('startButton')).toBeInTheDocument();
    })

    it('Test checkAnswer updates score and user answers correctly', () => {
        // Take me to 3 days to figure out how to mock the data
        jest.spyOn(quizData, "getQuizData").mockReturnValue(
            [{
                id: 1,
                question: "What is the capital of France?",
                answers: ["Paris", "London", "Berlin", "Madrid"],
                correctAnswer: "Paris",
            } as QuizQuestion]
        )

        render(<App/>);
        const startButton = screen.getByRole('startButton');
        fireEvent.click(startButton);
        const answerButton = screen.getByText("Paris");
        fireEvent.click(answerButton);
        expect(screen.getByText("Score: 100")).toBeInTheDocument();
    });
});