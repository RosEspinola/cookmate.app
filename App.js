import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';

// Import the screens
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import CategoriesScreen from './screens/CategoriesScreen';
import WhatCanIMakeScreen from './screens/WhatCanIMakeScreen';
import RecipeDetails from './screens/RecipeDetails';
import FavoritesScreen from './screens/FavoritesScreen';
import ShoppingListScreen from './screens/ShoppingListScreen';
import ProfileScreen from './screens/ProfileScreen';

// Import the bottom navigation
import BottomTab from './components/BottomTab';

export default function App() {

  // This keeps track of what screen is currently open
  const [screen, setScreen] = useState('Home');

  // This stores the recipe that the user selected
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  // This function opens the selected recipe
  const openRecipe = (recipe) => {

    // Save the recipe that was selected
    setSelectedRecipe(recipe);

    // Go to the Recipe Details screen
    setScreen('RecipeDetails');
  };

  // This will hold the screen that we want to show
  let currentScreen;

  // If the screen is Home, show HomeScreen
  if (screen === 'Home') {
    currentScreen = (
      <HomeScreen
        setScreen={setScreen}
        openRecipe={openRecipe}
      />
    );
  }

  // If the screen is Search, show SearchScreen
  if (screen === 'Search') {
    currentScreen = (
      <SearchScreen
        openRecipe={openRecipe}
      />
    );
  }

  // If the screen is Categories, show CategoriesScreen
  if (screen === 'Categories') {
    currentScreen = (
      <CategoriesScreen
        openRecipe={openRecipe}
      />
    );
  }

  // If the screen is WhatCanIMake, show WhatCanIMakeScreen
  if (screen === 'WhatCanIMake') {
    currentScreen = (
      <WhatCanIMakeScreen
        openRecipe={openRecipe}
      />
    );
  }

  // If the screen is RecipeDetails, show RecipeDetails
  if (screen === 'RecipeDetails') {
    currentScreen = (
      <RecipeDetails
        recipe={selectedRecipe}
        setScreen={setScreen}
      />
    );
  }

  // If the screen is Favorites, show FavoritesScreen
  if (screen === 'Favorites') {
    currentScreen = (
      <FavoritesScreen
        openRecipe={openRecipe}
      />
    );
  }

  // If the screen is ShoppingList, show ShoppingListScreen
  if (screen === 'ShoppingList') {
    currentScreen = <ShoppingListScreen />;
  }

  // If the screen is Profile, show ProfileScreen
  if (screen === 'Profile') {
    currentScreen = (
      <ProfileScreen
        setScreen={setScreen}
      />
    );
  }

  return (
    // SafeAreaView keeps the app content inside the safe area
    <SafeAreaView style={{ flex: 1 }}>

      {/* Show the current screen */}
      {currentScreen}

      {/* Show the bottom menu except on Recipe Details */}
      {screen !== 'RecipeDetails' && (
        <BottomTab
          screen={screen}
          setScreen={setScreen}
        />
      )}

    </SafeAreaView>
  );
}