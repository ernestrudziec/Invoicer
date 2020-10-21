import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import React from 'react';

export const ButtonWhite = ({ width, children, ...props }) => {
  return (
    <Container {...props}>
      <InnerText>{children}</InnerText>
    </Container>
  );
};

const Container = styled(TouchableOpacity)`
  background: white;
  width: ${(props) => props.width || '200px'};
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  border-radius: 50px;
`;

const InnerText = styled(Text)`
  color: black;
`;
