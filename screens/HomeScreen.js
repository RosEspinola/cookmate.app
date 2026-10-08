import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

// Get the list of recipes
import recipeData from '../data/recipeData';

// Import the component used to display recipes
import RecipeItem from '../components/RecipeItem';

// Import colors and common styles
import COLORS from '../styles/appColors';
import styles from '../styles/commonStyles';

export default function HomeScreen({
  setScreen,
  openRecipe,
}) {
  return (

    // Allows the user to scroll up and down
    <ScrollView style={styles.container}>

      <View style={styles.content}>

        {/* Display the CookMate logo */}
        <Image
          source={require('../assets/cookmate-logo.png')}
          style={{
            width: 90,
            height: 90,
            alignSelf: 'center',
          }}
          resizeMode="contain"
        />

        {/* Display the app name */}
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            textAlign: 'center',
            color: COLORS.darkRed,
          }}
        >
          CookMate
        </Text>

        {/* Display the app tagline */}
        <Text
          style={{
            textAlign: 'center',
            color: COLORS.gray,
            marginTop: 5,
            marginBottom: 25,
          }}
        >
          FIND THE RECIPE. CHECK THE INGREDIENTS. START COOKING.
        </Text>

        {/* Display the main question */}
        <Text style={styles.title}>
          What do you want to cook today?
        </Text>

        {/* Button that opens the Search screen */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => setScreen('Search')}
        >
          <Text style={styles.buttonText}>
            🔍 Search recipes or ingredients
          </Text>
        </TouchableOpacity>

        {/* Display the meal category title */}
        <Text
          style={{
            fontSize: 21,
            fontWeight: 'bold',
            color: COLORS.darkRed,
            marginTop: 25,
            marginBottom: 10,
          }}
        >
          Choose Your Meal
        </Text>

        {/* Breakfast button */}
        <TouchableOpacity
          style={styles.card}
          onPress={() => setScreen('Categories')}
        >
          <Text>🍳 Breakfast</Text>
        </TouchableOpacity>

        {/* Lunch button */}
        <TouchableOpacity
          style={styles.card}
          onPress={() => setScreen('Categories')}
        >
          <Text>🍛 Lunch</Text>
        </TouchableOpacity>

        {/* Dinner button */}
        <TouchableOpacity
          style={styles.card}
          onPress={() => setScreen('Categories')}
        >
          <Text>🍽️ Dinner</Text>
        </TouchableOpacity>

        {/* Dessert button */}
        <TouchableOpacity
          style={styles.card}
          onPress={() => setScreen('Categories')}
        >
          <Text>🍰 Dessert</Text>
        </TouchableOpacity>

        {/* Drinks button */}
        <TouchableOpacity
          style={styles.card}
          onPress={() => setScreen('Categories')}
        >
          <Text>🥤 Drinks</Text>
        </TouchableOpacity>

        {/* Snacks button */}
        <TouchableOpacity
          style={styles.card}
          onPress={() => setScreen('Categories')}
        >
          <Text>🍪 Snacks</Text>
        </TouchableOpacity>

        {/* Display the popular recipes title */}
        <Text
          style={{
            fontSize: 21,
            fontWeight: 'bold',
            color: COLORS.darkRed,
            marginTop: 20,
            marginBottom: 10,
          }}
        >
          Popular Recipes
        </Text>

        {/* Get and display only the first 3 recipes */}
        {recipeData.slice(0, 3).map((recipe) => (
          <RecipeItem
            // Gives each recipe a unique key
            key={recipe.id}

            // Sends the recipe information
            recipe={recipe}

            // Opens the recipe details when clicked
            openRecipe={openRecipe}
          />
        ))}

      </View>
    </ScrollView>
  );
}