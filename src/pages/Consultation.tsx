import React, { useState } from "react";
import { sendConsultationData } from "../utils/api";

type Answer = "Yes" | "No";

const questions: string[] = [
  "Do you have an allergy to pears?",
  "Do you experience allergic reactions to Genovian Pears?",
  "Do you experience itching or swelling after eating Genovian Pears?",
  "Have you been diagnosed with any other allergies before?",
  "Are you currently taking any medication for allergies?",
];

const Consultation: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [completed, setCompleted] = useState(false);

  const handleAnswer = (answer: Answer) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCompleted(true);
      sendConsultationData(newAnswers);
    }
  };

  if (completed) {
    return (
      <div className="thank-you">
        Thank you for completing the consultation!
      </div>
    );
  }

  return (
    <div className="consultation">
      <h2>{questions[currentQuestion]}</h2>
      <div className="button-group">
        <button onClick={() => handleAnswer("Yes")}>Yes</button>
        <button onClick={() => handleAnswer("No")}>No</button>
      </div>
    </div>
  );
};

export default Consultation;
