import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Pie from 'react-native-pie';
import Root from './src/Screen';

import {Provider} from 'react-redux';

import {store} from './src/Redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
};
const styles = StyleSheet.create({});
export default App;
