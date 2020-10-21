import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import { Logo } from '../../components/styled/Logo';
import Action from '../../components/HomeView/Action';
import Icon from 'react-native-vector-icons/Entypo';

export default function ActionsView({ navigation }) {
  return (
    <Container>
      <Logo />
      <ActionsContainer>
        <Action onPress={() => navigation.push('AddRecord', { value: 20 })}>
          30/h
        </Action>
        <Action onPress={() => navigation.push('AddRecord', { value: 30 })}>
          40/h
        </Action>
        <Action onPress={() => navigation.push('AddRecord', { value: 40 })}>
          50/h
        </Action>
        <Action onPress={() => navigation.push('AddRecord', { value: 50 })}>
          <Icon name="edit" size={35} color="#131313" />
        </Action>
      </ActionsContainer>
      <Action
        toCalculatorView={true}
        onPress={() => navigation.push('IncomeCalculator')}>
        <Icon name="calculator" size={60} color="#131313" />
      </Action>
    </Container>
  );
}
const Container = styled(View)`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10% 5%;
  align-items: center;
  flex-direction: column;
  background: #151515;
`;

const ActionsContainer = styled(View)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 30%;
  flex-direction: row;
`;
