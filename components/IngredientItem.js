// Import React to create the component.
import React from 'react';

// Import View for layout and Text for displaying text.
import { View, Text } from 'react-native';

// Import the colors used in the app.
import COLORS from '../styles/appColors';

// IngredientItem displays one ingredient in the recipe.
export default function IngredientItem({ ingredient }) {
  return (

    // View holds the bullet and the ingredient name.
    <View
      style={{
        // Place the bullet and ingredient side by side.
        flexDirection: 'row',

        // Add space below each ingredient.
        marginBottom: 8,
      }}
    >

      {/* Display a bullet before the ingredient. */}
      <Text
        style={{
          // Make the bullet red.
          color: COLORS.red,

          // Set the bullet size.
          fontSize: 18,
        }}
      >
        •
      </Text>

      {/* Display the name of the ingredient. */}
      <Text
        style={{
          // Add space between the bullet and ingredient.
          marginLeft: 8,

          // Set the ingredient text size.
          fontSize: 16,
        }}
      >
        {ingredient}
      </Text>

    </View>
  );
}