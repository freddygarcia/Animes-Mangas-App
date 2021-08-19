import React from 'react';
import { connect } from 'react-redux';
import { useQuery } from '@apollo/client'
import { useDispatch } from 'react-redux'
import { ListRenderItemInfo } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Card, List, StyleService, Text, useStyleSheet } from '@ui-kitten/components';

import { useEffect } from 'react';
import { RootState } from '../../app/store';
import { GetAllAnimes } from '../../api/animes';
import { Anime } from '../../models/anime.model';
import { Query } from '../../models/api.response';
import { ImageOverlay } from '../../components/ImageOverlay';
import { load, loadMore, State } from '../../reducers/anime.reducers';


interface AnimesScreenProps {
    navigation: NativeStackNavigationProp<{}>;
    state: State;
}

const AnimesScreen = ({ navigation, state }: AnimesScreenProps) => {

    const RETRIEVE_QTY = 10;
    const styles = useStyleSheet(theme);
    const { animes, endCursor } = state;
    const dispatch = useDispatch();

    const { data, loading }: Query = useQuery(GetAllAnimes, {
        variables: {
            first: RETRIEVE_QTY,
            after: endCursor
        }
    });

    const loadAnimes = () => {
        if (loading || data === undefined) return;
        dispatch(load(data));
    }

    const loadMoreAnimes: any = () => dispatch(loadMore());

    const onItemPress = (anime: Anime) => () => {
        navigation.push('AnimeDetail', { id: anime.id });
    };

    useEffect(() => {
        loadAnimes();
    }, [loading])

    const renderItem = (itemInfo: ListRenderItemInfo<Anime>): React.ReactElement => (
        <Card
            onPress={onItemPress(itemInfo.item)}
        >
            <ImageOverlay
                style={styles.poster}
                source={{ uri: itemInfo.item.posterImage.original.url }}>

                <Text
                    category='h2'
                    status='control'>
                    {itemInfo.item.titles.canonical}
                </Text>
                <Text
                    category='s1'
                    status='control'>
                    {itemInfo.item.categories.nodes.map(c => c.title.en).join(', ')}
                </Text>
                <Text
                    category='s1'
                    status='control'>
                    {itemInfo.item.episodeCount} Epidodes
                </Text>
            </ImageOverlay>
        </Card>
    );


    return (
        <List
            onEndReached={loadMoreAnimes}
            data={animes}
            renderItem={renderItem}
        />
    );
}


const theme = StyleService.create({
    container: {
        flex: 1,
    },
    poster: {
        paddingVertical: 24,
        alignItems: 'center',
    }
});

const MapStateToProps = (state: RootState) => ({
    state: state.animes
});

export default connect(MapStateToProps)(AnimesScreen);