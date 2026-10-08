import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

// Get the list of recipes
import recipeData from '../data/recipeData';

// Import the component used to display recipes
import RecipeItem from '../components/RecipeItem';

// Import colors and common styles
import COLORS from '../styles/appColors';
import styles from '../styles/commonStyles';

export default function WhatCanIMakeScreen({
  openRecipe,
}) {

  // List of ingredients that the user can choose
  const ingredients = [
    'Chicken',
    'Garlic',
    'Soy Sauce',
    'Onion',
    'Vinegar',
    'Tomato',
  ];

  // Stores the ingredients selected by the user
  const [selected, setSelected] = useState([]);

  // Adds or removes an ingredient from the selected list
  const chooseIngredient = (ingredient) => {

    // Check if the ingredient is already selected
    if (selected.includes(ingredient)) {

      // Remove the ingredient if it is already selected
      setSelected(
        selected.filter(
          (item) => item !== ingredient
        )
      );

    } else {

      // Add the ingredient if it is not selected
      setSelected([
        ...selected,
        ingredient,
      ]);
    }
  };

  // Find recipes that contain all selected ingredients
  const recipes = recipeData.filter((recipe) => {
    return selected.every((item) =>
      recipe.ingredients.includes(item)
    );
  });

  return (

    // Allows the page to scroll
    <ScrollView style={styles.container}>

      <View style={styles.content}>

        {/* Display the page title */}
        <Text style={styles.title}>
          What Can I Make?
        </Text>

        {/* Tell the user what to do */}
        <Text style={styles.subtitle}>
          What ingredients do you have?
        </Text>

        {/* Display all available ingredients */}
        {ingredients.map((ingredient) => (
          <TouchableOpacity
            // Gives each ingredient a unique key
            key={ingredient}

            // Select or remove the ingredient when clicked
            onPress={() =>
              chooseIngredient(ingredient)
            }

            // Change the background when selected
            style={{
              backgroundColor:
                selected.includes(ingredient)
                  ? COLORS.darkRed
                  : COLORS.white,
              padding: 15,
              borderRadius: 10,
              marginBottom: 10,
              borderWidth: 1,
              borderColor: COLORS.lightGray,
            }}
          >
            <Text
              style={{
                // Change text color when selected
                color:
                  selected.includes(ingredient)
                    ? COLORS.white
                    : COLORS.black,
              }}
            >

              {/* Show checked or unchecked box */}
              {selected.includes(ingredient)
                ? '☑ '
                : '☐ '}

              {/* Display the ingredient name */}
              {ingredient}

            </Text>
          </TouchableOpacity>
        ))}

        {/* Display the recipe results title */}
        <Text
          style={{
            fontSize: 21,
            fontWeight: 'bold',
            color: COLORS.darkRed,
            marginTop: 20,
            marginBottom: 10,
          }}
        >
          Recipes You Can Make
        </Text>

        {/* Check if the user selected any ingredients */}
        {selected.length === 0 ? (

          // Show this message if nothing is selected
          <Text>
            Select ingredients to find recipes.
          </Text>

        ) : recipes.length === 0 ? (

          // Show this message if no recipes match
          <Text>
            No recipes found.
          </Text>

        ) : (

          
          // Display the recipes that match the ingredients
          recipes.map((recipe) => (
            <RecipeItem

              // Gives each recipe a unique key
              key={recipe.id}

              // Sends the recipe information
              recipe={recipe}

              // Opens the recipe details
              openRecipe={openRecipe}
            />
          ))
        )}

      </View>
    </ScrollView>
  );
}