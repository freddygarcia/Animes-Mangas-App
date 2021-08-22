import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { List } from '@ui-kitten/components';

import { RootState } from '../../app/store';
import { GetAllMangas as defaultQuery, GetMangasByTitle as queryOnSearch } from '../../api/mangas';
import { useItemsHandler } from '../../hooks/items.hook';
import ListItem from '../../components/screen/ListItem';
import { Manga } from '../../models/manga.model';
import { save } from '../../reducers/manga.reducer';


interface MangasScreenProps {
    navigation: NativeStackNavigationProp<{}>;
    mangas: Manga[];
}

const MangasScreen = ({ navigation, mangas }: MangasScreenProps) => {

    const dispatch = useDispatch();
    const { query, loadMore } = useItemsHandler({
        defaultQuery,
        queryOnSearch
    });

    const storeResult = () => (!query.loading && query.data && dispatch(save(query.data.rows.nodes))) as unknown as void;

    const onItemPress = (manga: Manga) => () => navigation.push('MangaDetail', { item: manga });

    useEffect(storeResult, [query.data]);

    return (
        <List
            onEndReached={loadMore}
            data={mangas}
            renderItem={itemInfo => <ListItem itemInfo={itemInfo} onPress={onItemPress} />}
        />
    );
}

const MapStateToProps = (state: RootState) => ({
    mangas: state.mangas.mangas.map(anime => new Manga(anime)),
});

export default connect(MapStateToProps)(MangasScreen);