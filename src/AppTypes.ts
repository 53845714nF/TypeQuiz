export type QuizQuestion = {
    id: number;
    question: string;
    answers: string[];
    correctAnswer: string;
}

export type AnswerObject = {
    question: string;
    answer: string;
    correct: boolean;
    correctAnswer: string;
  };