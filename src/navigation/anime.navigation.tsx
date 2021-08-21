import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AnimesLayout from '../layouts/anime/anime-list.layout';
import AnimeLayout from '../layouts/anime/anime.layout';

const Stack = createNativeStackNavigator();

const AnimesNavigation = (): React.ReactElement => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="AnimeList" component={AnimesLayout} />
        <Stack.Screen name="AnimeDetail" component={AnimeLayout} />
    </Stack.Navigator>
);


export default AnimesNavigation;