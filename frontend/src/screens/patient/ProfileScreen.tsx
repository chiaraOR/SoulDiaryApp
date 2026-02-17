import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StatusBar,
  Alert
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { profileScreenStyles } from '../../styles/patient/ProfileScreenStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import { commonStyles } from '../../styles/CommonStyles';

export default function ProfileScreen() {
  const navigation = useNavigation<any>();

  const patientInfo = {
    nome: 'Mario',
    cognome: 'Rossi',
    email: 'mario.rossi@email.com',
    dataNascita: '14/05/1980',
    codiceFiscale: 'RSSMRA80A01H501U',
    telefono: '333 1234567'
  };

  const handleLogout = () => {
    Alert.alert(
      "Logout",
      "Sei sicuro di voler uscire?",
      [
        { text: "Annulla", style: "cancel" },
        { 
          text: "Esci", 
          style: "destructive", 
          onPress: () => navigation.replace('Login') 
        }
      ]
    );
  };

  return (
    <SafeAreaView style={commonStyles.containerPage} edges={['top']}>
      <StatusBar barStyle="dark-content" />
      <Navbar />
      <View style={commonStyles.containerPage}      >

        <View style={commonStyles.profileCard}>
          
          <View style={profileScreenStyles.avatarContainer}>
            <Ionicons name="person" size={48} color="#BBB" />
          </View>

          <Text style={profileScreenStyles.patientName}>{patientInfo.nome} {patientInfo.cognome}</Text>
          <Text style={profileScreenStyles.patientEmail}>{patientInfo.email}</Text>

          <View style={profileScreenStyles.infoRow}>
            <Text style={profileScreenStyles.infoLabel}>Data di Nascita</Text>
            <Text style={profileScreenStyles.infoValue}>{patientInfo.dataNascita}</Text>
          </View>

          <View style={profileScreenStyles.infoRow}>
            <Text style={profileScreenStyles.infoLabel}>Codice Fiscale</Text>
            <Text style={profileScreenStyles.infoValue}>{patientInfo.codiceFiscale}</Text>
          </View>

          <View style={[profileScreenStyles.infoRow, { borderBottomWidth: 0 }]}>
            <Text style={profileScreenStyles.infoLabel}>Telefono</Text>
            <Text style={profileScreenStyles.infoValue}>{patientInfo.telefono}</Text>
          </View>
        </View>
        
        <TouchableOpacity style={profileScreenStyles.logoutButton} onPress={handleLogout}>
          <Ionicons name="log-out-outline" size={20} color="#D93025" />
          <Text style={profileScreenStyles.logoutText}>Esci dal profilo</Text>
        </TouchableOpacity>
      </View>
      <Footer />
    </SafeAreaView>
  );
}