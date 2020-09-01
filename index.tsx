import {Provider} from 'react-redux';
import configureStore from './src/redux/store';
import App from './App';
import React from 'react';
import {AppRegistry, StatusBar} from 'react-native';
import {name as appName} from './app.json';

const app = () => (
  <Provider store={configureStore}>
    <StatusBar backgroundColor={'transparent'}/>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => app);
console.disableYellowBox = true;