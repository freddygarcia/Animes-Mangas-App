import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { List } from '@ui-kitten/components';

import { RootState } from '../../app/store';
import { GetAllAnimes as defaultQuery, GetAnimesByTitle as queryOnSearch } from '../../api/animes';
import { useItemsHandler } from '../../hooks/items.hook';
import ListItem from '../../components/screen/ListItem';
import { Anime } from '../../models/anime.model';
import { save } from '../../reducers/anime.reducer';


interface AnimesScreenProps {
    navigation: NativeStackNavigationProp<{}>;
    animes: Anime[];
}

const AnimesScreen = ({ navigation, animes }: AnimesScreenProps) => {

    const dispatch = useDispatch();
    const { query, loadMore } = useItemsHandler({
        defaultQuery,
        queryOnSearch
    });

    const storeResult = () => (!query.loading && query.data && dispatch(save(query.data.rows.nodes))) as unknown as void;

    const onItemPress = (anime: Anime) => () => navigation.push('AnimeDetail', { item: anime });

    useEffect(storeResult, [query.data]);

    return (
        <List
            onEndReached={loadMore}
            data={animes}
            renderItem={itemInfo => <ListItem itemInfo={itemInfo} onPress={onItemPress} />}
        />
    );
}

const MapStateToProps = (state: RootState) => ({
    animes: state.animes.animes.map(anime => new Anime(anime)),
});

export default connect(MapStateToProps)(AnimesScreen);