import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InitialNews from '../pages/InitialINews';
import Home from '../pages/Home';
import InitialArticle from '../pages/InitialArticle';
import InitialAnnouncement from '../pages/InitialAnnouncement';
import InitialOpd from '../pages/InitialOpd';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="News" component={InitialNews} />
        <Stack.Screen name="Article" component={InitialArticle} />
        <Stack.Screen name="Opd" component={InitialOpd} />
        <Stack.Screen name="Announcement" component={InitialAnnouncement} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
