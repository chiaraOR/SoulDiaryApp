import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexScreen from './src/screens/IndexScreen';
import LoginScreen from './src/screens/LoginScreen';

export type RootStackParamList = {
  Index: undefined;
  Login: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Index"
        screenOptions={{
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="Index" 
          component={IndexScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ 
            headerShown: false, // Nascondiamo l'header per farlo custom come nell'immagine
            // Oppure metti true se vuoi la freccia "indietro" standard in alto
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}