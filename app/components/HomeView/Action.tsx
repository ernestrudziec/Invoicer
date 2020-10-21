import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import {
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export default function Action({ children, onPress, toCalculatorView }) {
  return (
    <Container onPress={onPress} toCalculatorView={toCalculatorView}>
      <Value>{children}</Value>
    </Container>
  );
}

const Container = styled(TouchableOpacity)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: white;
  height: ${Math.round(Dimensions.get('window').width * 0.35)}px;
  width: ${({ toCalculatorView }) =>
    toCalculatorView
      ? Math.round(Dimensions.get('window').width * 0.75) + 'px'
      : Math.round(Dimensions.get('window').width * 0.35) + 'px'}};
  border-radius: 30px;
  background: white;
  margin: ${Math.round(Dimensions.get('window').width * 0.02)}px;
`;

const Value = styled(Text)`
  font-size: 25px;
  text-align: center;
  font-weight: 700;
`;
