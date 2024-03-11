import React, { useState } from "react";
import { quiz } from "../assets/quizdata";

const Quiz = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswer: 0,
    wrongAnswer: 0,
    attemptedQuestion: 0,
    unAttemptedQuestion: 0,
  });

  const { questions } = quiz;
  const { question, choices, correctAnswer } = questions[activeQuestion];

  const onClickNext = () => {
    setSelectedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswer: prev.correctAnswer + 1,
          }
        : { ...prev, wrongAnswer: prev.wrongAnswer + 1 }
    );

   
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
     
      setActiveQuestion(0);
      setShowResult(true);
    }
  };

  const onAnswerSelected = (answer, index) => {
    setSelectedAnswerIndex(index);
    if (answer === quiz.questions[activeQuestion].correctAnswer) {
      setSelectedAnswer(true);
      console.log("right");
    } else {
      setSelectedAnswer(false);
      console.log("wrong");
    }
  };

  return (
    <div className="mx-5 my-5">
      {!showResult ? (
        <div>
          <h1>Quiz</h1>
          <h2>{question}</h2>
          <ul>
            {choices.map((answer, index) => (
              <li
                className={selectedAnswerIndex === index ? "bg-red-600" : null}
                key={answer}
                onClick={() => onAnswerSelected(answer, index)}
              >
                {answer}
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={onClickNext}
            className="border border-green-500 px-6 py-2 mt-5"
          >
            {activeQuestion === questions.length - 1 ? "Finish" : "Next"}
          </button>
        </div>
      ) : (
        <div className="">
          <h3>Result</h3>
          <p>
            Total Question: <span>{questions.length}</span>
          </p>
          <p>
            Total Score:<span> {result.score}</span>
          </p>
          <p>
            Correct Answers:<span> {result.correctAnswer}</span>
          </p>
          <p>
            Wrong Answers:<span> {result.wrongAnswer}</span>
          </p>
          <p>
            attempted questions:<span> {result.attemptedQuestion}</span>
          </p>
          <p>
            unattempted questions:<span> {result.unAttemptedQuestion}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Quiz;
