import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

// Import colors and common styles
import COLORS from '../styles/appColors';
import styles from '../styles/commonStyles';

export default function ShoppingListScreen() {

  // Stores the item currently typed by the user
  const [item, setItem] = useState('');

  // Stores all items in the shopping list
  const [shoppingList, setShoppingList] = useState([
    'Soy Sauce',
    'Vinegar',
  ]);

  // Function for adding a new item
  const addItem = () => {

    // Do nothing if the input is empty
    if (item === '') {
      return;
    }

    // Add the new item to the shopping list
    setShoppingList([
      ...shoppingList,
      item,
    ]);

    // Clear the input box after adding
    setItem('');
  };

  return (

    // Allows the shopping list to scroll
    <ScrollView style={styles.container}>

      <View style={styles.content}>

        {/* Display the page title */}
        <Text style={styles.title}>
          🛒 Shopping List
        </Text>

        {/* Input box for adding an ingredient */}
        <TextInput
          placeholder="Add ingredient"

          // Shows the current item
          value={item}

          // Updates the item when the user types
          onChangeText={setItem}

          // Style of the input box
          style={{
            backgroundColor: COLORS.white,
            padding: 15,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: COLORS.lightGray,
          }}
        />

        {/* Button for adding the item */}
        <TouchableOpacity
          style={styles.button}
          onPress={addItem}
        >
          <Text style={styles.buttonText}>
            Add Item
          </Text>
        </TouchableOpacity>

        {/* Display all items in the shopping list */}
        {shoppingList.map((ingredient, index) => (

          <View
            // Gives each item a unique key
            key={index}

            // Style of the shopping list item
            style={styles.card}
          >
            <Text>
              ☐ {ingredient}
            </Text>
          </View>

        ))}

      </View>
    </ScrollView>
  );
}