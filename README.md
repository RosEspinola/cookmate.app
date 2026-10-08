#  CookMate – Recipe Finder App

Course: Mobile Programming
Project Type: Mobile Application Prototype
Platform: Android
Framework: React Native with Expo

 Project Note: CookMate is a mobile application prototype developed for our Mobile Programming course. It demonstrates the basic design, features, and functionality of a recipe finder application. This project is created for educational purposes and focuses on frontend development.

> About the Project

CookMate is a mobile recipe finder application designed to help users discover recipes, explore food categories, check ingredients, and manage their favorite recipes.

The app provides a simple and user-friendly interface that allows users to explore different food options and decide what to cook based on available ingredients.

As a prototype, CookMate demonstrates the basic functionality and design of a mobile application without requiring a fully developed backend system.

Features

-Home Screen – Displays popular recipes and food categories.
-Search Recipes – Allows users to search for recipes by name.
-Categories – Organizes recipes into different food categories.
-What Can I Make? – Helps users explore recipes based on available ingredients.
-Recipe Details – Displays recipe information and ingredients.
-Favorites– Allows users to access their favorite recipes.
-Shopping List – Provides a section for managing ingredients needed for cooking.
-Profile – Provides a profile screen.
-Bottom Navigation – Allows users to move between the main sections of the application.

> Technologies Used
-React Native– For building the mobile application interface.
-JavaScript – For implementing application logic and functionality.
-Expo – For developing and running the React Native application.
-React Hooks – Uses `useState` to manage component state.
-StyleSheet – For styling and designing the application interface.
-Visual Studio Code – For writing and managing the source code.

>Design

CookMate uses a simple cooking-themed design with cream, red, and dark red colors.

Color Palette:

- Cream: `#F8F4EE`
- Red: `#A80F12`
- Dark Red: `#7E0B0E`

Tagline:

Find the Recipe. Check the Ingredients. Start Cooking.

How the App Works

CookMate uses JavaScript to manage recipe information and user interactions.
-Search Logic: Uses `useState` to store the search input and `filter()` to find recipes that match the user's search.
-Recipe Display: Uses `map()` to display recipe items from the recipe data.
-Categories: Organizes recipes according to their category.
-Favorites: Uses state to manage selected favorite recipes.
-Ingredient Selection: Uses ingredient information to help users explore possible recipes.
-Screen Navigation: Allows users to switch between different sections of the application.

The recipe information is managed through JavaScript data files, while the screens and reusable components organize the user interface.

>📂 Project Structure

```text
CookMate/
├── assets/
│   └── cookmate-logo.png
├── components/
│   ├── BottomTab.js
│   ├── CategoryItem.js
│   ├── IngredientItem.js
│   └── RecipeItem.js
├── data/
│   ├── categoryData.js
│   └── recipeData.js
├── screens/
│   ├── HomeScreen.js
│   ├── SearchScreen.js
│   ├── CategoriesScreen.js
│   ├── WhatCanIMakeScreen.js
│   ├── RecipeDetails.js
│   ├── FavoritesScreen.js
│   ├── ShoppingListScreen.js
│   └── ProfileScreen.js
├── styles/
│   ├── appColors.js
│   └── commonStyles.js
├── App.js
├── package.json
└── README.md
```

Note: The structure above is a guide. Please ensure that the filenames and folders match your actual CookMate project.

Installation and Setup

 Prerequisites

Before running CookMate, make sure you have installed:

- Node.js
- npm
- Visual Studio Code (recommended)
- Expo Go or an Android emulator

> Steps to Run the Application

1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

2. Open the project folder

```bash
cd CookMate
```

3. Install the dependencies

```bash
npm install
```

4. Start the Expo development server

```bash
npx expo start
```

5. Run the application

Scan the QR code using Expo Go or open the application in a compatible Android emulator.

> Project Objectives
- To develop a simple mobile application using React Native and Expo.
- To practice JavaScript programming and application logic.
- To understand state management using React Hooks.
- To apply array methods such as `filter()` and `map()`.
- To create reusable components and organized screen layouts.
- To improve skills in mobile application design and development.

 Limitations

CookMate is currently a prototype developed for educational purposes.

- Recipe data is managed locally within the application.
- A backend database is not included in the current prototype.
- Features that depend on permanent storage or online services may not be available.
- Some features may be limited to frontend interactions.

 > Future Improvements

In the future, CookMate may be improved by adding:

- A database for storing recipe information.
- User registration and login.
- Permanent storage for favorite recipes and shopping lists.
- More recipes, ingredients, and cooking instructions.
- Improved ingredient-based recipe recommendations.
- Additional user interface improvements.

> Project Information

Project Name:CookMate
Course: Mobile Programming
Project Type: Mobile Application Prototype
Development Tools: React Native, JavaScript, Expo, and Visual Studio Code

License

This project was developed for educational purposes as part of our Mobile Programming course.
