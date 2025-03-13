import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f0f8ff; // Light blue background
  padding: 20px;
`;

const Logo = styled.img`
  max-width: 300px;
  margin-bottom: 30px;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  color: #1a5f7a;
  margin-bottom: 40px;
  text-align: center;
  font-family: 'Arial', sans-serif;
`;

const StartButton = styled.button`
  padding: 15px 40px;
  font-size: 1.5rem;
  background-color: #2e8b57;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #3cb371;
  }
`;

const StartPage = ({ onStartGame }) => {
  return (
    <PageContainer>
      <Logo 
        src="/images/ocean-crossing-logo.jpeg" 
        alt="Ocean Crossing Logo"
      />
      <Title>Ocean Crossing</Title>
      <StartButton onClick={onStartGame}>
        Start Game
      </StartButton>
    </PageContainer>
  );
};

export default StartPage; 