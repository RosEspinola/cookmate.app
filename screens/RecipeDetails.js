import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

// Import the component for showing missing ingredients
import IngredientItem from '../components/IngredientItem';

// Import colors and common styles
import COLORS from '../styles/appColors';
import styles from '../styles/commonStyles';

export default function RecipeDetails({
  recipe,
  setScreen,
}) {

  // Stores the ingredients that the user already has
  const [haveIngredients, setHaveIngredients] = useState([]);

  // If no recipe is selected, show this message
  if (!recipe) {
    return (
      <View style={styles.container}>
        <Text>No recipe selected.</Text>
      </View>
    );
  }

  // This function adds or removes an ingredient
  const changeIngredient = (ingredient) => {

    // Check if the ingredient is already in the list
    if (haveIngredients.includes(ingredient)) {

      // Remove the ingredient from the list
      setHaveIngredients(
        haveIngredients.filter(
          // Keep only items that are different
          // from the selected ingredient
          (item) => item !== ingredient
        )
      );

    } else {

      // Add the ingredient to the list
      setHaveIngredients([
        ...haveIngredients,
        ingredient,
      ]);
    }
  };

  // Get the ingredients that the user does not have
  const missingIngredients =
    recipe.ingredients.filter(
      (ingredient) =>
        !haveIngredients.includes(ingredient)
    );

  return (

    // Allows the user to scroll through the recipe
    <ScrollView style={styles.container}>

      <View style={styles.content}>

        {/* Button to go back to the Home screen */}
        <TouchableOpacity
          onPress={() => setScreen('Home')}
        >
          <Text
            style={{
              color: COLORS.red,
              fontWeight: 'bold',
              marginBottom: 20,
            }}
          >
            ← Back
          </Text>
        </TouchableOpacity>

        {/* Display the recipe name */}
        <Text style={styles.title}>
          {recipe.name}
        </Text>

        {/* Display the recipe category */}
        <Text style={styles.subtitle}>
          {recipe.category}
        </Text>

        {/* Display the cooking time */}
        <Text style={{ marginBottom: 5 }}>
          Cooking Time: {recipe.time}
        </Text>

        {/* Display the recipe difficulty */}
        <Text style={{ marginBottom: 20 }}>
          Difficulty: {recipe.difficulty}
        </Text>

        {/* Ingredients section title */}
        <Text
          style={{
            fontSize: 21,
            fontWeight: 'bold',
            color: COLORS.darkRed,
            marginBottom: 10,
          }}
        >
          Ingredients
        </Text>

        {/* Display all ingredients */}
        {recipe.ingredients.map((ingredient) => (
          <TouchableOpacity
            key={ingredient}
            onPress={() =>
              changeIngredient(ingredient)
            }
          >
            <Text
              style={{
                fontSize: 16,
                marginBottom: 8,
              }}
            >

              {/* Show check if the user has the ingredient */}
              {haveIngredients.includes(ingredient)
                ? '✅'
                : '❌'}{' '}

              {/* Display the ingredient name */}
              {ingredient}

            </Text>
          </TouchableOpacity>
        ))}

        {/* Show the ingredients that are still needed */}
        <Text
          style={{
            fontSize: 21,
            fontWeight: 'bold',
            color: COLORS.darkRed,
            marginTop: 20,
            marginBottom: 10,
          }}
        >
          You Still Need
        </Text>

        {/* Display each missing ingredient */}
        {missingIngredients.map((ingredient) => (
          <IngredientItem
            key={ingredient}
            ingredient={ingredient}
          />
        ))}

        {/* Button to open the Shopping List */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => setScreen('ShoppingList')}
        >
          <Text style={styles.buttonText}>
            🛒 Add to Shopping List
          </Text>
        </TouchableOpacity>

        {/* Button to open Favorites */}
        <TouchableOpacity
          style={[
            styles.button,
            {
              backgroundColor: COLORS.darkRed,
            },
          ]}
          onPress={() => setScreen('Favorites')}
        >
          <Text style={styles.buttonText}>
            ❤️ Add to Favorites
          </Text>
        </TouchableOpacity>

        {/* Instructions section title */}
        <Text
          style={{
            fontSize: 21,
            fontWeight: 'bold',
            color: COLORS.darkRed,
            marginTop: 25,
            marginBottom: 10,
          }}
        >
          Instructions
        </Text>

        {/* Display all cooking instructions */}
        {recipe.instructions.map(
          (instruction, index) => (
            <Text
              key={index}
              style={{
                fontSize: 16,
                lineHeight: 25,
                marginBottom: 8,
              }}
            >
              {/* Show the instruction number */}
              {index + 1}. {instruction}
            </Text>
          )
        )}
        
      </View>
    </ScrollView>
  );
}