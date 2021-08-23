import React from 'react';
import { useSelector, } from 'react-redux';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { List } from '@ui-kitten/components';

import { RootState } from '../../../app/store';
import ListItem from '../../../components/screen/BookmarkListItem';
import { Anime } from '../../../models/anime.model';
import { saveAnime as bookmarkAction, deleteAnime as unbookmarkAction } from '../../../reducers/bookmark.reducer';
import usetoogleBookmark from '../../../hooks/toogle-bookmark.hook';
import useQueryBookmarks from '../../../hooks/query-bookmark.hook';


interface AnimesScreenProps {
    navigation: NativeStackNavigationProp<{}>;
}

const BookmarkAnimesScreen = ({ navigation }: AnimesScreenProps) => {

    const toogleBookmark = usetoogleBookmark({ bookmarkAction, unbookmarkAction });
    const db = useSelector<RootState>(state => state.bookmark.animes) as object;
    const series = Object.values(db).map(anime => new Anime({ ...anime, isBookmarked: true }));
    const bookmarks = useQueryBookmarks({ series });

    const onItemPress = (anime: Anime) => () => navigation.navigate('AnimesBookmarkDetail', { item: anime });

    return (
        <List
            data={bookmarks}
            renderItem={itemInfo => <ListItem
                itemInfo={itemInfo}
                onBookmarkSave={toogleBookmark}
                onPress={onItemPress} />}
        />
    );
}

export default BookmarkAnimesScreen;