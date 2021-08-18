
export interface AnimeQuery {
    data? : AnimeResponse;
    loading : boolean;
}

export interface AnimeResponse {
    anime: {
        nodes: Anime[]
    }
}

export interface Anime {
    episodeCount: number;
    averageRating: number;
    titles: {
        canonical: string;
    }
    categories: {
        nodes: Category[]
    }
    posterImage: {
        original: {
            url: string;
        }
    }
}

export interface Category {
    title : {
        en: string;
    }
}