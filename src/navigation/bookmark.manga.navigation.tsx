
import React from 'react';

import BookmarkMangasLayout from '../layouts/bookmark/manga/bookmark-manga-list.layout';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MangaBookmarkLayout from '../layouts/bookmark/manga/bookmark-manga.layout';
import { HIDE_HEADER } from '../app/contants';

const Stack = createNativeStackNavigator();



const MangasBookmarkNavigation = (): React.ReactElement => (
    <Stack.Navigator screenOptions={HIDE_HEADER}>
        <Stack.Screen name="MangasBookmarkList" component={BookmarkMangasLayout} />
        <Stack.Screen name="MangasBookmarkDetail" component={MangaBookmarkLayout} />
    </Stack.Navigator>
);


export default MangasBookmarkNavigation;