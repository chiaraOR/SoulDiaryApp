import React, { useState } from 'react';
import { 
  View, 
  ScrollView, 
  TextInput, 
  TouchableOpacity, 
  Text, 
  StyleSheet, 
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { commonStyles } from '../../../../../../styles/CommonStyles';
import { Colors } from '../../../../../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import Navbar from '../../../../../../components/nav/Navbar';
import NoteCard from '../../../../../../components/notes/cards/NoteCard';
import Footer from '../../../../../../components/Footer';
import AuthButton from '../../../../../../components/buttons/AuthButton';

export default function NoteDetailsFormScreen() {
    const [newDoctorComment, setNewDoctorComment] = useState('');

    const note_details = {
        id: 1,
        fullDate: 'Lunedì, 14 Ottobre 2023',
        time: '18:30',
        patientNote: {
            text: "Oggi mi sento molto meglio rispetto a ieri. Ho fatto una passeggiata al parco e il sole mi ha aiutato a schiarirmi le idee. L'ansia era presente stamattina, ma l'ho gestita con gli esercizi di respirazione.",
        },
        aiInsight: {
            hasInsight: true,
            text: "È fantastico notare come l'esposizione alla natura e l'uso attivo delle tecniche di respirazione abbiano avuto un impatto positivo immediato.",
        },
        clinicalAnalysis: {
            hasAnalysis: true,
            result: "Frequenza cardiaca: 72 BPM",
            text: "I parametri rilevati durante la passeggiata mostrano una stabilizzazione del ritmo cardiaco.",
            date: '14 Ott, 18:45',
        },
        previousDoctorComment: {
            hasComment: true,
            doctorName: 'Dott. G. Veronesi',
            date: '15 Ott, 10:15',
            text: "Ottimo lavoro Mario. L'applicazione degli esercizi di respirazione nel momento del bisogno è un passo fondamentale. Ne parleremo nella prossima seduta.",
        }
    };

    const handleSaveComment = () => {
        console.log("Nuovo commento salvato:", newDoctorComment);
    };

    return (
        <SafeAreaView style={commonStyles.safe_container_log} edges={['top', 'bottom']}>
            <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
            >
                <Navbar/>
                <View style={commonStyles.container_log}>
                    <ScrollView 
                        style={{ flex: 1 }}
                        contentContainerStyle={{ flexGrow: 1}} 
                        keyboardShouldPersistTaps="handled"
                        showsVerticalScrollIndicator={false}
                    >
                        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                            <View style={[commonStyles.page_left, {paddingHorizontal: 15, paddingVertical: 20}]}>
                            
                                {/* --- PATIENT --- */}
                                <NoteCard 
                                    text={note_details.patientNote.text} 
                                    time={note_details.time} 
                                    type='patient'
                                />

                                {/* --- AI --- */}
                                {note_details.aiInsight.hasInsight && (
                                    <NoteCard 
                                        text={note_details.aiInsight.text} 
                                        time={note_details.time} 
                                        type='ai'
                                    />
                                )}

                                {/* --- CLINICAL --- */}
                                {note_details.clinicalAnalysis.hasAnalysis && (
                                    <NoteCard 
                                        text={note_details.clinicalAnalysis.text} 
                                        time={note_details.clinicalAnalysis.date}
                                        result={note_details.clinicalAnalysis.result}
                                        type='clinical_analysis'
                                    />
                                )}

                                {/* --- DOCTOR --- */}
                                {note_details.previousDoctorComment.hasComment && (
                                    <NoteCard 
                                        doctorName={note_details.previousDoctorComment.doctorName}
                                        time={note_details.previousDoctorComment.date}
                                        text={note_details.previousDoctorComment.text}
                                        type='doctor'
                                    />
                                )}

                                {/* --- INPUT DOCTOR --- */}
                                <View style={{width:'100%'}}>
                                    <View style={styles.inputHeader}>
                                        <Ionicons name="add-circle-outline" size={20} color={Colors.green} />
                                        <Text style={styles.inputTitle}>Aggiungi una nota clinica</Text>
                                    </View>

                                    <TextInput
                                        style={commonStyles.inputTextArea}
                                        placeholder="Inserisci un nuovo aggiornamento per il paziente..."
                                        placeholderTextColor={Colors.placeholderInput}
                                        multiline={true}
                                        numberOfLines={4}
                                        textAlignVertical="top"
                                        value={newDoctorComment}
                                        onChangeText={setNewDoctorComment}
                                    />
                                    
                                    <AuthButton
                                        title='Pubblica'
                                        onPress={()=>{}}
                                        variant='primary'
                                        iconName='checkmark'
                                    />
                                </View>

                            </View>
                        </TouchableWithoutFeedback>
                        <Footer />
                    </ScrollView>
                </View>      
            </KeyboardAvoidingView>
            <StatusBar style="auto" />
        </SafeAreaView>
     );
}

const styles = StyleSheet.create({
    inputHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    inputTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.textDark,
        marginLeft: 8,
    }
});