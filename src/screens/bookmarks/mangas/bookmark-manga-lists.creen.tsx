import React from 'react';
import { useSelector, } from 'react-redux';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { List } from '@ui-kitten/components';

import { RootState } from '../../../app/store';
import ListItem from '../../../components/screen/BookmarkListItem';
import { saveManga as bookmarkAction, deleteManga as unbookmarkAction } from '../../../reducers/bookmark.reducer';
import usetoogleBookmark from '../../../hooks/toogle-bookmark.hook';
import { Manga } from '../../../models/manga.model';
import useQueryBookmarks from '../../../hooks/query-bookmark.hook';


interface MangasScreenProps {
    navigation: NativeStackNavigationProp<{}>;
}

const BookmarkMangasScreen = ({ navigation }: MangasScreenProps) => {

    const toogleBookmark = usetoogleBookmark({ bookmarkAction, unbookmarkAction });
    const db = useSelector<RootState>(state => state.bookmark.mangas) as object;
    const series = Object.values(db).map(manga => new Manga({ ...manga, isBookmarked: true }));
    const bookmarks = useQueryBookmarks({ series });

    const onItemPress = (manga: Manga) => () => navigation.navigate('MangasBookmarkDetail', { item: manga });

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

export default BookmarkMangasScreen;