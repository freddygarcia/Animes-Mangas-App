import React from 'react';
import SafeAreaLayout from '../../components/screen/SafeAreaLayout';
import AnimeScreen from '../../screens/animes/anime.screen';
import TopNavigationBackward from '../../components/navigation/TopNavigationBackward';

const AnimeLayout = (props: any) => {

    return (
        <SafeAreaLayout>
            <TopNavigationBackward{...props}  />
            <AnimeScreen {...props} />
        </SafeAreaLayout>
    )
};


export default AnimeLayout;