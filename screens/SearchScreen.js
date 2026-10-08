import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
} from 'react-native';

// Get the list of recipes
import recipeData from '../data/recipeData';

// Import the component used to display each recipe
import RecipeItem from '../components/RecipeItem';

// Import colors and common styles
import COLORS from '../styles/appColors';
import styles from '../styles/commonStyles';

export default function SearchScreen({ openRecipe }) {

  // Stores what the user types in the search box
  const [search, setSearch] = useState('');

  // Find recipes that match the user's search
  const results = recipeData.filter((recipe) => {

    // Convert the recipe name to lowercase
    const name = recipe.name.toLowerCase();

    // Combine all ingredients into one text and make it lowercase
    const ingredients =
      recipe.ingredients.join(' ').toLowerCase();

    // Convert the user's search text to lowercase
    const word = search.toLowerCase();

    // Check if the search matches the recipe name
    // or any of the ingredients
    return (
      name.includes(word) ||
      ingredients.includes(word)
    );
  });

  return (

    // Main container
    <View style={styles.container}>

      {/* Allows the page to scroll */}
      <ScrollView>

        <View style={styles.content}>

          {/* Display the Search title */}
          <Text style={styles.title}>
            Search
          </Text>

          {/* Search box */}
          <TextInput
            placeholder="Search recipe or ingredient"

            // Shows the current search text
            value={search}

            // Updates the search text when the user types
            onChangeText={setSearch}

            // Style of the search box
            style={{
              backgroundColor: COLORS.white,
              padding: 15,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: COLORS.lightGray,
              marginBottom: 20,
            }}
          />

          {/* Display the recipes that match the search */}
          {results.map((recipe) => (
            <RecipeItem

              // Gives each recipe a unique key
              key={recipe.id}

              // Sends the recipe information
              recipe={recipe}

              // Opens the recipe details
              openRecipe={openRecipe}
            />
          ))}

        </View>
      </ScrollView>
    </View>
  );
}