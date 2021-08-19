import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AnimesScreen from '../screens/animes/animes.screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AnimeScreen from '../screens/animes/anime.screen';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const AnimesNavigation = (): React.ReactElement => (
    <Stack.Navigator  screenOptions={{ headerShown : false }} >
        <Stack.Screen name="Anime" component={AnimesScreen}  />
        <Stack.Screen name="AnimeDetail" component={AnimeScreen}   />
    </Stack.Navigator>
);


export const AppNavigator = (): React.ReactElement => (
    <NavigationContainer>
        <Drawer.Navigator >
            {/* <Drawer.Screen name="Home" component={HomeScreen} /> */}
            <Drawer.Screen name="Animes" component={AnimesNavigation}  />
            <Drawer.Screen name="Manga" component={AnimesScreen} />
            <Drawer.Screen name="Favorites" component={AnimesScreen} />
        </Drawer.Navigator>
    </NavigationContainer>
);