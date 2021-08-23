import React from 'react';
import SafeAreaLayout from '../../components/screen/SafeAreaLayout';
import AnimesScreen from '../../screens/animes/anime-list.screen';
import TopNavigationSearch from '../../components/navigation/TopNavigationSearch';

const AnimesLayout = (props: any) => {

    return (
        <SafeAreaLayout>
            <TopNavigationSearch {...props} title='Animes' />

            <AnimesScreen
                navigation={props.navigation} />
        </SafeAreaLayout>
    )
};


export default AnimesLayout;