import React from 'react';
import { View, Text, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import Logo from '../components/Logo';
import { indexStyles, Colors } from '../styles/IndexStyles';
import AuthButton from '../components/AuthButton';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import Footer from '../components/Footer';

type Props = NativeStackScreenProps<RootStackParamList, 'Index'>;

export default function IndexScreen({ navigation }: Props) {
  return (
    <View style={indexStyles.container}>
      <StatusBar style="dark" />

      <View style={indexStyles.contentContainer}>

        <Logo />

        <Text style={indexStyles.tagline}>
          Il diario digitale, sempre al tuo fianco.
        </Text>

        {/* Pulsanti */}
        <View style={indexStyles.buttonsContainer}>
          <AuthButton
            title="Accedi"
            variant="primary"
            iconName="log-in-outline"
            onPress={() => navigation.navigate('Login')}
          />

          <AuthButton
            title="Registrati"
            variant="outline"
            iconName="person-add-outline"
            onPress={() => console.log('Vai alla Registrazione')}
          />
        </View>
      </View>

      {/* Footer */}
      <Footer/>

    </View>
  );
}