/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {
              HomeScreen: 'Home',
            },
          },
          Fridge: {
            screens: {
              FridgeScreen: 'Fridge',
            },
          },
          Menu: {
            screens: {
              MenuScreen: 'Menu',
            },
          },
          Setting: {
            screens: {
              SettingScreen: 'Setting',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
