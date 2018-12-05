import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import LoginScreen from './screens/login';
import AuthNavigator from './navigators/auth.navigator';

class AppEntry extends Component {
    constructor () {
        super();
    }

    render () {
        let { height } = Dimensions.get('window');
        return (
            // <KeyboardAwareScrollView style={{ minHeight: height }} minHeight={ height }>
                <AuthNavigator />
            // </KeyboardAwareScrollView>
        );
    }
}

export default AppEntry;