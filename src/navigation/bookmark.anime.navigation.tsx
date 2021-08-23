
import React from 'react';

import BookmarkAnimesLayout from '../layouts/bookmark/anime/bookmark-anime-list.layout';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AnimeBookmarkLayout from '../layouts/bookmark/anime/bookmark-anime.layout';
import { HIDE_HEADER } from '../app/contants';

const Stack = createNativeStackNavigator();


const AnimesBookmarkNavigation = (): React.ReactElement => (
    <Stack.Navigator screenOptions={HIDE_HEADER}>
        <Stack.Screen name="AnimesBookmarkList" component={BookmarkAnimesLayout} />
        <Stack.Screen name="AnimesBookmarkDetail" component={AnimeBookmarkLayout} />
    </Stack.Navigator>
);

export default AnimesBookmarkNavigation;