// Import React to create the component.
import React from 'react';

// Import components used to create the recipe item.
import { TouchableOpacity, Text } from 'react-native';

// Import the colors used in the app.
import COLORS from '../styles/appColors';

// Import the common styles used by the app.
import styles from '../styles/commonStyles';

// RecipeItem displays one recipe as a clickable card.
export default function RecipeItem({ recipe, openRecipe }) {
  return (

    // TouchableOpacity makes the recipe card clickable.
    <TouchableOpacity

      // Use the card style from commonStyles.
      style={styles.card}

      // When the card is pressed, send the selected recipe
      // to the openRecipe function.
      onPress={() => openRecipe(recipe)}
    >

      {/* Display the name of the recipe. */}
      <Text
        style={{
          // Set the recipe name size.
          fontSize: 19,

          // Make the recipe name bold.
          fontWeight: 'bold',

          // Use the dark red color.
          color: COLORS.darkRed,
        }}
      >
        {recipe.name}
      </Text>


      {/* Display the category of the recipe. */}
      <Text
        style={{
          // Use gray for the category text.
          color: COLORS.gray,

          // Add a small space above the category.
          marginTop: 5,
        }}
      >
        {recipe.category}
      </Text>


      {/* Display the cooking time and difficulty. */}
      <Text style={{ marginTop: 5 }}>
        {recipe.time} • {recipe.difficulty}
      </Text>

    </TouchableOpacity>
  );
}