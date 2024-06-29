import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import background from '../assets/background.jpg';  

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSendMessage = async () => {
    if (input.trim()) {
      const userMessage = { message: input, chat_id: 'default' };
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');

      try {
        const response = await axios.post('http://127.0.0.1:5000', userMessage);
        setMessages([...messages, { text: input, sender: 'user' }, { text: response.data.bot_message, sender: 'bot' }]);
      } catch (error) {
        console.error('Error sending message:', error);
      }
    }
  };

  return (
    <Container>
      <ChatContainer>
        {messages.map((msg, index) => (
          <Message key={index} sender={msg.sender}>
            {msg.text}
          </Message>
        ))}
      </ChatContainer>
      <InputContainer>
        <Input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message here..."
        />
        <SendButton onClick={handleSendMessage}>Send</SendButton>
      </InputContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 95vh;
  padding: 20px;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
`;

const ChatContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  background: rgba(255, 255, 255, 0.8);  /* Semi-transparent background */
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const Message = styled.div`
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  background: ${(props) => (props.sender === 'user' ? '#007bff' : '#e9e9eb')};
  color: ${(props) => (props.sender === 'user' ? '#fff' : '#000')};
  text-align: ${(props) => (props.sender === 'user' ? 'right' : 'left')};
`;

const InputContainer = styled.div`
  display: flex;
  padding: 10px;
  background: rgba(255, 255, 255, 0.9);  /* Semi-transparent background */
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 5px;
  outline: none;
`;

const SendButton = styled.button`
  padding: 10px 20px;
  margin-left: 10px;
  background: #007bff;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #0056b3;
  }
`;

export default ChatPage;
