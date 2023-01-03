import React from "react";
import { QuestionType } from "../../calls/exam";

type Props = {
  question: QuestionType;
};
const Question = (props: Props) => {
  const { question } = props;
  return (
    <div>
      <p>{question.text}</p>
      {question.options.map((option) => {
        return <div key={option.key}>{option.value}</div>;
      })}
    </div>
  );
};

export default Question;
