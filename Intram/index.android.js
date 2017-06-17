/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import Button from 'react-native-button'
import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

export default class Intram extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
           style={styles.logo}
           source={require('./img/logo.png')}
        />
        <Button style={styles.btn} onPress={this._handlePress} title="register">
          Register
        </Button>
        <Button style={styles.btn} onPress={this._handlePress} title="information">
          Information
        </Button>

      </View>
    );
  }

  _handlePress(event) {
      console.log('Pressed!');
   }
}

const styles = StyleSheet.create({
  logo: {
    width: 250,
    height: 250,
    margin: 20
  },
  btn: {
    backgroundColor: '#90002E',
    color: '#e7e7e7',
    padding: 20,
    margin: 20,
    width: 200
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e7e7e7',
  },
  welcome: {
    color: '#90002e',
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Intram', () => Intram);
