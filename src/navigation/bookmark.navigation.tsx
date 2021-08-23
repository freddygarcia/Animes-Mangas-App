
import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AnimesBookmarkNavigation from './bookmark.anime.navigation';
import MangasBookmarkNavigation from './bookmark.manga.navigation';
import HomeBottomNavigation from '../components/navigation/BookmarkBottomNavigation';
import { HIDE_HEADER } from '../app/contants';

const BottomTab = createBottomTabNavigator();

const BookmarksNavigation = (): React.ReactElement => (
    <BottomTab.Navigator screenOptions={HIDE_HEADER}
        tabBar={(props) => <HomeBottomNavigation {...props} />}>
        <BottomTab.Screen name='AnimesBookmark' component={AnimesBookmarkNavigation} />
        <BottomTab.Screen name='MangasBookmark' component={MangasBookmarkNavigation} />
    </BottomTab.Navigator >
);

export default BookmarksNavigation;