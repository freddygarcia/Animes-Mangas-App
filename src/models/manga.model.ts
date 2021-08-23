import { Category, Serie } from "./shared.model";

export class Manga extends Serie {

    chapterCount!: number
    volumeCount!: number

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

    get chapters(): string {
        return this.chapterCount ? this.chapterCount.toString() : '?'
    }
    
    get volumes(): string {
        return this.volumeCount ? this.volumeCount.toString() : '?'
    }

    get poster(): string {
        return this.posterImage?.original.url;
    }



}