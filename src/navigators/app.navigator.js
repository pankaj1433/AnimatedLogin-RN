import React from 'react';
import { createDrawerNavigator } from 'react-navigation';
import { View, Text } from 'react-native';

import HomeScreen from '../screens/home';
import Profile from '../screens/profile';

export default createDrawerNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            title: 'Home',
            headerTitle: 'Home'
        }
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            title: 'Profile',
            headerTitle: 'Profile'
        }
    },
}, {});