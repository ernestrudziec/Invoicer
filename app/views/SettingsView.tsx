import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import styled from 'styled-components/native';
import { Logo } from '../components/styled/Logo';

export default function SettingsView() {
  return (
    <>
      <StatusBar barStyle="light-content" translucent={true} />
      <Container>
        <Logo />
      </Container>
    </>
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
