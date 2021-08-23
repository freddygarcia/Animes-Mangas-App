import React from 'react';
import { connect, } from 'react-redux';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { List } from '@ui-kitten/components';

import { RootState } from '../../app/store';
import { GetAllAnimes as defaultQuery, GetAnimesByTitle as queryOnSearch } from '../../api/animes';
import { useQueryHandler } from '../../hooks/query.hook';
import ListItem from '../../components/screen/ListItem';
import { Anime } from '../../models/anime.model';
import { AnimeState, append, save } from '../../reducers/anime.reducer';
import { LIST_ITEMS_THRESHOLD } from '../../app/contants';
import { saveAnime as bookmarkAction, deleteAnime as unbookmarkAction } from '../../reducers/bookmark.reducer';
import usetoggleBookmark from '../../hooks/toggle-bookmark.hook';
import { useNetInfo } from "@react-native-community/netinfo";
import NoInternetConnection from '../../components/NoIntenetConnection';


interface AnimesScreenProps {
    navigation: NativeStackNavigationProp<{}>;
    state: AnimeState;
}

const AnimesScreen = ({ navigation, state }: AnimesScreenProps) => {

    const cursorRef = state.endCursor;
    const bookmark = usetoggleBookmark({ bookmarkAction, unbookmarkAction });
    const netInfo = useNetInfo();
    const { search, loadMore } = useQueryHandler({
        cursorRef,
        queries: {
            defaultQuery, queryOnSearch
        },
        actions: {
            save, append
        }
    });

    const onItemPress = (anime: Anime) => () => navigation.push('AnimeDetail', { item: anime });

    if (!netInfo.isInternetReachable) {
        if (search.searching && search.criteria) return <NoInternetConnection />
        if (state.animes.length === 0) return <NoInternetConnection />
    }

    return (
        <List
            onEndReached={loadMore}
            onEndReachedThreshold={LIST_ITEMS_THRESHOLD}
            data={state.animes}
            renderItem={itemInfo => <ListItem
                itemInfo={itemInfo}
                onBookmarkSave={bookmark}
                onPress={onItemPress} />}
        />
    );
}

const MapStateToProps = (state: RootState) => ({
    state: {
        ...state.animes,
        animes: state.animes.animes.map(anime => (new Anime({ ...anime, isBookmarked: Boolean(state.bookmark.animes[anime.id] !== undefined) })))
    },
});

export default connect(MapStateToProps)(AnimesScreen);