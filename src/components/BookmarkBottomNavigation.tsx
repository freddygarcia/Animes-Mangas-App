import React from 'react';
import { View } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, Divider, Icon, StyleService } from '@ui-kitten/components';


const HomeBottomNavigation = ({ navigation, state } : BottomTabBarProps) => {

    const onSelect = (index: number): void => {
        navigation.navigate(state.routeNames[index]);
    };

    return (
        <View style={styles.container}>
            <Divider />
            <BottomNavigation
                appearance='noIndicator'
                selectedIndex={state.index}
                onSelect={onSelect}>
                <BottomNavigationTab
                    title='Animes'
                    icon={<Icon name='video-outline' />}
                />
                <BottomNavigationTab
                    title='Mangas'
                    icon={<Icon name='book-outline' />}
                />
            </BottomNavigation>
        </View>
    );
};

const styles = StyleService.create({
    container: {
        left: 0,
        right: 0,
        bottom: 0,
    },
});


export default HomeBottomNavigation;