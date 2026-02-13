import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  Image, 
  KeyboardAvoidingView, 
  Platform, 
  TouchableWithoutFeedback, 
  Keyboard 
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Logo from '../components/Logo';
import { Ionicons } from '@expo/vector-icons';
import { loginStyles } from '../styles/LoginStyles';
import { Colors } from '../styles/IndexStyles'; // Importiamo i colori comuni
import AuthButton from '../components/AuthButton';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import Footer from '../components/Footer';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export default function LoginScreen({ navigation }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  return (
    // KeyboardAvoidingView serve a non coprire gli input quando esce la tastiera
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={loginStyles.container}>
          <StatusBar style="dark" />

          {/* HEADER: Logo e Nome App */}
          <Logo scale={0.9}/>

          {/* CARD BIANCA DI LOGIN */}
          <View style={loginStyles.card}>
            <Text style={loginStyles.welcomeTitle}>Bentornato!</Text>
            <Text style={loginStyles.welcomeSub}>Accedi al tuo account per continuare</Text>

            {/* Input Email */}
            <Text style={loginStyles.inputLabel}>Email</Text>
            <View style={loginStyles.inputContainer}>
              <TextInput 
                style={loginStyles.input}
                placeholder="la-tua@email.com"
                placeholderTextColor="#AAB8C2"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            {/* Input Password */}
            <Text style={loginStyles.inputLabel}>Password</Text>
            <View style={loginStyles.inputContainer}>
              <TextInput 
                style={loginStyles.input}
                placeholder="La tua password"
                placeholderTextColor="#AAB8C2"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!isPasswordVisible} // Nasconde il testo se false
              />
              <TouchableOpacity onPress={() => setPasswordVisible(!isPasswordVisible)}>
                <Ionicons 
                  name={isPasswordVisible ? "eye-off-outline" : "eye-outline"} 
                  size={20} 
                  color={Colors.textGray} 
                />
              </TouchableOpacity>
            </View>

            {/* Pulsante Accedi (usiamo il tuo componente AuthButton!) */}
            <View style={{ marginTop: 10 }}>
                <AuthButton 
                  title="Accedi" 
                  onPress={() => console.log("Logica di login qui")}
                  variant="primary"
                />
            </View>

            {/* Link Registrati */}
            <View style={loginStyles.registerContainer}>
              <Text style={loginStyles.registerText}>Non hai un account? </Text>
              <TouchableOpacity onPress={() => console.log("Vai a Registrazione")}>
                <Text style={loginStyles.registerLink}>Registrati</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Footer */}
          <Footer/>

        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}