import { StyleSheet } from 'react-native';
import { Colors } from './IndexStyles'; // Riutilizziamo i colori per coerenza

export const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: 24,
    justifyContent: 'center', // Centra verticalmente
  },
  
  // --- HEADER (Logo piccolo sopra la card) ---
  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logoSmall: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.textDark,
  },
  headerSubtitle: {
    fontSize: 14,
    color: Colors.textGray,
  },

  // --- CARD BIANCA ---
  card: {
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: 24,
    
    // Ombra morbida come nell'immagine
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  
  welcomeTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.textDark,
    textAlign: 'center',
    marginBottom: 5,
  },
  welcomeSub: {
    fontSize: 14,
    color: Colors.textGray,
    textAlign: 'center',
    marginBottom: 24,
  },

  // --- INPUT FIELDS ---
  inputLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.textDark,
    marginBottom: 8,
    marginTop: 4,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F8FA', // Grigio chiarissimo per lo sfondo dell'input
    borderWidth: 1,
    borderColor: '#E1E8ED',
    borderRadius: 12,
    height: 50,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  input: {
    flex: 1,
    height: '100%',
    color: Colors.textDark,
    fontSize: 16,
  },
  
  // --- LINK REGISTRAZIONE ---
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  registerText: {
    color: Colors.textGray,
    fontSize: 14,
  },
  registerLink: {
    color: Colors.primary,
    fontWeight: 'bold',
    fontSize: 14,
  },

  // --- FOOTER (Copia di Index) ---
  footer: {
    position: 'absolute',
    bottom: 40,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: Colors.textGray,
    textAlign: 'center',
  },
});