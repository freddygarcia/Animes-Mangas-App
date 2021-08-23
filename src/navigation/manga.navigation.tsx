import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MangasLayout from '../layouts/manga/manga-list.layout';
import MangaLayout from '../layouts/manga/manga.layout';
import { HIDE_HEADER } from '../app/contants';

const Stack = createNativeStackNavigator();

const MangasNavigation = (): React.ReactElement => (
    <Stack.Navigator screenOptions={HIDE_HEADER}>
        <Stack.Screen name="MangaList" component={MangasLayout} />
        <Stack.Screen name="MangaDetail" component={MangaLayout} />
    </Stack.Navigator>
);

export default MangasNavigation;