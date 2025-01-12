import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { HomeNavigator } from '../stack/home/home.navigation';
import { OnboardingNavigator } from '../stack/onboarding/onboarding.navigation';
import { AuthNavigator } from '../stack/auth/auth.navigation';
import { RootScreens } from '../../../domain/enum/screen-name';

const RootStack = createNativeStackNavigator();
export const RootNavigator = () => (
  <NavigationContainer>
        <RootStack.Screen name={RootScreens.Onboarding} component={OnboardingNavigator} />
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
    <RootStack.Screen name={RootScreens.Home} component={HomeNavigator} />
    <RootStack.Screen name={RootScreens.Auth} component={AuthNavigator} />
    </RootStack.Navigator>
  </NavigationContainer>
);
