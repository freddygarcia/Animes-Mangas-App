import React, { useState } from 'react';
import { Drawer, DrawerItem, DrawerElement, Text, IndexPath, Icon } from '@ui-kitten/components';
import { DrawerContentComponentProps } from '@react-navigation/drawer';

export const MainDrawer = (props: DrawerContentComponentProps): DrawerElement => {
    const [selectedIndex, setSelectedIndex] = useState<IndexPath>();

    const drawerItems = [
        { route: 'Me', icon: 'person-outline' },
        { route: 'Animes', icon: 'video-outline' },
        { route: 'Manga', icon: 'book-open-outline' },
        { route: 'Favorites', icon: 'heart-outline' },
    ];

    const navigateTo = (routeName: string) => () => {
        props.navigation.toggleDrawer();
        props.navigation.navigate(routeName);
    }

    const ItemText = ({ text }: { text: string }) => <Text style={{ flex: 1 }}>{text}</Text>


    return (
        <Drawer
            selectedIndex={selectedIndex}
            onSelect={(index) => setSelectedIndex(index)}
        >
            <DrawerItem />
            {drawerItems.map(item => (
                <DrawerItem
                    key={item.route}
                    title={() => <ItemText text={item.route} />}
                    style={{ height: 50 }}
                    onPress={navigateTo(item.route)}
                    accessoryLeft={<Icon name={item.icon} />}
                />
            ))}
        </Drawer>
    );
};

export default MainDrawer;