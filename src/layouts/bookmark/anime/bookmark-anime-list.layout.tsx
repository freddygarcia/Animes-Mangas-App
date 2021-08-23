import React from 'react';
import { Divider } from '@ui-kitten/components';
import SafeAreaLayout from '../../../components/screen/SafeAreaLayout';
import BookmarkAnimesScreen from '../../../screens/bookmarks/animes/bookmark-anime-lists.creen'
import TopNavigationSearch from '../../../components/navigation/TopNavigationSearch';

const BookmarkAnimesLayout = (props: any): React.ReactElement => {
    return (
        <SafeAreaLayout >
            <TopNavigationSearch {...props} title='Bookmarks' />
            <Divider />
            <BookmarkAnimesScreen navigation={props.navigation}  />
        </SafeAreaLayout>
    );
};

export default BookmarkAnimesLayout;