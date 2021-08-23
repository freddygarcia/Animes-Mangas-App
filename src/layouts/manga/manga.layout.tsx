import React from 'react';
import SafeAreaLayout from '../../components/screen/SafeAreaLayout';
import TopNavigationBackward from '../../components/navigation/TopNavigationBackward';
import MangaScreen from '../../screens/mangas/manga.screen';

const MangaLayout = (props: any) => {

    return (
        <SafeAreaLayout>
            <TopNavigationBackward {...props}  />
            <MangaScreen {...props} />
        </SafeAreaLayout>
    )
};


export default MangaLayout;