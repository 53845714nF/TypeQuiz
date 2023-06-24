# TypeQuiz

[![Tests](https://github.com/53845714nF/TypeQuiz/actions/workflows/tests.yml/badge.svg)](https://github.com/53845714nF/TypeQuiz/actions/workflows/tests.yml)

## Description

This is a Quiz App implemented in React with TypeScript.
This project is part of the Typescript module in my 4th semester of computer science.
Originally I wanted to build an [app to manage certificates for Homelabs](https://github.com/53845714nF/veritas),
but unfortunately that was only CRUD operation, so I started this new app.

## Features

- Multiple choice questions
- Score tracking
- Timer fot the whole quiz
- Randomized question order
- Results summary at the end

## Installation
### For Developers
    - Clone the repository
    - Run `npm install` to install all dependencies
    - Run `npm run dev` to start the app
    - Open the app in your browser (http://localhost:5173/) and start the quiz.

### With Docker
```bash
sudo docker run -p 80:80  ghcr.io/53845714nf/typequiz/typeqiz:latest
```

## Technologies Used

- React
- TypeScript
- Material UI
- Vite
- Jest

## Customization

To modify the questions, open the `QuizData.ts` file and update the question object.

## Acknowledgements

Thanks to [Mr. Deutz](https://de.linkedin.com/in/benjamin-deutz-222b92142) for his help by email and in the exercises.
And to [Mr. Weissbach](https://github.com/cmdaltent)  who was available online for questions.

## Resource Background Picture

https://unsplash.com/de/fotos/f77Bh3inUpE
