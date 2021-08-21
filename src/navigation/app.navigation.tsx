import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AnimesLayout from '../layouts/anime/anime-list.layout';
import AnimeLayout from '../layouts/anime/anime.layout';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const AnimesNavigation = (): React.ReactElement => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Anime" component={AnimesLayout} />
        <Stack.Screen name="AnimeDetail" component={AnimeLayout} />
    </Stack.Navigator>
);


export const AppNavigator = (): React.ReactElement => (
    <NavigationContainer>
        <Drawer.Navigator screenOptions={{ headerShown: false }}>
            {/* <Drawer.Screen name="Home" component={HomeScreen} /> */}
            <Drawer.Screen name="Animes" component={AnimesNavigation} />
            <Drawer.Screen name="Manga" component={AnimesNavigation} />
            <Drawer.Screen name="Favorites" component={AnimesNavigation} />
        </Drawer.Navigator>
    </NavigationContainer>
);