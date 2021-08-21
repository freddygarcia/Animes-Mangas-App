import React from 'react';
import Screen from '../../components/screen/SafeAreaLayout';
import AnimeScreen from '../../screens/animes/anime.screen';
import TopNavigationBackward from '../../components/navigation/TopNavigationBackward';

const AnimeLayout = (props: any) => {

    return (
        <Screen>
            <TopNavigationBackward{...props}  />
            <AnimeScreen {...props} />
        </Screen>
    )
};


export default AnimeLayout;