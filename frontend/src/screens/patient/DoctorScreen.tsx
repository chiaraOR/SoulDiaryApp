import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StatusBar,
  Linking 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { doctorScreenStyles } from '../../styles/patient/DoctorScreenStyles';
import Footer from '../../components/Footer';
import { Colors } from '../../constants/Colors';
import Navbar from '../../components/Navbar';
import { commonStyles } from '../../styles/CommonStyles';

export default function DoctorScreen() {
  const doctorInfo = {
    name: 'Dott. Giuseppe Veronesi',
    specialization: 'Psicoterapeuta',
    email: 'giuseppe.veronesi@studio.it',
    address: 'Via dei Mille 45, Roma',
    phone: '06 12345678',
    mobile: '333 9876543' 
  };

  const handleEmailPress = () => {
    Linking.openURL(`mailto:${doctorInfo.email}`);
  };

  const handlePhonePress = () => {
    Linking.openURL(`tel:${doctorInfo.phone.replace(/ /g, '')}`);
  };

  return (
    <SafeAreaView style={commonStyles.containerPage} edges={['top']}>
      <StatusBar barStyle="dark-content"/>

      <Navbar />

      <View style={commonStyles.containerPage}>
        <View style={[commonStyles.profileCard]}>
          
          <View style={doctorScreenStyles.avatarContainer}>
            <Ionicons name="medkit" size={48} color={Colors.primary || '#4A90E2'} />
          </View>

          <Text style={doctorScreenStyles.doctorName}>{doctorInfo.name}</Text>
          <Text style={doctorScreenStyles.doctorSpecialization}>{doctorInfo.specialization}</Text>

          <View style={doctorScreenStyles.divider} />

          <TouchableOpacity style={doctorScreenStyles.contactRow} onPress={handleEmailPress}>
            <View style={doctorScreenStyles.iconContainer}>
              <Ionicons name="mail-outline" size={22} color="#666" />
            </View>
            <View style={doctorScreenStyles.contactInfo}>
              <Text style={doctorScreenStyles.contactLabel}>Email</Text>
              <Text style={doctorScreenStyles.contactValue}>{doctorInfo.email}</Text>
            </View>
            <Ionicons name="chevron-forward" size={16} color="#ccc" />
          </TouchableOpacity>

          <View style={doctorScreenStyles.contactRow}>
            <View style={doctorScreenStyles.iconContainer}>
              <Ionicons name="location-outline" size={22} color="#666" />
            </View>
            <View style={doctorScreenStyles.contactInfo}>
              <Text style={doctorScreenStyles.contactLabel}>Indirizzo Studio</Text>
              <Text style={doctorScreenStyles.contactValue}>{doctorInfo.address}</Text>
            </View>
          </View>

          <TouchableOpacity style={doctorScreenStyles.contactRow} onPress={handlePhonePress}>
            <View style={doctorScreenStyles.iconContainer}>
              <Ionicons name="call-outline" size={22} color="#666" />
            </View>
            <View style={doctorScreenStyles.contactInfo}>
              <Text style={doctorScreenStyles.contactLabel}>Telefono Studio</Text>
              <Text style={doctorScreenStyles.contactValue}>{doctorInfo.phone}</Text>
            </View>
            <Ionicons name="chevron-forward" size={16} color="#ccc" />
          </TouchableOpacity> 
        </View>

        <Footer />
      </View>
    </SafeAreaView>
  );
} 