import { useState } from "react";
import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const rotationAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0px ;
  }
  50% {
    transform: rotate(360deg);
    border-radius: 50%;
  }
  100%{
    transform: rotate(0deg);
    border-radius: 0px;

  }
`;

const Emoji = styled.span`
  font-size: 50px;
`;

const Box = styled.div`
  width: 200px;
  height: 200px;
  background-color: tomato;
  animation: ${rotationAnimation} 2s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  ${Emoji} {
    &:hover {
      font-size: 70px;
    }
  }
`;

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

function App() {
  return (
    <Wrapper>
      <Title>Hello Styled Components</Title>
      <Box>
        <Emoji>🤗</Emoji>
      </Box>
    </Wrapper>
  );
}

export default App;
