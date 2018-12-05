import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

import Store from './src/store/index.store';
import AppEntry from './src';

export default class App extends React.Component {
  render() {
    console.disableYellowBox = true;
    let store = Store;
    return (
      <Provider store={ store }>
        <AppEntry />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
