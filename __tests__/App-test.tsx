import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// import AppNavigator from '../test/AppNavigator';
// import BookmarkAnimesLayout from '../src/layouts/bookmark/anime/bookmark-anime-list.layout';
import { render } from '../jest/test-utils';
// import { AppNavigator } from '../src/navigation/app.navigation';
import { Divider } from '@ui-kitten/components';
import BookmarkAnimesLayout from '../src/layouts/bookmark/anime/bookmark-anime-list.layout';
import { Text, View } from 'react-native';
import AnimesBookmarkNavigation from '../src/navigation/bookmark.anime.navigation'
import { AppNavigator } from '../src/navigation/app.navigation';
import MainDrawer from '../src/components/navigation/Drawer';
import TopNavigationSearch from '../src/components/navigation/TopNavigationSearch';
import TopNavigationProfile from '../src/components/navigation/TopNavigationProfile';
// import { render, fireEvent } from '@testing-library/react-native'
jest.useFakeTimers()
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('Testing react navigation', () => {
    test('page contains the header and 10 items', async () => {
        const { debug, getByText, findByText, queryByText } = render(<TopNavigationProfile title='tesst'  />);

        expect(findByText(/test/i)).toEqual();
        // expect(header).toBeTruthy();
        // expect(items.length).toBe(10);
    });
});