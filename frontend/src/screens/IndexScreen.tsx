import React from 'react';
import { View, Text, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
// Assicurati che IndexStyles sia salvato con le nuove modifiche
import { indexStyles, Colors } from '../styles/IndexStyles';
import AuthButton from '../components/AuthButton';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Index'>;

export default function IndexScreen({ navigation }: Props) {
  return (
    <View style={indexStyles.container}>
      <StatusBar style="dark" />

      <View style={indexStyles.contentContainer}>

        {/* --- RETTANGOLO CON LOGO PIÙ GRANDE --- */}
        <View style={indexStyles.logoContainer}>
          <Image
            source={require('../../assets/logo.png')}
            // Questo usa ancora lo stile originale per il box
            style={indexStyles.logoImage}
            resizeMode="contain"
          />
        </View>

        {/* --- TITOLO --- */}
        <Text style={indexStyles.appTitle}>SoulDiary</Text>

        {/* --- LOGO 2 (CONNECT) --- */}
        <Image
            source={require('../../assets/logo2.png')}
            // MODIFICA: Usa il nuovo stile specifico per controllarne la posizione
            style={indexStyles.logoConnect}
            resizeMode="contain"
          />

        <Text style={indexStyles.tagline}>
          Il diario digitale, sempre al tuo fianco.
        </Text>

        {/* Pulsanti */}
        <View style={indexStyles.buttonsContainer}>
          <AuthButton
            title="Accedi"
            variant="primary"
            iconName="log-in-outline"
            onPress={() => console.log('Vai al Login')}
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
      <View style={indexStyles.footer}>
        <Text style={indexStyles.footerText}>
          <Ionicons name="alert-circle-outline" size={16} color={Colors.textGray} />
          {'  '}L'IA può commettere errori.
        </Text>
      </View>

    </View>
  );
}