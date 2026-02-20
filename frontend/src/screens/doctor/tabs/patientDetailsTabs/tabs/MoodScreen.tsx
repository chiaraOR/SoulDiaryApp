// TODO : RIVEDI DA CAPO
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { commonStyles } from '../../../../../styles/CommonStyles';
import { Colors } from '../../../../../constants/Colors';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import Footer from '../../../../../components/Footer';

export default function MoodScreen() {
  const stats = {
    totalNotes: 24,
    averageScore: '2.8/4',
    topEmotion: 'Frustrazione',
    topEmotionCount: '12',
    isCritical: true 
  };

  const chartData = [
    { day: 'Lun', val: 3, color: '#4FC3F7' }, 
    { day: 'Mar', val: 2, color: '#FFB74D' }, 
    { day: 'Mer', val: 1, color: '#EF5350' }, 
    { day: 'Gio', val: 2, color: '#FFB74D' }, 
    { day: 'Ven', val: 3, color: '#4FC3F7' }, 
    { day: 'Sab', val: 4, color: '#66BB6A' }, 
    { day: 'Dom', val: 4, color: '#66BB6A' }, 
  ];

  const legend = [
    { label: 'Positive', color: '#66BB6A', value: '4' },
    { label: 'Neutre', color: '#4FC3F7', value: '3' },
    { label: 'Ansiose', color: '#FFB74D', value: '2' },
    { label: 'Negative', color: '#EF5350', value: '1' },
  ];

  return (
    <ScrollView 
      style={{ flex: 1, backgroundColor: Colors.white }}
      contentContainerStyle={{ flexGrow: 1 }} 
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
    >
      <View style={[commonStyles.page_left, { marginTop: 20 }]}>
        
        {/* --- SEZIONE STATISTICHE (Ridisegnata) --- */}
        <View style={styles.sectionHeader}>
          <Ionicons name="stats-chart" size={20} color={Colors.primary} />
          <Text style={styles.sectionTitle}>Statistiche Periodo</Text>
        </View>

        <View style={styles.statsWrapper}>
          
          {/* Riga Note Totali */}
          <View style={styles.statRow}>
            <View style={styles.labelGroup}>
              <Ionicons name="document-text-outline" size={18} color={Colors.grey} />
              <Text style={styles.rowLabel}>Note totali</Text>
            </View>
            <View style={styles.valueBox}>
              <Text style={styles.valueTextMain}>{stats.totalNotes}</Text>
            </View>
          </View>

          {/* Riga Media Emotività */}
          <View style={styles.statRow}>
            <View style={styles.labelGroup}>
              <Ionicons name="analytics-outline" size={18} color={Colors.grey} />
              <Text style={styles.rowLabel}>Media emotività</Text>
            </View>
            <View style={styles.valueBox}>
              <Text style={styles.valueTextScore}>{stats.averageScore}</Text>
            </View>
          </View>

          {/* Riga Emozione Prevalente */}
          <View style={styles.statRow}>
            <View style={styles.labelGroup}>
              <Ionicons name="trending-down-outline" size={18} color={Colors.grey} />
              <Text style={styles.rowLabel}>Emozione prevalente</Text>
            </View>
            <View style={[styles.valueBox, { minWidth: 140 }]}>
              <Text style={styles.valueTextEmotion}>
                {stats.topEmotion} <Text style={styles.countText}>({stats.topEmotionCount}x)</Text>
              </Text>
            </View>
          </View>

        </View>

        {/* --- NOTA STATO CRITICO --- */}
        {stats.isCritical && (
          <View style={styles.criticalCard}>
            <View style={styles.criticalHeader}>
              <MaterialCommunityIcons name="alert-decagram" size={20} color="#D32F2F" />
              <Text style={styles.criticalTitle}>Rilevato Stato Critico</Text>
            </View>
            <Text style={styles.criticalBody}>
              Il periodo selezionato mostra una flessione marcata. Si consiglia un colloquio di approfondimento immediato.
            </Text>
          </View>
        )}

        {/* --- GRAFICO --- */}
        <View style={[styles.sectionHeader, { marginTop: 30 }]}>
          <MaterialCommunityIcons name="chart-bell-curve-cumulative" size={22} color={Colors.primary} />
          <Text style={styles.sectionTitle}>Andamento Emotivo</Text>
        </View>

        <View style={styles.chartContainer}>
          <View style={styles.chartBars}>
            {chartData.map((item, index) => (
              <View key={index} style={styles.barColumn}>
                <View 
                  style={[
                    styles.barFill, 
                    { height: item.val * 25, backgroundColor: item.color }
                  ]} 
                />
                <Text style={styles.barDay}>{item.day}</Text>
              </View>
            ))}
          </View>
          
          <View style={styles.legendWrapper}>
            <View style={styles.legendGrid}>
              {legend.map((item, index) => (
                <View key={index} style={styles.legendItem}>
                  <View style={[styles.dot, { backgroundColor: item.color }]} />
                  <Text style={styles.legendLabel}>
                    <Text style={{fontWeight: '800'}}>{item.value}</Text> {item.label}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </View>

      </View>
      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    gap: 10,
  },
  sectionTitle: {
    fontSize: 19,
    fontWeight: '800',
    color: Colors.textDark,
    letterSpacing: -0.5,
  },
  // --- Nuove Statistiche ---
  statsWrapper: {
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: Colors.borderInput,
    marginBottom: 16,
  },
  statRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F2F5',
  },
  labelGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  rowLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: '#666',
  },
  valueBox: {
    backgroundColor: '#F8F9FA',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E9ECEF',
    alignItems: 'center',
    minWidth: 60,
  },
  valueTextMain: {
    fontSize: 18,
    fontWeight: '800',
    color: Colors.primary,
  },
  valueTextScore: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.textDark,
  },
  valueTextEmotion: {
    fontSize: 14,
    fontWeight: '700',
    color: '#D32F2F', // Un colore che attira l'attenzione se negativo
  },
  countText: {
    fontSize: 12,
    color: '#999',
    fontWeight: '400',
  },
  // --- Nota Critica ---
  criticalCard: {
    backgroundColor: '#FFF5F5',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#FFE3E3',
  },
  criticalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 6,
  },
  criticalTitle: {
    color: '#C62828',
    fontWeight: '800',
    fontSize: 15,
  },
  criticalBody: {
    color: '#555',
    fontSize: 13,
    lineHeight: 19,
  },
  // --- Grafico ---
  chartContainer: {
    backgroundColor: Colors.white,
    borderRadius: 24,
    padding: 24,
    borderWidth: 1,
    borderColor: Colors.borderInput,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
    marginBottom: 20,
  },
  chartBars: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: 120,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F3F5',
    paddingBottom: 8,
  },
  barColumn: {
    alignItems: 'center',
    width: '12%',
  },
  barFill: {
    width: '100%',
    borderRadius: 5,
    minHeight: 8,
  },
  barDay: {
    fontSize: 11,
    color: '#999',
    marginTop: 8,
    fontWeight: '700',
  },
  legendWrapper: {
    marginTop: 20,
    paddingTop: 15,
  },
  legendGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '46%',
    marginBottom: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 8,
  },
  legendLabel: {
    fontSize: 12,
    color: '#666',
  }
});