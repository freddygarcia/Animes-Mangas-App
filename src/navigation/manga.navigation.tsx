import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MangasLayout from '../layouts/manga/manga-list.layout';
import MangaLayout from '../layouts/manga/manga.layout';

const Stack = createNativeStackNavigator();

const MangasNavigation = (): React.ReactElement => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MangaList" component={MangasLayout} />
        <Stack.Screen name="MangaDetail" component={MangaLayout} />
    </Stack.Navigator>
);

export default MangasNavigation;