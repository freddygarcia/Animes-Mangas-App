import { Anime } from "./anime.model";
import { Manga } from "./manga.model";

export interface Category {
    title: {
        en: string;
    }
}


export interface ApiResponse {
    rows: {
        nodes: Anime[] | Manga[]
        pageInfo: {
            startCursor: string;
            endCursor: string;
        }
    }
}