import React from 'react';
import { ListRenderItemInfo, StyleSheet, View } from 'react-native';
import { Button, Card, StyleService, Text } from '@ui-kitten/components';

import { ImageOverlay } from '../ImageOverlay';
import { Anime } from '../../models/anime.model';
import { Manga } from '../../models/manga.model';
import BookmarkButton from '../details/BookmarkButton';

interface ItemListProps {
    itemInfo: ListRenderItemInfo<Anime | Manga>
    onBookmarkSave: Function
    onPress: Function
}

const ListItem = (props: ItemListProps): React.ReactElement => (
    <Card
        style={styles.item}
        onPress={props.onPress(props.itemInfo.item)}>
        <ImageOverlay
            style={styles.itemImage}
            source={{ uri: props.itemInfo.item.poster }}>
            <Text
                style={styles.itemTitle}
                category='h4'
                status='control'>
                {props.itemInfo.item.title}
            </Text>
            <View style={styles.itemFooter}>
                <Button
                    style={styles.iconButton}
                    appearance='ghost'
                    status='control'
                >
                    {props.itemInfo.item.categoryList?.join(', ')}
                </Button>

                <BookmarkButton
                    label={props.itemInfo.item.isBookmarked ? 'Saved' : 'Save'}
                    size='medium'
                    style={[styles.iconButton, { position: 'absolute', right: 0 }]}
                    onBookmarkSave={() => props.onBookmarkSave(props.itemInfo.item)}
                    item={props.itemInfo.item}
                 />
            </View>
        </ImageOverlay>
    </Card>
);


const styles = StyleService.create({
    item: {
        marginVertical: 8,
        height: 220,
    },
    itemImage: {
        ...StyleSheet.absoluteFillObject,
        height: 220,
        paddingVertical: 24,
        paddingHorizontal: 16,
    },
    itemTitle: {
        zIndex: 1,
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
    },
});


export default ListItem;