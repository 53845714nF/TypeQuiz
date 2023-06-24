import {QuizQuestion} from "./AppTypes";

const quizData: QuizQuestion[] = [
    {
        id: 1,
        question: "Welches ist die standert Programmierspache für Webbrowser?",
        answers: ["Javascript", "Typescript", "WebAssembly", "PyScript"],
        correctAnswer: "Javascript"
    },
    {
        id: 2,
        question: "Nach welchem Standert ist Javascript implementiert?",
        answers: ["IEEE 802.15.4", "RFC 2795", "ECMAScript", "PEP8"],
        correctAnswer: "ECMAScript"
    },
    {
        id: 3,
        question: "Welche bekannte Laufzeitumgebung wird für Javascript auf dem Server verwendet?",
        answers: ["WINE", "JVM", "Node.Js", "Cygwin"],
        correctAnswer: "Node.Js"
    },
    {
        id: 4,
        question: "In welche Sprache wird Typescript tranpiliert?",
        answers: ["WebAssembly", "Typescript Bytecode", "Javascript", "C++"],
        correctAnswer: "Javascript"
    },
    {
        id: 5,
        question: "Wie heißt es wenn Variabel verwendet werden können ohne sie vorher zu deklarieren?",
        answers: ["Preusage", "Hoisting", "No Scope", "Hosting"],
        correctAnswer: "Hoisting"
    },
    {
        id: 6,
        question: "Ist das neuzuorden mit unterschiedlichen Datentypen in Typescript möglich?",
        answers: ["Ja", "Nein"],
        correctAnswer: "Nein"
    },
    {
        id: 7,
        question: "Was sind Primitive datentypen in Typescript?",
        answers: ["string, number, boolean, array", "Boolean, Number, String, Array", "int, char, bool, array"],
        correctAnswer: "string, number, boolean, array"
    },
    {
        id: 8,
        question: "let a: string = “Hello, World!”; Ist hier das Typisieren notwendig?",
        answers: ["Ja", "Nein"],
        correctAnswer: "Nein"
    },
    {
        id: 9,
        question: "let d: number[] = []; Ist hier das Typisieren notwendig?",
        answers: ["Ja", "Nein"],
        correctAnswer: "Ja"
    },
    {
        id: 10,
        question: "Was ist kein Return Type in Typescript?",
        answers: ["void", "none", "never", "undefined"],
        correctAnswer: "none"
    },
];

export function getQuizData(): QuizQuestion[] {
    return quizData;
}
