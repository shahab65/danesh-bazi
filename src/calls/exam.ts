import Axios from "./Axios";
import { useQuery } from "react-query";

type Option = {
  key: number;
  value: string;
};

export type QuestionType = {
  id: number;
  text: string;
  options: Option[];
};

type Exam = QuestionType[];

export function useExam() {
  return useQuery<Exam, string>("exam", () =>
    Axios.get("/questions").then((res) => res.data)
  );
}
