import React from 'react';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Icon, TopNavigation, TopNavigationAction } from "@ui-kitten/components";

interface TopNavigationBackwardProps {
    title: string
    navigation: NativeStackNavigationProp<{}>;
};

const TopNavigationBackward = (props: TopNavigationBackwardProps) => {

    const renderMenuAction = (): React.ReactElement => (
        <TopNavigationAction
            icon={<Icon name='arrow-back-outline' />}
            onPress={props.navigation.goBack}
        />
    );

    return (
        <TopNavigation
            title={props.title}
            accessoryLeft={renderMenuAction}
        />
    )
}


export default TopNavigationBackward