// This array stores all the recipe information used in the CookMate app.
const recipeData = [

  // Recipe 1: Chicken Adobo
  {
    id: 1, // Unique ID of the recipe
    name: 'Chicken Adobo', // Name of the recipe
    category: 'Main Dishes', // Recipe category
    meal: 'Lunch', // Suggested meal
    time: '45 minutes', // Estimated cooking time
    difficulty: 'Easy', // Difficulty level

    // List of ingredients needed for the recipe
    ingredients: [
      'Chicken',
      'Soy Sauce',
      'Vinegar',
      'Garlic',
      'Onion',
      'Bay Leaves',
      'Pepper',
    ],

    // Steps for preparing the recipe
    instructions: [
      'Prepare the ingredients.',
      'Marinate the chicken.',
      'Cook the chicken with the sauce.',
      'Simmer until tender.',
      'Serve with rice.',
    ],
  },

  // Recipe 2: Chicken Teriyaki
  {
    id: 2,
    name: 'Chicken Teriyaki',
    category: 'Main Dishes',
    meal: 'Dinner',
    time: '30 minutes',
    difficulty: 'Easy',

    // Ingredients needed for Chicken Teriyaki
    ingredients: [
      'Chicken',
      'Soy Sauce',
      'Garlic',
      'Sugar',
      'Water',
    ],

    // Cooking steps for Chicken Teriyaki
    instructions: [
      'Prepare the chicken.',
      'Cook the chicken until brown.',
      'Add soy sauce and garlic.',
      'Add sugar and water.',
      'Simmer until the sauce becomes thick.',
    ],
  },
 
  // Recipe 3: Chicken Soup
  {
    id: 3,
    name: 'Chicken Soup',
    category: 'Soups',
    meal: 'Dinner',
    time: '40 minutes',
    difficulty: 'Easy',

    // Ingredients needed for Chicken Soup
    ingredients: [
      'Chicken',
      'Garlic',
      'Onion',
      'Water',
      'Pepper',
    ],

    // Cooking steps for Chicken Soup
    instructions: [
      'Prepare the chicken and vegetables.',
      'Cook the garlic and onion.',
      'Add the chicken.',
      'Add water and simmer.',
      'Cook until the chicken is tender.',
    ],
  },

  // Recipe 4: Mango Float
  {
    id: 4,
    name: 'Mango Float',
    category: 'Desserts',
    meal: 'Dessert',
    time: '20 minutes',
    difficulty: 'Easy',

    // Ingredients needed for Mango Float
    ingredients: [
      'Mango',
      'Graham Crackers',
      'Cream',
      'Condensed Milk',
    ],

    // Steps for making Mango Float
    instructions: [
      'Slice the mangoes.',
      'Mix the cream and condensed milk.',
      'Add graham crackers.',
      'Add the cream mixture and mangoes.',
      'Chill before serving.',
    ],
  },

  // Recipe 5: Brownies
  {
    id: 5,
    name: 'Brownies',
    category: 'Desserts',
    meal: 'Dessert',
    time: '35 minutes',
    difficulty: 'Easy',

    // Ingredients needed for Brownies
    ingredients: [
      'Flour',
      'Cocoa Powder',
      'Sugar',
      'Eggs',
      'Butter',
    ],

    // Steps for making Brownies
    instructions: [
      'Mix the flour and cocoa powder.',
      'Add sugar, eggs, and butter.',
      'Mix well.',
      'Place in a baking pan.',
      'Bake until cooked.',
    ],
  },

  // Recipe 6: Pancit
  {
    id: 6,
    name: 'Pancit',
    category: 'Main Dishes',
    meal: 'Lunch',
    time: '35 minutes',
    difficulty: 'Easy',

    // Ingredients needed for Pancit
    ingredients: [
      'Noodles',
      'Chicken',
      'Garlic',
      'Carrot',
      'Cabbage',
      'Soy Sauce',
    ],

    // Cooking steps for Pancit
    instructions: [
      'Cook the garlic and chicken.',
      'Add the vegetables.',
      'Add the noodles.',
      'Add soy sauce.',
      'Mix until everything is cooked.',
    ],
  },
];

// Export the recipeData so other JavaScript files can use it.
export default recipeData;