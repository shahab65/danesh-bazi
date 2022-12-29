import React from "react";
import { useVideoList } from "calls";

const Exam = () => {
  const { data, isLoading, isError, error, isSuccess, refetch } =
    useVideoList();
  console.log(data);
  return <div>today test</div>;
};

export default Exam;
