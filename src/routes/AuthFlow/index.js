import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Onboarding1, Onboarding2} from '../../screens';

const AuthFlow = () => {
  const AuthStack = createStackNavigator();

  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="Onboarding1" component={Onboarding1} />
      <AuthStack.Screen name="Onboarding2" component={Onboarding2} />
    </AuthStack.Navigator>
  );
};
export default AuthFlow;

const styles = StyleSheet.create({});
