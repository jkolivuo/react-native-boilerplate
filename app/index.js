import React from 'react';
import { Provider } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import Navigator from './config/routes';
import configureStore from './config/store';
import rootSaga from './sagas';

EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
  $white: '#FFFF',
  $black: '#FF000000',
});

const store = configureStore();
store.runSaga(rootSaga);

export default () => (
  <Provider store={store}>
    <Navigator onNavigationStateChange={null} />
  </Provider>
);
