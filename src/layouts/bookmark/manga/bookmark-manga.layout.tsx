import React from 'react';
import TopNavigationBackward from '../../../components/navigation/TopNavigationBackward';
import SafeAreaLayout from '../../../components/screen/SafeAreaLayout';
import MangaBookmarkScreen from '../../../screens/bookmarks/mangas/bookmark-manga.creen';

const MangaBookmarkLayout = (props: any) => {

    return (
        <SafeAreaLayout>
            <TopNavigationBackward {...props}  />
            <MangaBookmarkScreen {...props} />
        </SafeAreaLayout>
    )
};


export default MangaBookmarkLayout;