import React, { useState } from "react";
import { quiz } from "../assets/quizdata";

const Quiz = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [buttonColor, setButtonColor] = useState("bg-gray-300");
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
    setButtonColor("bg-purple-300");
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
    <div className="bg-gradient-to-r from-purple-800 to-pink-200 h-screen flex items-center justify-center">
      <div>
        <ul className="flex flex-col gap-16">
          <li className="border rounded-3xl w-[40px] h-[40px] flex items-center justify-center">
            <span>1</span>
          </li>{" "}
          <li className="border rounded-3xl w-[40px] h-[40px] flex items-center justify-center">
            <span>2</span>
          </li>
          <li className="border rounded-3xl w-[40px] h-[40px] flex items-center justify-center">
            <span>3</span>
          </li>
          <li className="border rounded-3xl w-[40px] h-[40px] flex items-center justify-center">
            <span>4</span>
          </li>
        </ul>
      </div>
      <div className="bg-white w-full md:w-2/4 h-96 flex items-center justify-center px-4 mx-4 rounded-md py-4">
        {!showResult ? (
          <div className="flex flex-col gap-5 w-11/12">
            <h2 className="text-xl">{question}</h2>
            <ul className="flex flex-col gap-4">
              {choices.map((answer, index) => (
                <li
                  className={`hover:cursor-pointer rounded-md px-3 py-2 border border-purple-200 ${
                    selectedAnswerIndex === index
                      ? "bg-purple-300 border border-purple-700"
                      : null
                  }`}
                  // className={selectedAnswerIndex === index ? "rounded-md px-3 py-2 bg-green-300 border border-green-900" : "border border-green-300 rounded-md px-3 py-2"}
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
              className={`rounded-md py-2 w-40 self-end ${buttonColor}`}
            >
              {activeQuestion === questions.length - 1 ? "Finish" : "Next"}
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-4 h-96 justify-center">
            <h3 className="text-center text-3xl font-bold">Result</h3>
            <p>
              Total Question:{" "}
              <span className="font-semibold text-purple-600">
                {questions.length}
              </span>
            </p>
            <p>
              Total Score:
              <span className="font-semibold text-purple-600">
                {" "}
                {result.score}
              </span>
            </p>
            <p>
              Correct Answers:
              <span className="font-semibold text-purple-600">
                {" "}
                {result.correctAnswer}
              </span>
            </p>
            <p>
              Wrong Answers:
              <span className="font-semibold text-purple-600">
                {" "}
                {result.wrongAnswer}
              </span>
            </p>
            <p>
              Attempted Questions:
              <span className="font-semibold text-purple-600">
                {" "}
                {result.attemptedQuestion}
              </span>
            </p>
            <p>
              Unattempted Questions:
              <span className="font-semibold text-purple-600">
                {" "}
                {result.unAttemptedQuestion}
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
