// Import StyleSheet from React Native
import { StyleSheet } from 'react-native';

// Import the colors from appColors.js
import COLORS from './appColors';

// Create all the common styles used in the app
const styles = StyleSheet.create({

  // Main container of each screen
  container: {
    flex: 1,
    backgroundColor: COLORS.cream,
  },

  // Controls the spacing inside the screen
  content: {
    padding: 20,
    paddingBottom: 100,
  },

  // Style for the main title
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: COLORS.darkRed,
    marginBottom: 10,
  },

  // Style for smaller text under the title
  subtitle: {
    fontSize: 16,
    color: COLORS.gray,
    marginBottom: 20,
  },

  // Common style for buttons
  button: {
    backgroundColor: COLORS.darkRed,
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },

  // Style for the text inside buttons
  buttonText: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 16,
  },

  // Common style for cards
  card: {
    backgroundColor: COLORS.white,
    padding: 15,
    borderRadius: 10,
    marginBottom: 12,
  },

});

// Export the styles so other screens can use them
export default styles;