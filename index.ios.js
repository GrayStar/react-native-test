// React Native Imports
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';

// Screen Imports
import { MainScreen } from './screens/main.js'
import { SecondaryScreen } from './screens/secondary.js'
import { TertiaryScreen } from './screens/tertiary.js'

// Router
const AwesomeProject = StackNavigator({
    Main: { screen: MainScreen },
    Secondary: { screen: SecondaryScreen },
    Tertiary: { screen: TertiaryScreen }
});

// Register App
AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);