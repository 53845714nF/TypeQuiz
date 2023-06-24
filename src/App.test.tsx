import {fireEvent, render, screen} from '@testing-library/react';
import App, {MAX_QUESTIONS} from "./App";
//import * as React from "react";

const ActualQuizData = jest.requireActual('./QuizData')

jest.mock("./QuizData", () => ({
             __esModule: true,
             quizData: [{
                 id: 1,
                 question: 'What is the capital of France?',
                 answers: ['Paris', 'London', 'Berlin', 'Madrid'],
                 correctAnswer: 'Paris',
             },]
}));

describe('Test the App Component', () => {


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
       require("./QuizData").default = ActualQuizData.default;

       render(<App/>);
       const startButton = screen.getByRole('startButton');
       fireEvent.click(startButton);
       const nextButton = screen.getByRole('nextButton');
       fireEvent.click(nextButton);
       expect(screen.getByText("Question: 2 / 10")).toBeInTheDocument();
   })

   it('Test the nextQuestion function checks the end', () => {

       jest.unmock("./QuizData")
       jest.resetModules();

       render(<App/>);
       const startButton = screen.getByRole('startButton');
       fireEvent.click(startButton);
       const nextButton = screen.getByRole('nextButton');

       for (let i = 0; i < MAX_QUESTIONS; i++) {
           fireEvent.click(nextButton);
       }
       expect(screen.getByRole('startButton')).toBeInTheDocument();
   })


   it('checkAnswer updates score and user answers correctly', () => {
         /*
         const setScoreMock = jest.fn();
         const setUserAnswersMock = jest.fn();
         const useStateMock = jest.spyOn(React, 'useState');
        */

        render(<App />);
        const startButton = screen.getByRole('startButton');
        fireEvent.click(startButton);

        /*
        useStateMock.mockReturnValueOnce([0, jest.fn()]);
        useStateMock.mockReturnValueOnce([[], setUserAnswersMock]);
        useStateMock.mockReturnValueOnce([0, setScoreMock]);
        useStateMock.mockReturnValueOnce([true, jest.fn()]);
        useStateMock.mockReturnValueOnce([[{
            question: 'What is the capital of France?',
            answer: 'Paris',
            correct: true,
            correctAnswer: 'Paris',
        }], jest.fn()]);
        useStateMock.mockReturnValueOnce([0, jest.fn()]);
        */

        const answerButton = screen.getByText("Paris");
        fireEvent.click(answerButton);
        expect(screen.getByText("Score: 100")).toBeInTheDocument();

        /*expect(setScoreMock).toHaveBeenCalledWith(100);
        expect(setUserAnswersMock).toHaveBeenCalledWith([
            {
                question: expect.any(String), // Verify that the question is a string
                answer: 'Paris',
                correct: true,
                correctAnswer: 'Paris',
            },
        ]);*/
    });
});