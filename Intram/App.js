/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import Button from 'react-native-button'
import React, { Component } from 'react';
import {
  StackNavigator,
} from 'react-navigation';

import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  TextInput
} from 'react-native';




export default class WelcomeScreen extends Component {
  static navigationOptions = {
      title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Image
           style={styles.logo}
           source={require('./img/logo.png')}
        />
        <Button style={styles.btn} onPress={() => navigate('Register')/*this._registerPress*/} title="register">
          Register
        </Button>
        <Button style={styles.btn} onPress={this._loginPress} title="login">
          Login
        </Button>
        <Button style={styles.btn} onPress={this._infoPress} title="information">
          Information
        </Button>

      </View>
    );
  }
//
//  _registerPress(event) {
//      console.log('Pressed!');
//   }
//  _loginPress(event) {
//
//  }
//  _infoPress(event) {
//
//  }
}



class RegisterScreen extends Component {
    static navigationOptions = {
        title: 'Register',
    };
    constructor(props) {
        super(props);
    }
    render() {
        return (
          <View>
              <Text style={styles.instructions}>First Name</Text>
              <TextInput
                  alignSelf={'center'}
                  style={styles.textInput}
              />
              <Text style={styles.instructions}>First Name</Text>
              <TextInput
                  alignSelf={'center'}
                  style={styles.textInput}
              />
              <Text style={styles.instructions}>First Name</Text>
              <TextInput
                  alignSelf={'center'}
                  style={styles.textInput}
              />
          </View>
        );
    }
}

const Intram = StackNavigator({
  Welcome: { screen: WelcomeScreen },
  Register: { screen: RegisterScreen },
});

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    width: 400,
    borderColor: '#90002e',
    borderWidth: 1,
    margin: 10
  },
  logo: {
    width: 250,
    height: 250,
    margin: 20
  },
  btn: {
    backgroundColor: '#90002E',
    color: '#e7e7e7',
    padding: 15,
    margin: 20,
    width: 300,
    fontSize: 25
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
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 3,
    fontSize: 15
  },
});



AppRegistry.registerComponent('Intram', () => Intram);
