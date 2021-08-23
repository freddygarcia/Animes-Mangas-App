import React from 'react';
import SafeAreaLayout from '../../components/screen/SafeAreaLayout';
import ProfileScreen from '../../screens/profile.screen';
import TopNavigationBasic from '../../components/navigation/TopNavigationBasic';

const ProfileLayout = (props: any) => {

    return (
        <SafeAreaLayout>
            <TopNavigationBasic title='Profile' {...props}  />
            <ProfileScreen {...props} />
        </SafeAreaLayout>
    )
};


export default ProfileLayout;