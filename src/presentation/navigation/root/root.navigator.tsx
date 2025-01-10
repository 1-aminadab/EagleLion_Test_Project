import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { HomeNavigator } from '../stack/home/home.navigation';
import { OnboardingNavigator } from '../stack/onboarding/onboarding.navigation';
import { AuthNavigator } from '../stack/auth/auth.navigation';

const RootStack = createNativeStackNavigator();
export const RootNavigator = () => (
  <NavigationContainer>
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="Auth" component={AuthNavigator} />
      <RootStack.Screen name="Home" component={HomeNavigator} />
      <RootStack.Screen name="Onboarding" component={OnboardingNavigator} />
    </RootStack.Navigator>
  </NavigationContainer>
);
