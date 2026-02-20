import React from 'react';
import { 
  View, 
  ScrollView, 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { commonStyles } from '../../../styles/CommonStyles';
import { StatusBar } from 'expo-status-bar';
import Navbar from '../../../components/nav/Navbar';
import Footer from '../../../components/Footer';
import NoteCard from '../../../components/notes/cards/NoteCard';

export default function NoteDetailScreen() {
    const note_details = {
        id: 1,
        fullDate: 'Lunedì, 14 Ottobre 2023',
        time: '18:30',
        patientNote: {
            text: "Oggi mi sento molto meglio rispetto a ieri. Ho fatto una passeggiata al parco e il sole mi ha aiutato a schiarirmi le idee. L'ansia era presente stamattina, ma l'ho gestita con gli esercizi di respirazione.",
            moodIcon: 'sunny-outline' 
        },

        aiInsight: {
            hasInsight: true,
            text: "È fantastico notare come l'esposizione alla natura e l'uso attivo delle tecniche di respirazione abbiano avuto un impatto positivo immediato. Hai dimostrato un'ottima capacità di auto-regolazione emotiva.",
        },

        doctorComment: {
            hasComment: true,
            doctorName: 'Dott. G. Veronesi',
            date: '15 Ott, 10:15',
            text: "Ottimo lavoro Mario. L'applicazione degli esercizi di respirazione nel momento del bisogno è un passo fondamentale. Ne parleremo nella prossima seduta.",
        }
    };

    return (
        <SafeAreaView style={commonStyles.safe_container_log} edges={['top']}>
            <Navbar/>
            <View style={commonStyles.container_log}>
                <ScrollView 
                style={{ flex: 1 }}
                contentContainerStyle={{ flexGrow: 1}} 
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
                >
                    <View style={[commonStyles.page_left, {paddingHorizontal: 10, paddingVertical: 20}]}>
                        {/* --- PATIENT NOTE --- */}
                        <NoteCard 
                            text={note_details.patientNote.text} 
                            time={note_details.time} 
                            type = 'patient'
                        />

                        {/* --- AI NOTE --- */}
                        {note_details.aiInsight.hasInsight && (
                            <NoteCard 
                                text={note_details.aiInsight.text} 
                                time={note_details.time} 
                                type = 'ai'
                            />
                        )}

                        {/* --- DOCTOR COMMENT --- */}
                        {note_details.doctorComment.hasComment && (
                            <NoteCard 
                                doctorName={note_details.doctorComment.doctorName}
                                time={note_details.doctorComment.date}
                                text={note_details.doctorComment.text}
                                type='doctor'
                            />
                        )}
                    </View>
                    <Footer />
                </ScrollView>
            </View>
            <StatusBar style="auto" />
        </SafeAreaView>
     );
}