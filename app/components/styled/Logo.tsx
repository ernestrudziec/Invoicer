import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';

export const Logo = () => {
  return (
    <Container>
      <Heading>Invoicer</Heading>
      <Subtitle>Calculate your earnings!</Subtitle>
    </Container>
  );
};

const Container = styled(View)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 5%;
`;

const Heading = styled(Text)`
  color: white;
  font-size: 60px;
  font-weight: 700;
  text-align: center;
`;

const Subtitle = styled(Text)`
  color: white;
  font-size: 16px;
`;
