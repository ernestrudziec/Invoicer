import React from 'react';
import 'react-native-gesture-handler';
import { Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeView from './views/HomeView';
import DataView from './views/DataView';
import SettingsView from './views/SettingsView';
import Icon from 'react-native-vector-icons/Entypo';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" translucent={true} />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          labelStyle: { fontSize: 30 },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            focused ? (color = '#131313') : (color = '#303030');
            focused ? (size = 30) : (size = 26);

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Data') {
              iconName = 'bar-graph';
            } else if (route.name === 'Settings') {
              iconName = 'cog';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#131313',
          inactiveTintColor: '#303030',
          labelStyle: { fontSize: 11 },
        }}>
        <Tab.Screen name="Home" component={HomeView} />
        <Tab.Screen name="Data" component={DataView} />
        <Tab.Screen name="Settings" component={SettingsView} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
