import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import main from './src/pages/main';
import son from './src/pages/son';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene
          key="main"
          hideNavBar
          component={main}
          initial
          />
          
          <Scene
          key="son"
          hideNavBar
          component={son}
          />
        </Scene>
      </Router>
      
    );
  }
}

