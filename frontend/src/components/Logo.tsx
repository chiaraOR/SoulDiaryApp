import React from 'react';
import { View, Text, Image, StyleSheet, ViewStyle } from 'react-native';
import { Colors } from '../styles/IndexStyles'; // Importiamo i colori centralizzati

interface LogoProps {
  scale?: number; // 1 = grandezza originale, 0.8 = più piccolo, etc.
  style?: ViewStyle; // Per aggiungere margini esterni se serve
}

export default function Logo({ scale = 1, style }: LogoProps) {
  
  // Calcoliamo le dimensioni in base alla scala
  const containerSize = 120 * scale;
  const imageSize = 90 * scale;
  const fontSize = 28 * scale;
  const connectWidth = 160 * scale;
  const connectHeight = 50 * scale;
  const borderRadius = 24 * scale;

  return (
    <View style={[styles.container, style]}>
      
      {/* --- RETTANGOLO CON LOGO --- */}
      <View style={[
        styles.logoContainer, 
        { 
          width: containerSize, 
          height: containerSize, 
          borderRadius: borderRadius 
        }
      ]}>
        <Image 
          source={require('../../assets/logo.png')} 
          style={{ width: imageSize, height: imageSize }} 
          resizeMode="contain" 
        />
      </View>
      
      {/* --- TITOLO --- */}
      <Text style={[styles.appTitle, { fontSize: fontSize }]}>SoulDiary</Text>

      {/* --- LOGO 2 (CONNECT) --- */}
      <Image 
        source={require('../../assets/logo2.png')} 
        style={{ 
          width: connectWidth, 
          height: connectHeight,
          marginTop: 0,
          marginBottom: 10 * scale
        }} 
        resizeMode="contain" 
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    
    // Ombreggiatura
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  appTitle: {
    fontWeight: 'bold',
    color: Colors.textDark,
    textAlign: 'center',
    marginBottom: 0, 
    lineHeight: 34,
  },
});