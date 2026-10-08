// Import React so we can create a React component.
import React from 'react';

// Import components used to create the bottom navigation.
import { View, TouchableOpacity, Text } from 'react-native';

// Import the colors used in the app.
import COLORS from '../styles/appColors';

// BottomTab is a component for the navigation buttons at the bottom.
export default function BottomTab({ screen, setScreen }) {
  return (
    // View contains all the navigation buttons.
    <View
      style={{
        // Arrange the buttons from left to right.
        flexDirection: 'row',

        // Set the background color of the bottom tab.
        backgroundColor: COLORS.white,

        // Add a line at the top of the navigation.
        borderTopWidth: 1,
        borderTopColor: COLORS.lightGray,

        // Add space above and below the buttons.
        paddingVertical: 10,
      }}
    >

      {/* Home button */}
      <TouchableOpacity
        style={{
          // Make the button take equal space.
          flex: 1,

          // Center the text.
          alignItems: 'center',
        }}

        // Change the current screen to Home when pressed.
        onPress={() => setScreen('Home')}
      >
        <Text
          style={{
            // Red if Home is currently selected,
            // gray if another screen is selected.
            color: screen === 'Home'
              ? COLORS.red
              : COLORS.gray,
          }}
        >
          Home
        </Text>
      </TouchableOpacity>


      {/* Search button */}
      <TouchableOpacity
        style={{
          flex: 1,
          alignItems: 'center',
        }}

        // Change the current screen to Search when pressed.
        onPress={() => setScreen('Search')}
      >
        <Text
          style={{
            // Red when Search is active, otherwise gray.
            color: screen === 'Search'
              ? COLORS.red
              : COLORS.gray,
          }}
        >
          Search
        </Text>
      </TouchableOpacity>


      {/* Make button */}
      <TouchableOpacity
        style={{
          flex: 1,
          alignItems: 'center',
        }}

        // Change the current screen to WhatCanIMake when pressed.
        onPress={() => setScreen('WhatCanIMake')}
      >
        <Text
          style={{
            // Red when Make is active, otherwise gray.
            color: screen === 'WhatCanIMake'
              ? COLORS.red
              : COLORS.gray,
          }}
        >
          Make
        </Text>
      </TouchableOpacity>


      {/* Favorites button */}
      <TouchableOpacity
        style={{
          flex: 1,
          alignItems: 'center',
        }}

        // Change the current screen to Favorites when pressed.
        onPress={() => setScreen('Favorites')}
      >
        <Text
          style={{
            // Red when Favorites is active, otherwise gray.
            color: screen === 'Favorites'
              ? COLORS.red
              : COLORS.gray,
          }}
        >
          Favorites
        </Text>
      </TouchableOpacity>


      {/* Profile button */}
      <TouchableOpacity
        style={{
          flex: 1,
          alignItems: 'center',
        }}

        // Change the current screen to Profile when pressed.
        onPress={() => setScreen('Profile')}
      >
        <Text
          style={{
            // Red when Profile is active, otherwise gray.
            color: screen === 'Profile'
              ? COLORS.red
              : COLORS.gray,
          }}
        >
          Profile
        </Text>
      </TouchableOpacity>

    </View>
  );
}