import React from 'react';
import { Divider } from '@ui-kitten/components';
import SafeAreaLayout from '../../../components/screen/SafeAreaLayout';
import TopNavigationSearch from '../../../components/navigation/TopNavigationSearch';
import BookmarkMangasScreen from '../../../screens/bookmarks/mangas/bookmark-manga-lists.creen';

const BookmarkMangasLayout = (props: any): React.ReactElement => {
    return (
        <SafeAreaLayout >
            <TopNavigationSearch {...props} title='Bookmarks' />
            <Divider />
            <BookmarkMangasScreen navigation={props.navigation}  />
        </SafeAreaLayout>
    );
};

export default BookmarkMangasLayout;