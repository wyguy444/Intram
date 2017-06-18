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
        <Button style={styles.btn} onPress={() => navigate('Register')} title="register">
          Register
        </Button>
        <Button style={styles.btn} onPress={() => navigate('Login')} title="login">
          Login
        </Button>
        <Button style={styles.btn} onPress={() => navigate('Info')} title="information">
          Information
        </Button>

      </View>
    );
  }
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
          <View style={styles.container}>
              <Text style={styles.instructions}>First Name</Text>
              <TextInput
                  alignSelf={'center'}
                  style={styles.textInput}
              />
              <Text style={styles.instructions}>Last Name</Text>
              <TextInput
                  alignSelf={'center'}
                  style={styles.textInput}
              />
              <Text style={styles.instructions}>Email</Text>
              <TextInput
                  alignSelf={'center'}
                  style={styles.textInput}
              />

          </View>
        );
    }
}

class LoginScreen extends Component {
    static navigationOptions = {
        title: 'Login',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Button style={styles.loginbtn} onPress={() => navigate('Home')} title="lgn">
                    Login
                </Button>
            </View>
        );
    }
}

class InfoScreen extends Component {
//    static navigationOptions = {
//        title: 'Register',
//    };
    render() {
        return (
          <View style={styles.container}>

          </View>
        );
    }
}

class HomeScreen extends Component {
//    static navigationOptions = {
//        title: 'Register',
//    };
    render() {
        return (
          <View style={styles.container}>

          </View>
        );
    }
}

const Intram = StackNavigator({
  Welcome: { screen: WelcomeScreen },
  Register: { screen: RegisterScreen },
  Login: { screen: LoginScreen },
  Info: { screen: InfoScreen },
  Home: { screen: HomeScreen },
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
  loginbtn: {
    backgroundColor: '#90002E',
    color: '#e7e7e7',
    padding: 15,
    margin: 20,
    width: 300,
    fontSize: 25
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
