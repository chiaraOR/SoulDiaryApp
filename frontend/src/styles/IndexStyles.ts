import { StyleSheet } from 'react-native';

export const Colors = {
  primary: '#008CE3',
  background: '#F0F8FF',
  lightBlue: '#D6E4FF',
  textDark: '#102A43',
  textGray: '#627D98',
  white: '#FFFFFF',
  border: '#BCCCDC',
  connectBlue: '#00285f',
};

export const indexStyles = StyleSheet.create({
  // CONTENITORE PRINCIPALE
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    // Rimosso 'justifyContent: space-between' perché usiamo flex:1 sul figlio
    paddingHorizontal: 24,
    paddingTop: 60, // Spazio di sicurezza in alto
    paddingBottom: 40, // Spazio di sicurezza in basso
  },

  // PARTE CENTRALE (Loghi + Testi + Pulsanti)
  contentContainer: {
    flex: 1, // <--- FONDAMENTALE: Occupa tutto lo spazio verticale disponibile
    justifyContent: 'center', // <--- FONDAMENTALE: Centra il contenuto verticalmente
    alignItems: 'center',
    width: '100%',
  },

  // --- LOGO BOX AZZURRO ---
  logoContainer: {
    width: 120,
    height: 120,
    backgroundColor: Colors.primary,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  
  logoImage: {
    width: 90, 
    height: 90,
  },

  // --- TITOLO SOULDIARY ---
  appTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.textDark,
    textAlign: 'center',
    marginBottom: 0, 
  },

  // --- SECONDO LOGO (CONNECT) ---
  logoConnect: {
    width: 160,
    height: 50,
    marginTop: 0, 
    marginBottom: 10, 
  },

  // --- TAGLINE ---
  tagline: {
    fontSize: 16,
    color: Colors.textGray,
    marginBottom: 40,
    textAlign: 'center',
    fontWeight: '500',
    lineHeight: 24,
  },

  // --- PULSANTI ---
  buttonsContainer: {
    width: '100%',
    gap: 16,
  },

  // --- FOOTER (DISCLAIMER) ---
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Centra il blocco footer orizzontalmente
    marginTop: 20, // Un po' di aria dal contenuto se lo schermo è piccolo
  },
  
  footerText: {
    fontSize: 12,
    color: Colors.textGray,
    textAlign: 'center',
  },
});