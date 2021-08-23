import React from 'react';
import { connect, } from 'react-redux';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { List } from '@ui-kitten/components';

import { RootState } from '../../app/store';
import { GetAllAnimes as defaultQuery, GetAnimesByTitle as queryOnSearch } from '../../api/animes';
import { useItemsHandler } from '../../hooks/items.hook';
import ListItem from '../../components/screen/ListItem';
import { Anime } from '../../models/anime.model';
import { AnimeState, append, save } from '../../reducers/anime.reducer';
import { LIST_ITEMS_THRESHOLD } from '../../app/contants';
import { saveAnime as bookmarkAction, deleteAnime as unbookmarkAction } from '../../reducers/bookmark.reducer';
import usetoggleBookmark from '../../hooks/toggle-bookmark.hook';


interface AnimesScreenProps {
    navigation: NativeStackNavigationProp<{}>;
    animes: AnimeState;
}

const AnimesScreen = ({ navigation, animes }: AnimesScreenProps) => {

    const cursorRef = animes.endCursor;
    const bookmark = usetoggleBookmark({ bookmarkAction, unbookmarkAction});
    const { loadMore } = useItemsHandler({
        cursorRef,
        queries: {
            defaultQuery, queryOnSearch
        },
        actions: {
            save, append
        }
    });

    const onItemPress = (anime: Anime) => () => navigation.push('AnimeDetail', { item: anime });

    return (
        <List
            onEndReached={loadMore}
            onEndReachedThreshold={LIST_ITEMS_THRESHOLD}
            data={animes.animes}
            renderItem={itemInfo => <ListItem
                itemInfo={itemInfo}
                onBookmarkSave={bookmark}
                onPress={onItemPress} />}
        />
    );
}

const MapStateToProps = (state: RootState) => ({
    animes: {
        ...state.animes,
        animes: state.animes.animes.map(anime => (new Anime({ ...anime, isBookmarked: Boolean(state.bookmark.animes[anime.id] !== undefined) })))
    },
});

export default connect(MapStateToProps)(AnimesScreen);