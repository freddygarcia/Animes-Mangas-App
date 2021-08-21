import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AnimesNavigation from './anime.navigation';
import MangasNavigation from './manga.navigation';

const Drawer = createDrawerNavigator();

export const AppNavigator = (): React.ReactElement => (
    <NavigationContainer>
        <Drawer.Navigator screenOptions={{ headerShown: false }}>
            {/* <Drawer.Screen name="Home" component={HomeScreen} /> */}
            {/* <Drawer.Screen name="Animes" component={AnimesNavigation} /> */}
            <Drawer.Screen name="Manga" component={MangasNavigation} />
            <Drawer.Screen name="Favorites" component={AnimesNavigation} />
        </Drawer.Navigator>
    </NavigationContainer>
);