import React from 'react';

import ActionsView from '../components/HomeView/ActionsView';
import { createStackNavigator } from '@react-navigation/stack';
import AddRecordView from '../views/AddRecordView';
import IncomeCalculatorView from '../views/IncomeCalculatorView';

const Stack = createStackNavigator();

export default function HomeView() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Actions"
        options={{ title: 'Home' }}
        component={ActionsView}
      />
      <Stack.Screen
        name="AddRecord"
        options={{ title: 'Add new record' }}
        component={AddRecordView}
      />
      <Stack.Screen
        name="IncomeCalculator"
        options={{ title: 'Income Calculator' }}
        component={IncomeCalculatorView}
      />
    </Stack.Navigator>
  );
}
