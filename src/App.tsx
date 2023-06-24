import React, {useState} from "react";
import {QuestionCard} from "./components/QuestionCard";
import  {quizData}  from "./QuizData";
import {Button, Container, ThemeProvider, Typography, createTheme} from "@mui/material";
import {Timer} from "./components/Timer";
import {AnswerObject} from "./AppTypes";
import {WinningMessage} from "./components/WinningMessage.tsx";

export const MAX_QUESTIONS = 10;

const theme = createTheme({
  palette: {
    primary: {
      main: '#3178c6',
    },
    secondary: {
      main: '#282c34',
    },
  },
});

export default function App() {
  const [number, setNumber] = useState(0)
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [randomQuizData, setRandomQuizData] = useState(quizData); // TODO:
  const [timerValue, setTimerValue] = useState(0);

  function startTrivia() {
    setNumber(0);
    setUserAnswers([]);
    setScore(0);
    setGameOver(false);
    setRandomQuizData(generateRandomList(quizData));
    setTimerValue(0);
  }

  function generateRandomList<T>(elements: T[]): T[] {
    const tempList = [...elements]; // Copy the initial List
    const randomList: T[] = [];
  
    while (tempList.length > 0) {
      const randomIndex = Math.floor(Math.random() * tempList.length);
      const randomElement = tempList.splice(randomIndex, 1)[0];
      randomList.push(randomElement);
    }
  
    return randomList;
  }

  function checkAnswer(e: React.MouseEvent<HTMLButtonElement>) {
    if (!gameOver) {

      const answer = e.currentTarget.value;
      const correct = randomQuizData[number].correctAnswer === answer;

      if (correct){
        setScore((prev) => prev + 100);
      }

      const answerObject = {
        question: randomQuizData[number].question,
        answer,
        correct,
        correctAnswer: randomQuizData[number].correctAnswer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  }

  function nextQuestion() {
    const nextNumber = number + 1;

    if (nextNumber === MAX_QUESTIONS) {
      setGameOver(true)
    } else {
      setNumber(nextNumber);
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ textAlign: "center" }}>
        <Typography variant="h3" component="h2" sx={{mt:6, color: "white"}}>Typescript Quiz</Typography>
        
        {gameOver && (
        <Button variant="contained" onClick={startTrivia} sx={{mt:3}} role="startButton">
          Start
        </Button>
        ) }

        {userAnswers.length === MAX_QUESTIONS && !gameOver && (
          <>
            <WinningMessage timerValue={timerValue} score={score} />
            <Button variant="contained" onClick={startTrivia} sx={{mt:3}} role="startButton">
            Restart
          </Button>
          </>
        )}


        {!gameOver && userAnswers.length !== MAX_QUESTIONS && (
          <>
            <Typography sx={{color:"white", mt:3}} component={'span'}>
              Score: {score}
              <Button variant="contained" onClick={nextQuestion} sx={{ml:5}} role="nextButton">
                Next
              </Button>
              <Timer onTimeChange={setTimerValue} />
            </Typography>

            <QuestionCard
              questionNr={number + 1}
              totalQuestions={MAX_QUESTIONS}
              question={randomQuizData[number].question}
              answers={randomQuizData[number].answers}
              userAnswer={userAnswers ? userAnswers[number] : undefined}
              callback={checkAnswer} 
            />
          </> 
          )}
        </Container>
      </ThemeProvider>
  )
}
