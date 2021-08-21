import React from 'react';
import Screen from '../../components/screen/SafeAreaLayout';
import TopNavigationBackward from '../../components/navigation/TopNavigationBackward';
import MangaScreen from '../../screens/mangas/manga.screen';

const MangaLayout = (props: any) => {

    return (
        <Screen>
            <TopNavigationBackward {...props}  />
            <MangaScreen {...props} />
        </Screen>
    )
};


export default MangaLayout;