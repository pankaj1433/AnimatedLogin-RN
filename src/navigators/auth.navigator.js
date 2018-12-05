import { createSwitchNavigator } from 'react-navigation';

import LoginScreen from '../screens/login';
import AppNavigator from './app.navigator';

export default createSwitchNavigator({
    // App: AppNavigator,
    Auth: LoginScreen,
    App: AppNavigator,
});