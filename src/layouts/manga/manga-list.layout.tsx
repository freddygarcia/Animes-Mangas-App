import React from 'react';
import SafeAreaLayout from '../../components/screen/SafeAreaLayout';
import TopNavigationSearch from '../../components/navigation/TopNavigationSearch';
import MangasScreen from '../../screens/mangas/manga-list.screen';

const MangasLayout = (props: any) => {

    return (
        <SafeAreaLayout>
            <TopNavigationSearch {...props} title='Mangas' />

            <MangasScreen
                navigation={props.navigation} />
        </SafeAreaLayout>
    )
};


export default MangasLayout;