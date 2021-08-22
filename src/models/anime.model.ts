import { Category } from "./shared.model";

export class Anime {

    id!: string;
    episodeCount!: number;
    averageRating!: number;
    episodeLength!: number;
    startDate!: string;
    description?: {
        en:
        string;
    } | undefined;

    youtubeTrailerVideoId!: number;
    titles!: {
        canonical: string;
    };
    categories!: {
        nodes: Category[];
    };
    posterImage!: {
        original: {
            url: string;
        };
    };

    constructor(obj: Anime) {
        Object.assign(this, obj);
    }

    get rating(): number {
        return parseInt((this.averageRating / 20).toFixed());
    }

    get trailer(): string | null {
        return this.youtubeTrailerVideoId ? `https://www.youtube.com/watch?v=${this.youtubeTrailerVideoId}` : null;
    }

    get title(): string {
        return this.titles.canonical
    }

    get categoryList(): any {
        return this.categories.nodes.map(category => category.title.en);
    }

    get poster(): string {
        return this.posterImage?.original.url;
    }

    get year(): number {
        return new Date(this.startDate).getFullYear();
    }

    get numberOfEpisodes(): string {
        return this.episodeCount ? this.episodeCount.toString() : '?';
    }

    get episodeDuration(): string {
        if (this.episodeLength === null) return '?';

        if (this.episodeLength < 60) {
            return `${this.episodeLength} segs`;
        }

        const minutes = Math.floor(this.episodeLength / 60);
        const seconds = this.episodeLength % 60;

        if (minutes > 1) {
            return `${minutes} ${minutes > 1 ? 'mins' : 'min'}`;
        }

        return `${seconds} ${seconds > 1 ? 'secs' : 'sec'}`;
    }
}