import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
} from 'react-native';

// Get the list of categories
import categoryData from '../data/categoryData';

// Get the list of recipes
import recipeData from '../data/recipeData';

// Import the category and recipe components
import CategoryItem from '../components/CategoryItem';
import RecipeItem from '../components/RecipeItem';

// Import the common styles
import styles from '../styles/commonStyles';

export default function CategoriesScreen({ openRecipe }) {

  // Stores the category selected by the user
  const [selectedCategory, setSelectedCategory] = useState('');

  // Get recipes that belong to the selected category
  const recipes = recipeData.filter(
    (recipe) =>
      recipe.category === selectedCategory
  );

  return (
    // Allows the user to scroll up and down
    <ScrollView style={styles.container}>

      <View style={styles.content}>

        {/* Display the page title */}
        <Text style={styles.title}>
          Categories
        </Text>

        {/* Show all available categories */}
        {categoryData.map((category) => (
          <CategoryItem
            // Gives each category a unique key
            key={category}

            // Sends the category name to CategoryItem
            category={category}

            // Changes the selected category when clicked
            onPress={setSelectedCategory}
          />
        ))}

        {/* Only show recipes if a category is selected */}
        {selectedCategory !== '' && (
          <>

            {/* Show the name of the selected category */}
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                marginTop: 20,
                marginBottom: 10,
              }}
            >
              {selectedCategory}
            </Text>

            {/* Show recipes that belong to the selected category */}
            {recipes.map((recipe) => (
              <RecipeItem

                // Gives each recipe a unique key
                key={recipe.id}

                // Sends the recipe information
                recipe={recipe}

                // Opens the recipe details when clicked
                openRecipe={openRecipe}
              />
            ))}

          </>
        )}

      </View>
    </ScrollView>
  );
}