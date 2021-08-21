import React from 'react';
import { connect } from 'react-redux';
import { useQuery } from '@apollo/client'
import { useDispatch } from 'react-redux'
import { ListRenderItemInfo, StyleSheet, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button, Card, Icon, List, StyleService, Text, useStyleSheet } from '@ui-kitten/components';

import { useEffect } from 'react';
import { RootState } from '../../app/store';
import { GetAllAnimes } from '../../api/animes';
import { Anime } from '../../models/anime.model';
import { ImageOverlay } from '../../components/ImageOverlay';
import { saveAnimes, loadMore, State, reset } from '../../reducers/anime.reducer';


interface AnimesScreenProps {
    navigation: NativeStackNavigationProp<{}>;
    state: State;
}

const AnimesScreen = ({ navigation, state }: AnimesScreenProps) => {

    const RETRIEVE_QTY = 10;
    const { animes, endCursor, internalCursor } = state;
    const dispatch = useDispatch();

    const { data, loading } = useQuery(GetAllAnimes, {
        variables: {
            first: RETRIEVE_QTY,
            after: endCursor
        }
    });

    const storeAnimes = () => !loading && data && dispatch(saveAnimes(data));

    const loadMoreAnimes = () => dispatch(loadMore());

    const onItemPress = (anime: Anime) => () => navigation.push('AnimeDetail', { id: anime.id });

    useEffect(storeAnimes, [loading]);

    useEffect(() => {
        return () => dispatch(reset());
    }, []);

    const renderItem = (itemInfo: ListRenderItemInfo<Anime>): React.ReactElement => (
        <Card
            style={styles.item}
            onPress={onItemPress(itemInfo.item)}>
            <ImageOverlay
                style={styles.itemImage}
                source={{ uri: itemInfo.item.poster }}>
                <Text
                    style={styles.itemTitle}
                    category='h4'
                    status='control'>
                    {itemInfo.item.title}
                </Text>
                <View style={styles.itemFooter}>
                    <Button
                        style={styles.iconButton}
                        appearance='ghost'
                        status='control'
                    >
                        {itemInfo.item.categoryList?.join(', ')}
                    </Button>

                    <Button
                        style={[styles.iconButton, { position: 'absolute', right: 0 }]}
                        appearance='ghost'
                        status='control'
                        accessoryLeft={<Icon name='heart-outline' />}
                    > Save
                    </Button>
                </View>
            </ImageOverlay>
        </Card>
    );

    const memo = React.useMemo(() => renderItem, [animes]);

    return (
        <List
            onEndReached={loadMoreAnimes}
            data={animes}
            renderItem={memo}
        />
    );
}


const styles = StyleService.create({
    list: {
        flex: 1,
    },
    listContent: {
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
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
    itemDescription: {
        zIndex: 1,
        marginVertical: 16,
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

const MapStateToProps = (state: RootState) => ({
    state: state.animes
});

export default connect(MapStateToProps)(AnimesScreen);