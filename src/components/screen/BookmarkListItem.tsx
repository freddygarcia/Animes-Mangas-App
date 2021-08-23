import React from 'react';
import { ListRenderItemInfo, StyleSheet } from 'react-native';
import { Card, Icon, Text } from '@ui-kitten/components';

import BookmarkButton from '../details/BookmarkButton';
import { Serie } from '../../models/shared.model';

interface ItemListProps {
    itemInfo: ListRenderItemInfo<Serie>
    onBookmarkSave: Function
    onPress: Function
}

const ListItemLocal = (props: ItemListProps): React.ReactElement => (
    <Card
        style={styles.item}
        onPress={props.onPress(props.itemInfo.item)}>

        <Text
            numberOfLines={1}
            style={styles.itemTitle}
            category='p1'
            status='basic'>
            {props.itemInfo.item.title}
        </Text>
        <BookmarkButton
            label={''}
            size='medium'
            status={'basic'}
            accessoryLeft={<Icon name='trash-outline' />}
            style={styles.iconButton}
            onBookmarkSave={() => props.onBookmarkSave(props.itemInfo.item)}
            item={props.itemInfo.item}
        />

    </Card>
);


const styles = StyleSheet.create({
    item: {
        marginVertical: 2,
        height: 55,
    },
    itemImage: {
        ...StyleSheet.absoluteFillObject,
        height: 220,
        paddingVertical: 24,
        paddingHorizontal: 16,
    },
    itemTitle: {
        width: '70%',
        zIndex: 1,
        overflow: 'hidden'
    },
    itemFooter: {
        width: '100%',
        position: 'absolute',
        flexDirection: 'row',
        left: 8,
        bottom: 8,
    },
    iconButton: {
        paddingHorizontal: 0,
        position: 'absolute',
        right: 0
    },
});


export default ListItemLocal;