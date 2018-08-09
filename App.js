/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

class App extends Component {
  state = {
    isDefault: true,
  };
  render() {
    return (
      <View>
        <Text>{'This is test'}</Text>
      </View>
    );
  }
}

export default App;
