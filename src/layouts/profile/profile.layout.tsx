import React from 'react';
import SafeAreaLayout from '../../components/screen/SafeAreaLayout';
import ProfileScreen from '../../screens/profile/profile.screen';
import TopNavigationProfile from '../../components/navigation/TopNavigationProfile';

const ProfileLayout = (props: any) => {

    return (
        <SafeAreaLayout>
            <TopNavigationProfile title='Profile' {...props}  />
            <ProfileScreen {...props} />
        </SafeAreaLayout>
    )
};


export default ProfileLayout;