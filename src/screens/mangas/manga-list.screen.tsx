import React from 'react';
import { connect } from 'react-redux';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { List } from '@ui-kitten/components';

import { RootState } from '../../app/store';
import { GetAllMangas as defaultQuery, GetMangasByTitle as queryOnSearch } from '../../api/mangas';
import { useItemsHandler } from '../../hooks/items.hook';
import ListItem from '../../components/screen/ListItem';
import { Manga } from '../../models/manga.model';
import { save, append, MangaState } from '../../reducers/manga.reducer';
import { LIST_ITEMS_THRESHOLD } from '../../app/contants';
import usetoggleBookmark from '../../hooks/toggle-bookmark.hook';
import { saveManga as bookmarkAction, deleteManga as unbookmarkAction } from '../../reducers/bookmark.reducer';

interface MangasScreenProps {
    navigation: NativeStackNavigationProp<{}>;
    mangas: MangaState;
}

const MangasScreen = ({ navigation, mangas }: MangasScreenProps) => {

    const cursorRef = mangas.endCursor;
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

    const onItemPress = (manga: Manga) => () => navigation.push('MangaDetail', { item: manga });

    return (
        <List
            onEndReached={loadMore}
            onEndReachedThreshold={LIST_ITEMS_THRESHOLD}
            data={mangas.mangas}
            renderItem={itemInfo => <ListItem
                itemInfo={itemInfo}
                onBookmarkSave={bookmark}
                onPress={onItemPress} />}
        />
    );
}

const MapStateToProps = (state: RootState) => ({
    mangas: {
        ...state.mangas,
        mangas: state.mangas.mangas.map(manga => (new Manga({ ...manga, isBookmarked: Boolean(state.bookmark.mangas[manga.id] !== undefined) })))
    },
});

export default connect(MapStateToProps)(MangasScreen);