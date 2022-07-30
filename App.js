import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/Home';
import RandomMovieScreen from './src/screens/RandomMovie';
import ChooseSuperHeroScreen from './src/screens/ChooseSuperHero';

const MainTabsNavigator = createBottomTabNavigator();
const PickRandomMovieStackNavigator = createNativeStackNavigator();
const ChooseSuperHeroStackNavigator = createNativeStackNavigator();

const PickRandomMovieStack = () => (
  <PickRandomMovieStackNavigator.Navigator screenOptions={{header: () => null}}>
    <PickRandomMovieStackNavigator.Screen name="Home" component={HomeScreen}/>
    <PickRandomMovieStackNavigator.Screen name="RandomMovieScreen" component={RandomMovieScreen}/>
  </PickRandomMovieStackNavigator.Navigator>
);

const ChooseSuperHeroStack = () => (
  <ChooseSuperHeroStackNavigator.Navigator>
    <ChooseSuperHeroStackNavigator.Screen name="ChooseSuperHeroScreen" component={ChooseSuperHeroScreen}/>
    <PickRandomMovieStackNavigator.Screen name="RandomMovieScreen" component={RandomMovieScreen}/>
  </ChooseSuperHeroStackNavigator.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <MainTabsNavigator.Navigator screenOptions={{header: () => null}}>
        <MainTabsNavigator.Screen name="PickRandomMovieStack" component={PickRandomMovieStack} options={{tabBarLabel: 'Pick', tabBarIcon: () => null}} />
        <MainTabsNavigator.Screen name="ChooseSuperHeroStack" component={ChooseSuperHeroStack} options={{tabBarLabel: "Choose & Pick", tabBarIcon: () => null}}/>
      </MainTabsNavigator.Navigator>
    </NavigationContainer>
  );
}