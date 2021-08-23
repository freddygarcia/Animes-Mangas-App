import { Category, Serie } from "./shared.model";

export class Anime extends Serie {

    episodeCount!: number;
    episodeLength!: number;

    youtubeTrailerVideoId!: number;

    posterImage!: {
        original: {
            url: string;
        };
    };

    constructor(obj: any) {
        super();

        this.original = obj;    
        Object.assign(this, obj);
    }

    get trailer(): string | null {
        return this.youtubeTrailerVideoId ? `https://www.youtube.com/watch?v=${this.youtubeTrailerVideoId}` : null;
    }

    get poster(): string {
        return this.posterImage?.original.url;
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