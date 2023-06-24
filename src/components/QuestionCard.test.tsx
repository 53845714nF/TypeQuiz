import { render, screen  } from '@testing-library/react';
import { QuestionCard } from './QuestionCard';
import { AnswerObject, QuizQuestion } from '../AppTypes';


describe('Test the QuestioCard Component', () => {
    
    const fakeData: QuizQuestion[] = [{
          id: 1, 
          question: "One Test Question?",
          answers: ["Test1", "Test2", "Test3", "Test4"],
          correctAnswer: "Test1"
    }]

    const fakeAnswerData: AnswerObject = {
        question: "One Test Question?",
        answer: "Test1",
        correct: true,
        correctAnswer: "Test1",
    }
    
    it('Render QuestionCard Component', () => {
        render(<QuestionCard
            questionNr={1}
            totalQuestions={10}
            question={fakeData[0].question}
            answers={fakeData[0].answers}
            userAnswer={fakeAnswerData}
            callback={jest.fn()} 
          />);
        expect(screen.getByText('Question: 1 / 10')).toBeInTheDocument();
        expect(screen.getByText('One Test Question?')).toBeInTheDocument();
        
        fakeData[0].answers.map((answer) => 
            expect(screen.getByText(answer)).toBeInTheDocument()
        );
        
    });

    it('Answer Button not Activ, when no UserAnswer is ther', () => {
        const { getByText } = render(<QuestionCard
            questionNr={1}
            totalQuestions={10}
            question={fakeData[0].question}
            answers={fakeData[0].answers}
            userAnswer={undefined}
            callback={jest.fn()} 
          />);
        
        const button = getByText("Test1")
        expect(button).not.toBeDisabled();
    });
});