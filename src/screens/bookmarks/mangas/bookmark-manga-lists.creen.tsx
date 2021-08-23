import React from 'react';
import { useSelector, } from 'react-redux';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { List } from '@ui-kitten/components';

import { RootState } from '../../../app/store';
import ListItem from '../../../components/screen/BookmarkListItem';
import { saveManga as bookmarkAction, deleteManga as unbookmarkAction } from '../../../reducers/bookmark.reducer';
import usetoogleBookmark from '../../../hooks/toogle-bookmark.hook';
import { Manga } from '../../../models/manga.model';


interface MangasScreenProps {
    navigation: NativeStackNavigationProp<{}>;
}

const BookmarkMangasScreen = ({ navigation }: MangasScreenProps) => {

    const bookmark = usetoogleBookmark({ bookmarkAction, unbookmarkAction });
    const mangasDict = useSelector<RootState>(state => state.bookmark.mangas) as object;
    const mangas = Object.values(mangasDict).map(manga => new Manga({ ...manga, isBookmarked: true }));

    const onItemPress = (manga: Manga) => () => navigation.navigate('MangasBookmarkDetail', { item: manga });

    return (
        <List
            data={mangas}
            renderItem={itemInfo => <ListItem
                itemInfo={itemInfo}
                onBookmarkSave={bookmark}
                onPress={onItemPress} />}
        />
    );
}

export default BookmarkMangasScreen;