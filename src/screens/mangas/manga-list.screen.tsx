import React from 'react';
import { connect } from 'react-redux';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { List } from '@ui-kitten/components';

import { RootState } from '../../app/store';
import { GetAllMangas as defaultQuery, GetMangasByTitle as queryOnSearch } from '../../api/mangas';
import { useQueryHandler } from '../../hooks/query.hook';
import ListItem from '../../components/screen/ListItem';
import { Manga } from '../../models/manga.model';
import { save, append, MangaState } from '../../reducers/manga.reducer';
import { LIST_ITEMS_THRESHOLD } from '../../app/contants';
import usetoggleBookmark from '../../hooks/toggle-bookmark.hook';
import { saveManga as bookmarkAction, deleteManga as unbookmarkAction } from '../../reducers/bookmark.reducer';
import { useNetInfo } from "@react-native-community/netinfo";
import NoInternetConnection from '../../components/NoIntenetConnection';

interface MangasScreenProps {
    navigation: NativeStackNavigationProp<{}>;
    state: MangaState;
}

const MangasScreen = ({ navigation, state }: MangasScreenProps) => {

    const cursorRef = state.endCursor;
    const bookmark = usetoggleBookmark({ bookmarkAction, unbookmarkAction});
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

    const onItemPress = (manga: Manga) => () => navigation.push('MangaDetail', { item: manga });

    if (!netInfo.isInternetReachable) {
        if (search.searching && search.criteria) return <NoInternetConnection />
        if (state.mangas.length === 0) return <NoInternetConnection />
    }

    return (
        <List
            onEndReached={loadMore}
            onEndReachedThreshold={LIST_ITEMS_THRESHOLD}
            data={state.mangas}
            renderItem={itemInfo => <ListItem
                itemInfo={itemInfo}
                onBookmarkSave={bookmark}
                onPress={onItemPress} />}
        />
    );
}

const MapStateToProps = (state: RootState) => ({
    state: {
        ...state.mangas,
        mangas: state.mangas.mangas.map(manga => (new Manga({ ...manga, isBookmarked: Boolean(state.bookmark.mangas[manga.id] !== undefined) })))
    },
});

export default connect(MapStateToProps)(MangasScreen);