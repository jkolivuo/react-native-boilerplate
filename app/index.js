import React from 'react';
import Navigator from '@config/routes';
import { Provider } from 'react-redux';
import store from '@config/store';
import EStyleSheet from 'react-native-extended-stylesheet';

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
