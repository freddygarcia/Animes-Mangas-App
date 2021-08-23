import React from 'react';
import { useSelector, } from 'react-redux';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { List } from '@ui-kitten/components';

import { RootState } from '../../../app/store';
import ListItem from '../../../components/screen/BookmarkListItem';
import { Anime } from '../../../models/anime.model';
import { saveAnime as bookmarkAction, deleteAnime as unbookmarkAction } from '../../../reducers/bookmark.reducer';
import usetoogleBookmark from '../../../hooks/toogle-bookmark.hook';


interface AnimesScreenProps {
    navigation: NativeStackNavigationProp<{}>;
}

const BookmarkAnimesScreen = ({ navigation }: AnimesScreenProps) => {

    const bookmark = usetoogleBookmark({ bookmarkAction, unbookmarkAction });
    const animesDict = useSelector<RootState>(state => state.bookmark.animes) as Anime[];
    const animes = Object.values(animesDict).map(anime => new Anime({ ...anime, isBookmarked: true }));

    const onItemPress = (anime: Anime) => () => navigation.navigate('AnimesBookmarkDetail', { item: anime });

    return (
        <List
            data={animes}
            renderItem={itemInfo => <ListItem
                itemInfo={itemInfo}
                onBookmarkSave={bookmark}
                onPress={onItemPress} />}
        />
    );
}

export default BookmarkAnimesScreen;