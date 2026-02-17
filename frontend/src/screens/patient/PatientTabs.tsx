import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Platform, View, Text } from 'react-native';
import DiaryScreen from './DiaryScreen';
import DoctorScreen from './DoctorScreen';
import ProfileScreen from './ProfileScreen';

const PlaceholderScreen = ({ name }: { name: string }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5F7FA' }}>
    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#333' }}>Pagina {name}</Text>
    <Text style={{ color: '#666', marginTop: 10 }}>In costruzione</Text>
  </View>
);

const Tab = createBottomTabNavigator();

export default function PatientTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Diario" 
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          height: Platform.OS === 'ios' ? 90 : 70,
          paddingBottom: Platform.OS === 'ios' ? 30 : 10,
          paddingTop: 10,
          backgroundColor: '#fff',
          borderTopWidth: 0,
          elevation: 10,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
        },
        tabBarActiveTintColor: '#4A90E2',
        tabBarInactiveTintColor: '#999',
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = 'help';

          if (route.name === 'Diario') {
            iconName = focused ? 'book' : 'book-outline';
          } else if (route.name === 'Medico') {
            iconName = focused ? 'medkit' : 'medkit-outline';
          } else if (route.name === 'Profilo') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen 
        name="Diario" 
        component={DiaryScreen} 
      />

      <Tab.Screen 
        name="Medico" 
        component={DoctorScreen} 
      />

      <Tab.Screen 
        name="Profilo" 
        component={ProfileScreen} 
      />
      
    </Tab.Navigator>
  );
}