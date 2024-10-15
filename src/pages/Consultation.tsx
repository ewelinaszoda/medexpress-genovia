import React, { useEffect } from "react";
import { useConsultation, questions } from "../context/ConsultationContext";
import { sendConsultationData } from "../utils/api";

const Consultation: React.FC = () => {
  const { currentQuestion, answers, completed, addAnswer } = useConsultation();

  useEffect(() => {
    if (completed) {
      sendConsultationData(answers);
    }
  }, [completed, answers]);

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
        <button onClick={() => addAnswer("Yes")}>Yes</button>
        <button onClick={() => addAnswer("No")}>No</button>
      </div>
    </div>
  );
};

export default Consultation;
