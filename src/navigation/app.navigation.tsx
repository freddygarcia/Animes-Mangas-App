import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/home.screen';

const Drawer = createDrawerNavigator();

export const AppNavigator = (): React.ReactElement => (
    <NavigationContainer>
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Animes" component={HomeScreen} />
            <Drawer.Screen name="Manga" component={HomeScreen} />
            <Drawer.Screen name="Favorites" component={HomeScreen} />
        </Drawer.Navigator>
    </NavigationContainer>
);