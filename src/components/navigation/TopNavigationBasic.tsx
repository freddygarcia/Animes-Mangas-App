import React, { } from 'react';
import { Icon, TopNavigation, TopNavigationAction } from "@ui-kitten/components";
import { DrawerNavigationProp } from '@react-navigation/drawer';

interface TopNavigationSearchProps {
    title: string
    navigation: DrawerNavigationProp<{}>;
};

const TopNavigationBasic = (props: TopNavigationSearchProps) => {

    const renderEmailMeAction = (): React.ReactElement => (
        <TopNavigationAction
            icon={<Icon name='email-outline' />}
            onPress={props.navigation.toggleDrawer}
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

export default TopNavigationBasic;