import React, { createContext, useState, useContext, ReactNode } from "react";

export type Answer = "Yes" | "No";

interface ConsultationContextType {
  currentQuestion: number;
  answers: Answer[];
  completed: boolean;
  setCurrentQuestion: (question: number) => void;
  addAnswer: (answer: Answer) => void;
  completeConsultation: () => void;
}

const ConsultationContext = createContext<ConsultationContextType | undefined>(
  undefined
);

export const questions: string[] = [
  "Do you have an allergy to pears?",
  "Do you experience allergic reactions to Genovian Pears?",
  "Do you experience itching or swelling after eating Genovian Pears?",
  "Have you been diagnosed with any other allergies before?",
  "Are you currently taking any medication for allergies?",
];

export const ConsultationProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [completed, setCompleted] = useState(false);

  const addAnswer = (answer: Answer) => {
    setAnswers([...answers, answer]);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCompleted(true);
    }
  };

  const completeConsultation = () => {
    setCompleted(true);
  };

  return (
    <ConsultationContext.Provider
      value={{
        currentQuestion,
        answers,
        completed,
        setCurrentQuestion,
        addAnswer,
        completeConsultation,
      }}
    >
      {children}
    </ConsultationContext.Provider>
  );
};

export const useConsultation = () => {
  const context = useContext(ConsultationContext);
  if (context === undefined) {
    throw new Error(
      "useConsultation must be used within a ConsultationProvider"
    );
  }
  return context;
};
