import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import { Logo } from '../components/styled/Logo';
import Action from '../components/HomeView/Action';
import { Picker } from '@react-native-community/picker';
import { ButtonWhite } from '../components/styled/Buttons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Bold } from '../components/styled/Text';

export default function IncomeCalculatorView() {
  const [hours, setHours] = useState('');
  const [perHour, setPerHour] = useState('');

  useEffect(() => {
    setHours(5);
    setPerHour(30);
  }, []);

  return (
    <Container>
      <Logo />
      <Title>How much will you earn getting {'  '}</Title>
      <Title>
        <Bold fontSize={'18px'}>
          {perHour} PLN for {''}
          {hours} hours ?
        </Bold>
      </Title>

      <PickersContainer>
        <StyledPicker
          itemStyle={{ color: 'white' }}
          selectedValue={perHour}
          onValueChange={(val) => setPerHour(val)}>
          {[...Array(48)].map((item, i) => {
            return (
              <Picker.Item
                label={((i + 1) * 5).toString() + ' PLN'}
                key={i}
                value={(i + 1) * 5}
              />
            );
          })}
        </StyledPicker>
        <StyledPicker
          itemStyle={{ color: 'white' }}
          selectedValue={hours}
          onValueChange={(val) => setHours(val)}>
          {[...Array(48)].map((item, i) => {
            return (
              <Picker.Item
                label={((i + 1) * 0.5).toString() + 'h'}
                key={i}
                value={(i + 1) * 0.5}
              />
            );
          })}
        </StyledPicker>
      </PickersContainer>
      <Highlight>
        <Bold color="#131313">{hours * perHour} PLN</Bold>
      </Highlight>
    </Container>
  );
}
const Container = styled(View)`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 5%;
  padding-top: 25%;
  align-items: center;
  background: #151515;
`;

const Title = styled(Text)`
  color: white;
  font-size: 15px;
  text-align: center;
  line-height: 30px;
  padding: 0 10%;
  line-height: 40px;
`;

const StyledPicker = styled(Picker)`
  height: 250px;
  width: 40%;
`;

const Highlight = styled(View)`
  width: 80%;
  height: 70px;
  border-radius: 50px;
  background: white;
  color: #131313;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PickersContainer = styled(View)`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
