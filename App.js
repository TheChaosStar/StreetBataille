import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Connect from './pages/Connect.js'
import Home from './pages/Home.js'
import Game from './pages/Game.js'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="connection" component={Connect} />
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="game" component={Game} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;