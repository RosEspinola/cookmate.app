import React from 'react';
import {
  ScrollView,
  View,
  Text,
} from 'react-native';

// Get the list of recipes
import recipeData from '../data/recipeData';

// Import the component used to display each recipe
import RecipeItem from '../components/RecipeItem';

// Import the common styles
import styles from '../styles/commonStyles';

export default function FavoritesScreen({
  openRecipe,
}) {

  // Get the recipes that are marked as favorites
  const favorites = recipeData.filter(
    (recipe) =>
      recipe.id === 1 ||
      recipe.id === 4 ||
      recipe.id === 5 ||
      recipe.id === 6
  );

  return (
    // Allows the user to scroll through the favorites
    <ScrollView style={styles.container}>

      <View style={styles.content}>

        {/* Display the page title */}
        <Text style={styles.title}>
          ❤️ My Favorites
        </Text>

        {/* Display all favorite recipes */}
        {favorites.map((recipe) => (
          <RecipeItem

            // Gives each recipe a unique key
            key={recipe.id}

            // Sends the recipe information to RecipeItem
            recipe={recipe}

            // Opens the recipe details when the recipe is clicked
            openRecipe={openRecipe}
          />
        ))}

      </View>
    </ScrollView>
  );
}