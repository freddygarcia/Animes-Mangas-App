import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AnimesScreen from '../screens/animes/animes.screen';

const Drawer = createDrawerNavigator();

export const AppNavigator = (): React.ReactElement => (
    <NavigationContainer>
        <Drawer.Navigator>
            {/* <Drawer.Screen name="Home" component={HomeScreen} /> */}
            <Drawer.Screen name="Animes" component={AnimesScreen} />
            <Drawer.Screen name="Manga" component={AnimesScreen} />
            <Drawer.Screen name="Favorites" component={AnimesScreen} />
        </Drawer.Navigator>
    </NavigationContainer>
);