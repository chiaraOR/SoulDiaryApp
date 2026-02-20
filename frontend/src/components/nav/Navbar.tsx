import React from 'react';
import { Image, Text, View, StyleSheet, Platform } from 'react-native';
import { Colors } from '../../constants/Colors';

export default function Navbar() {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
          <Text style={styles.appTitle}>SoulDiary</Text>
          <Image 
            source={require('../../../assets/logo2.png')} 
            style={styles.logo}
            resizeMode="contain" 
          />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: Platform.OS === 'ios' ? 60 : 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderInput,
    paddingTop: Platform.OS === 'ios' ? 0 : 0, 
    zIndex: 10, 
  },
  leftContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'flex-start',
  },
  appTitle: {
    fontSize: 17, 
    fontWeight: 'bold',
    color: Colors.primary,
    marginRight: 5,
    marginBottom: 0, 
  },
  logo: {
    width: 80, 
    height: 30, 
  }
});