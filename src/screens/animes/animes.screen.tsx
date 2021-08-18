import React from 'react';
import { ListRenderItemInfo } from 'react-native';
import { Card, List, StyleService, Text, useStyleSheet } from '@ui-kitten/components';
import { Anime, AnimeQuery } from '../../models/anime.model';
import { useReducer } from 'react';
import { useQuery } from '@apollo/client'
import { GetAllAnimes } from '../../api/animes';
import Loading from '../../components/Loading';
import { initialState, reducer } from '../../reducers/anime.reducers';
import { ImageOverlay } from '../../components/ImageOverlay';

const AnimesScreen = () => {

    const INITIAL_LOAD = 10;
    const styles = useStyleSheet(theme);
    const [state, dispatch] = useReducer(reducer, initialState);
    const { data, loading }: AnimeQuery = useQuery(GetAllAnimes, {
        variables: {
            first: INITIAL_LOAD
        }
    });

    const animes = (data && data.anime.nodes) || [];

    if (loading) {
        return <Loading />
    }

    const renderItem = (itemInfo: ListRenderItemInfo<Anime>): React.ReactElement => (
        <Card>
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


export default AnimesScreen;