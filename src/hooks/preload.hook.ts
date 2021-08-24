import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllAnimes } from "../api/animes";
import { NUM_OF_ITEMS_TO_RETRIEVE } from "../app/contants";
import { RootState } from "../app/store";
import { Anime } from "../models/anime.model";
import { Manga } from "../models/manga.model";
import { append as saveAnime } from "../reducers/anime.reducer";
import { save as saveManga } from "../reducers/manga.reducer";
import RNBootSplash from "react-native-bootsplash";
import { GetAllMangas } from "../api/mangas";
import { useNetInfo } from "@react-native-community/netinfo";

const usePreload = () => {

    const variables = {
        first: NUM_OF_ITEMS_TO_RETRIEVE
    }

    const dispatch = useDispatch();
    const netInfo = useNetInfo();
    const animeQuery = useQuery(GetAllAnimes, { variables });
    const mangaQuery = useQuery(GetAllMangas, { variables });

    const animes = useSelector<RootState>(state => state.animes.animes) as Anime[];
    const mangas = useSelector<RootState>(state => state.mangas.mangas) as Manga[];

    useEffect(() => {
        if (!netInfo.isInternetReachable)
            RNBootSplash.hide({ fade: true });
    }, [])

    useEffect(() => {
        if (!animeQuery.loading && animeQuery.data && animes.length == 0) {
            dispatch(saveAnime(animeQuery.data));
        }

        if (!mangaQuery.loading && mangaQuery.data && mangas.length == 0) {
            dispatch(saveManga(mangaQuery.data));
        }

    }, [animeQuery.loading, mangaQuery.loading]);

    useEffect(() => {
        if (animes.length > 0 && mangas.length > 0) {
            RNBootSplash.hide({ fade: true });
        }
    }, [animes, mangas]);

    console.log(animeQuery.loading)

    return {
        animes,
        mangas
    }
}

export default usePreload;