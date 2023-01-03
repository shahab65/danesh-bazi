import React from "react";
import { useExam } from "calls";
import Question from "components/Question";
const Exam = () => {
  const { data, isLoading, isError, error, isSuccess, refetch } = useExam();
  console.log(data);
  return (
    <div>
      {data?.map((question) => {
        return (
          <div key={question.id}>
            <Question question={question} />{" "}
          </div>
        );
      })}
    </div>
  );
};

export default Exam;
