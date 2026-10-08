// Import React to create the component.
import React from 'react';

// Import components used to create the category button.
import { TouchableOpacity, Text } from 'react-native';

// Import the colors used in the app.
import COLORS from '../styles/appColors';

// CategoryItem displays one category as a clickable button.
export default function CategoryItem({ category, onPress }) {
  return (

    // TouchableOpacity makes the category clickable.
    <TouchableOpacity

      // When the button is pressed, send the category
      // back to the function from the parent component.
      onPress={() => onPress(category)}

      style={{
        // Set the background color of the button.
        backgroundColor: COLORS.red,

        // Add space inside the button.
        padding: 15,

        // Make the corners rounded.
        borderRadius: 10,

        // Add space below each category.
        marginBottom: 10,
      }}
    >

      {/* Display the category name. */}
      <Text
        style={{
          // Make the text white.
          color: COLORS.white,

          // Set the text size.
          fontSize: 16,

          // Make the text bold.
          fontWeight: 'bold',
        }}
      >
        {category}
      </Text>

    </TouchableOpacity>
  );
}