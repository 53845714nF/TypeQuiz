import {Box, Button, Container, Typography} from "@mui/material";
import React from "react";
import {AnswerObject} from "../AppTypes";

export type QuestionCardProps = {
    question: string,
    answers: string[],
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void,
    userAnswer: AnswerObject | undefined,
    questionNr: number,
    totalQuestions: number,
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
                                                              question,
                                                              answers,
                                                              callback,
                                                              userAnswer,
                                                              questionNr,
                                                              totalQuestions,
                                                          }) => (
    <Box component="div" display="inline-block" key={question}>
        <Container sx={{backgroundColor: "white", mt: 2, borderRadius: "20px", display: "inline-block"}}>
            <Typography sx={{pt: 3}}>Question: {questionNr} / {totalQuestions}</Typography>
            <Typography sx={{mb: 3}}> {question} </Typography>

            {answers.map((answer) => (
                <Container key={answer}>
                    <Button variant="outlined"
                            sx={{mb: 2}}
                            disabled={userAnswer ? true : false}
                            value={answer}
                            onClick={callback}
                            style={{textTransform: 'none'}}
                            role="answerButton">
                        {answer}
                    </Button>
                </Container>
            ))}
        </Container>
    </Box>
);