import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreens } from '../../../../domain/enum/screen-name';
import { CartScreen, FoodDetailScreen, FoodSwiperScreen, HomeScreen, ProfileScreen } from '../../../screen/home';

const HomeStack = createNativeStackNavigator();
export const HomeNavigator = () => (
  <HomeStack.Navigator screenOptions={{ headerShown: false }}>
    <HomeStack.Screen name={HomeScreens.Home} component={HomeScreen} />
    <HomeStack.Screen name={HomeScreens.Cart} component={CartScreen} />
    <HomeStack.Screen name={HomeScreens.FoodDetail} component={FoodDetailScreen} />
    <HomeStack.Screen name={HomeScreens.FoodSwiper} component={FoodSwiperScreen} />
    <HomeStack.Screen name={HomeScreens.Profile} component={ProfileScreen} />
  </HomeStack.Navigator>
);
