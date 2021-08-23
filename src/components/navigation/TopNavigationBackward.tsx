import React from 'react';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Icon, TopNavigation, TopNavigationAction } from "@ui-kitten/components";
import { Share } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { Manga } from '../../models/manga.model';
import { Anime } from '../../models/anime.model';

interface TopNavigationBackwardProps {
    title: string
    navigation: NativeStackNavigationProp<{}>;
    route: RouteProp<{ params: { item: Anime | Manga } }>;
};

const TopNavigationBackward = (props: TopNavigationBackwardProps) => {

    const shareTitle = async () => {
        const message = props.route.params.item.title;
        Share.share({ message })
    }

    const renderMenuAction = (): React.ReactElement => (
        <TopNavigationAction
            icon={<Icon name='arrow-back-outline' />}
            onPress={props.navigation.goBack}
        />
    );

    const renderShareAction = (): React.ReactElement => (
        <TopNavigationAction
            icon={<Icon name='share' />}
            onPress={shareTitle}
        />
    )

    return (
        <TopNavigation
            title={props.title}
            accessoryLeft={renderMenuAction}
            accessoryRight={renderShareAction}
        />
    )
}


export default TopNavigationBackward