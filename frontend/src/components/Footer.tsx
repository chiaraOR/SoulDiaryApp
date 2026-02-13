import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../styles/IndexStyles';

interface FooterProps {
  style?: ViewStyle; // Lo lasciamo opzionale se un domani vuoi cambiare colore o opacità, ma non serve più per la posizione
}

export default function Footer({ style }: FooterProps) {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.text}>
        <Ionicons name="alert-circle-outline" size={16} color={Colors.textGray} />
        {'  '}L'IA può commettere errori.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // --- POSIZIONAMENTO FISSO IN BASSO ---
    position: 'absolute', 
    bottom: 40,  // Distanza dal fondo (regola se lo vuoi più su o giù)
    left: 0,     // Serve per centrarlo orizzontalmente
    right: 0,    // Serve per centrarlo orizzontalmente
    
    // --- STILE CONTENUTO ---
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    opacity: 0.8,
    zIndex: 10, // Si assicura che stia sopra ad altri elementi se necessario
  },
  text: {
    fontSize: 12,
    color: Colors.textGray,
    textAlign: 'center',
  },
});