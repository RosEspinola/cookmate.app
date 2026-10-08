import React from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

// Import colors and common styles
import COLORS from '../styles/appColors';
import styles from '../styles/commonStyles';

export default function ProfileScreen({
  setScreen,
}) {
  return (

    // Allows the user to scroll up and down
    <ScrollView style={styles.container}>

      <View style={styles.content}>

        {/* Display the profile title */}
        <Text style={styles.title}>
          👤 Profile
        </Text>

        {/* Display the username */}
        <Text style={styles.subtitle}>
          CookMate User
        </Text>

        {/* Button that opens the Favorites screen */}
        <TouchableOpacity
          style={styles.card}
          onPress={() => setScreen('Favorites')}
        >
          <Text>❤️ My Favorites</Text>
        </TouchableOpacity>

        {/* Button that opens the Shopping List screen */}
        <TouchableOpacity
          style={styles.card}
          onPress={() => setScreen('ShoppingList')}
        >
          <Text>🛒 My Shopping List</Text>
        </TouchableOpacity>

        {/* Recently Viewed button */}
        <TouchableOpacity style={styles.card}>
          <Text>🕐 Recently Viewed</Text>
        </TouchableOpacity>

        {/* Settings button */}
        <TouchableOpacity style={styles.card}>
          <Text>⚙️ Settings</Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
}