/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { styled } from "styled-components";
import colors from "../../utils/style/colors";
import { Loader } from "../../utils/style/Atoms";

const SurveyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const QuestionTitle = styled.h2`
  text-decoration: underline;
  text-decoration-color: ${colors.primary};
`;

const QuestionContent = styled.span`
  margin: 30px;
`;

const LinkWrapper = styled.div`
  padding-top: 30px;
  & a {
    color: black;
  }
  & a:first-of-type {
    margin-right: 20px;
  }
`;

const Survey = () => {
  const { questionNumber } = useParams();
  const questionNumberInt = parseInt(questionNumber);
  const prevQuestionNumber =
    questionNumberInt === 1 ? 1 : questionNumberInt - 1;
  const nextQuestionNumber = questionNumberInt + 1;
  const [surveyData, setSurveyData] = useState({});
  const [isDataLoading, setDataLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setDataLoading(true);
    async function fetchSurvey() {
      try {
        const response = await fetch("http://localhost:8000/survey");
        const { surveyData } = await response.json();
        setSurveyData(surveyData);
      } catch (e) {
        console.log(e);
        setError(error);
      } finally {
        setDataLoading(false);
      }
    }

    fetchSurvey();
  }, []);
  return (
    <div>
      <SurveyContainer>
        <QuestionTitle>Question {questionNumber} </QuestionTitle>
        {isDataLoading ? (
          <Loader />
        ) : (
          <QuestionContent> {surveyData[questionNumber]} </QuestionContent>
        )}
        <LinkWrapper>
          <Link to={`/survey/${prevQuestionNumber}`}>Précédent</Link>
          {surveyData[questionNumberInt + 1] ? (
            <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
          ) : (
            <Link to="/results">Résultats</Link>
          )}
        </LinkWrapper>
      </SurveyContainer>
    </div>
  );
};

export default Survey;
