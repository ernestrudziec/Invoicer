import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import { Logo } from '../components/styled/Logo';

export default function DataView() {
  return (
    <Container>
      <Logo />
    </Container>
  );
}

const Container = styled(View)`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding: 20% 5%;
  align-items: center;
  background: #151515;
`;
