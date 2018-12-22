import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from '../users/Login';
import SignUp from '../users/SignUp';
import HomePage from '../../../products/HomePage';
import test from '../users/test';
import { createStackNavigator } from 'react-navigation';


const NavApp = createStackNavigator({
  Login: { screen: Login},
  SignUp: { screen: SignUp },
  Test: {screen:test},
 
  
});



class NavScreen extends React.Component {



  render() {
    return (
      <NavApp/>
    );
  }
}

export default NavScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});
