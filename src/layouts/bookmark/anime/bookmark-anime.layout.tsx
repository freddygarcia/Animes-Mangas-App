import React from 'react';
import TopNavigationBackward from '../../../components/navigation/TopNavigationBackward';
import SafeAreaLayout from '../../../components/screen/SafeAreaLayout';
import AnimeBookmarkScreen from '../../../screens/bookmarks/animes/bookmark-anime.creen';

const AnimeBookmarkLayout = (props: any) => {

    return (
        <SafeAreaLayout>
            <TopNavigationBackward {...props}  />
            <AnimeBookmarkScreen {...props} />
        </SafeAreaLayout>
    )
};


export default AnimeBookmarkLayout;