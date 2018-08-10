import React from 'react';
import { Provider } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import Navigator from './config/routes';
import store from './config/store';

EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
  $white: '#FFFF',
  $black: '#FF000000',
});

export default () => (
  <Provider store={store}>
    <Navigator onNavigationStateChange={null} />
  </Provider>
);
