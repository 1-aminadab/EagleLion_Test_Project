/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { Theme } from '../theme/theme';

const Tab = createBottomTabNavigator();

// Dummy screens
const FoodScreen = () => (
  <View style={styles.screen}><Text>Food Screen</Text></View>
);
const GroceryScreen = () => (
  <View style={styles.screen}><Text>Grocery Screen</Text></View>
);
const AllServicesScreen = () => (
  <View style={styles.screen}><Text>All Services Screen</Text></View>
);
const RewardsScreen = () => (
  <View style={styles.screen}><Text>Rewards Screen</Text></View>
);
const ProfileScreen = () => (
  <View style={styles.screen}><Text>Profile Screen</Text></View>
);

// Animated Icon Component
const AnimatedIcon = ({ name, focused }: { name: string; focused: boolean }) => {
  const scale = useSharedValue(focused ? 1.2 : 1);

  React.useEffect(() => {
    scale.value = withTiming(focused ? 1.2 : 1, { duration: 200 });
  }, [focused, scale]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <Animated.View style={animatedStyle}>
      <Icon name={name} size={24} color={focused ? Theme.colors.Primary : '#6c757d'} />
    </Animated.View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName: string = '';

            switch (route.name) {
              case 'Food':
                iconName = 'food';
                break;
              case 'Grocery':
                iconName = 'cart';
                break;
              case 'All Services':
                iconName = 'grid';
                break;
              case 'Rewards':
                iconName = 'diamond';
                break;
              case 'Profile':
                iconName = 'account';
                break;
            }

            return <AnimatedIcon name={iconName} focused={focused} />;
          },
          tabBarShowLabel: true,
          tabBarLabelStyle: { fontSize: 12 },
          tabBarStyle: { height: 60 },
        })}
      >
        <Tab.Screen name="Food" component={FoodScreen} />
        <Tab.Screen name="Grocery" component={GroceryScreen} />
        <Tab.Screen name="All Services" component={AllServicesScreen} />
        <Tab.Screen name="Rewards" component={RewardsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
