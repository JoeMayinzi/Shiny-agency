import React, { useState } from "react";
import { styled } from "styled-components";

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Ballon = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 50px;
  background-color: red;
  transform: scale(${({ size }) => size});
`;

const Home = () => {
  const [size, setSize] = useState(1);
  return (
    <HomeContainer>
      <h1 onClick={() => setSize(size + 0.1)}>Agrandir le ballon</h1>
      <Ballon size={size} />
    </HomeContainer>
  );
};

export default Home;
