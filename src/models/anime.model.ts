
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
    posterImage: {
        original: {
            url: string;
        }
    }
}
