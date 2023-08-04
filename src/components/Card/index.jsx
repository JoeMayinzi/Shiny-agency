import React from "react";
import PropTypes from "prop-types";
import { styled } from "styled-components";
import colors from "../../utils/style/colors";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  padding: 15px;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  width: 300px;
  height: 300px;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }
`;

const CardLabel = styled.span`
  color: #5843e4;
  font-size: 22px;
  font-weight: bold;
`;

const CardImage = styled.img`
  margin: 0 auto;
  height: 80px;
  width: 80px;
  border-radius: 50%;
`;

const Card = ({ name, job, picture }) => {
  return (
    <CardWrapper>
      <CardLabel> {name} </CardLabel>
      <CardImage src={picture} alt="freelance" />
      <span> {job} </span>
    </CardWrapper>
  );
};

Card.propTypes = {
  name: PropTypes.string,
  job: PropTypes.string.isRequired,
  picture: PropTypes.string,
};

export default Card;
