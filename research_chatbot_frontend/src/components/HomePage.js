import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import background from '../assets/background.jpg';

const HomePage = () => {
  return (
    <Container>
      <Header>Welcome to ResearchNexus</Header>
      <SubHeader>Your AI-powered research assistant</SubHeader>
      <Link to="/chat">
        <Button>Start Chatting</Button>
      </Link>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
`;

const Header = styled.h1`
  font-size: 4em;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const SubHeader = styled.h2`
  font-size: 2em;
  color: #fff;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1.5em;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export default HomePage;
