import React from "react";
import { Link, useParams } from "react-router-dom";

const Survey = () => {
  const { questionNumber } = useParams();
  console.log(questionNumber);
  return (
    <div>
      <h1>Survey</h1>
      <Link to="client">Questionnaire Client</Link>
      <Link to="freelance">Questionnaire Freelance</Link>
    </div>
  );
};

export default Survey;
