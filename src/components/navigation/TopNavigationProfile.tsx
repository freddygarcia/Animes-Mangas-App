import React, { } from 'react';
import { Icon, TopNavigation, TopNavigationAction } from "@ui-kitten/components";
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { Linking } from 'react-native';

interface TopNavigationSearchProps {
    title: string
    navigation: DrawerNavigationProp<{}>;
};

const TopNavigationProfile = (props: TopNavigationSearchProps) => {

    const renderEmailMeAction = (): React.ReactElement => (
        <TopNavigationAction
            icon={<Icon name='email-outline' />}
            onPress={() => Linking.openURL('mailto:freddygarciaabreu@gmail.com')}
        />
    );


    const renderMenuAction = (): React.ReactElement => (
        <TopNavigationAction
            icon={<Icon name='menu' />}
            onPress={props.navigation.toggleDrawer}
        />
    );

    return (
        <TopNavigation
            title={props.title}
            accessoryLeft={renderMenuAction}
            accessoryRight={renderEmailMeAction}
        />
    )
};

export default TopNavigationProfile;