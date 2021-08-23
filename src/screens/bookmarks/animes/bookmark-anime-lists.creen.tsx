import React from 'react';
import { useSelector, } from 'react-redux';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { List } from '@ui-kitten/components';

import { RootState } from '../../../app/store';
import ListItem from '../../../components/screen/BookmarkListItem';
import { Anime } from '../../../models/anime.model';
import { saveAnime as bookmarkAction, deleteAnime as unbookmarkAction } from '../../../reducers/bookmark.reducer';
import usetoggleBookmark from '../../../hooks/toggle-bookmark.hook';
import useQueryBookmarks from '../../../hooks/query-bookmark.hook';
import NothingToDisplay from '../../../components/NothingToDisplay';


interface AnimesScreenProps {
    navigation: NativeStackNavigationProp<{}>;
}

const BookmarkAnimesScreen = ({ navigation }: AnimesScreenProps) => {

    const toggleBookmark = usetoggleBookmark({ bookmarkAction, unbookmarkAction });
    const db = useSelector<RootState>(state => state.bookmark.animes) as object;
    const series = Object.values(db).map(anime => new Anime({ ...anime, isBookmarked: true }));
    const isSeaching = useSelector<RootState>(state => state.search.searching);
    const bookmarks = useQueryBookmarks({ series });

    const onItemPress = (anime: Anime) => () => navigation.navigate('AnimesBookmarkDetail', { item: anime });

    if (!bookmarks.length && !isSeaching)
        return <NothingToDisplay />;

    return (
        <List
            data={bookmarks}
            renderItem={itemInfo => <ListItem
                itemInfo={itemInfo}
                onBookmarkSave={toggleBookmark}
                onPress={onItemPress} />}
        />
    );
}

export default BookmarkAnimesScreen;