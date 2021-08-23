import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AnimesNavigation from './anime.navigation';
import MangasNavigation from './manga.navigation';
import BookmarksNavigation from './bookmark.navigation';
import usePreload from '../hooks/preload.hook';

const Drawer = createDrawerNavigator();

export const AppNavigator = (): React.ReactElement => {

    usePreload();

    return (
        <NavigationContainer>
            <Drawer.Navigator screenOptions={{ headerShown: false }}>
                {/* <Drawer.Screen name="Home" component={HomeScreen} /> */}
                <Drawer.Screen name="Animes" component={AnimesNavigation} />
                <Drawer.Screen name="Manga" component={MangasNavigation} />
                <Drawer.Screen name="Favorites" component={BookmarksNavigation} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
};