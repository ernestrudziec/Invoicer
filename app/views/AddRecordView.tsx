import React, { useEffect, useState } from 'react';
import { View, Text, Button, Platform, useColorScheme } from 'react-native';
import styled from 'styled-components/native';
import { Logo } from '../components/styled/Logo';
import Action from '../components/HomeView/Action';
import { Picker } from '@react-native-community/picker';
import { ButtonWhite } from '../components/styled/Buttons';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import { Bold } from '../components/styled/Text';
import { WhiteHighlight } from '../components/styled/Highlights';
import Icon from 'react-native-vector-icons/Entypo';

const Realm = require('realm');

const RecordSchema = {
  name: 'Record',
  properties: {
    date: 'string',
    perHour: 'string',
    hours: 'string',
  },
};

export default function AddRecordView({ route }) {
  const { value } = route.params;

  const [hours, setHours] = useState('');
  const [perHour, setPerHour] = useState(value);

  const [beginDate, setBeginDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Realm.open({ schema: [RecordSchema] })
    //   .then((realm: any) => {
    //     realm.write(() => {
    //       const newRecord = realm.create('Record', {
    //         date: '12.10.2020',
    //         perHour: '40',
    //         hours: '6',
    //       });
    //     });
    //   })
    //   .catch((err: any) => console.log(err));

    if (endDate - beginDate < 0 || getRoundHours() > 48) {
      setBeginDate(new Date());
      setEndDate(new Date());
    }
  }, [beginDate, endDate]);

  const roundStep = (value, step) => {
    step || (step = 1.0);
    var inv = 1.0 / step;
    return Math.round(value * inv) / inv;
  };

  const getRoundHours = () => {
    const hours = (endDate - beginDate + 0.01) / 3600000;
    return roundStep(hours, 0.5);
  };

  return (
    <Container>
      <Bold>Job began at:</Bold>
      <View style={{ width: '100%' }}>
        <DateTimePicker
          textColor="white"
          testID={`dateTimePicker_${value}_begin`}
          value={beginDate}
          mode={'datetime'}
          is24Hour={true}
          display="spinner"
          onChange={(e, date) => {
            if (endDate - beginDate < 0) {
              // setEndDate(new Date());
              setBeginDate(new Date());
            } else {
              setBeginDate(date);
            }
          }}
        />
      </View>
      <Bold>Job ended at:</Bold>

      <View style={{ width: '100%' }}>
        <DateTimePicker
          textColor="white"
          testID={`dateTimePicker_${value}_end`}
          value={endDate}
          mode={'datetime'}
          is24Hour={true}
          display="spinner"
          onChange={(e, date) => {
            if (endDate - beginDate < 0) {
              setEndDate(new Date());
              // setBeginDate(new Date());
            } else {
              setEndDate(date);
            }
          }}
        />
      </View>
      <ButtonWhite width={'80%'}>
        <Bold color="#131313">
          {getRoundHours()} h{' '}
          <Icon name="chevron-right" size={30} color={'#131313'} />
        </Bold>
      </ButtonWhite>
    </Container>
  );
}
const Container = styled(View)`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 5% 5%;
  align-items: center;
  background: #151515;
`;

const Title = styled(Text)`
  color: white;
  font-size: 20px;
  text-align: center;
  line-height: 30px;
`;

const StyledPicker = styled(Picker)`
  height: 250px;
  width: 40%;
`;
