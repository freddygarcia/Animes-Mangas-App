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
    const styles = useStyleSheet(theme);
    const [state, dispatch] = useReducer(reducer, initialState);
    const { data, loading }: AnimeQuery = useQuery(GetAllAnimes, {
        variables: {
            first: 13
        }
    });

    const animes = (data && data.anime.nodes) || [];

    if (loading) {
        return <Loading />
    }

    const renderItem = (info: ListRenderItemInfo<Anime>): React.ReactElement => (
        <Card>
            <ImageOverlay
                style={styles.poster}
                source={{ uri: info.item.posterImage.original.url }}>
                <Text
                    category='h4'
                    status='control'>
                    {info.item.titles.canonical}
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