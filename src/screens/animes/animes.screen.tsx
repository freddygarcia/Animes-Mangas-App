import React from 'react';
import { ListRenderItemInfo } from 'react-native';
import { Card, List, StyleService, Text, useStyleSheet } from '@ui-kitten/components';
import { Anime } from '../../models/anime.model';
import { useQuery } from '@apollo/client'
import { GetAllAnimes } from '../../api/animes';
import { load, loadMore, State } from '../../reducers/anime.reducers';
import { ImageOverlay } from '../../components/ImageOverlay';
import { useEffect } from 'react';
import { Query } from '../../models/api.response';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../app/store';



interface AnimesScreenProps {
    navigation: NativeStackNavigationProp<{}>;
}

const AnimesScreen = ({ navigation }: AnimesScreenProps) => {
    const RETRIEVE_QTY = 10;
    const styles = useStyleSheet(theme);
    const { animes, endCursor } = useSelector<RootState>(state => state.animes) as State;
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


export default AnimesScreen;