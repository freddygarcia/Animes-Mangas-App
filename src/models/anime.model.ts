export interface Anime {
    id: string;
    episodeCount: number;
    averageRating: number;
    description?: {
        en: string
    }
    youtubeTrailerVideoId: number;
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
    title: {
        en: string;
    }
}