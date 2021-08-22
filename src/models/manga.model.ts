import { Category } from "./shared.model";

export class Manga {

    id!: string;
    averageRating!: number;
    startDate!: string;
    chapterCount!: number
    description?: {
        en:
        string;
    } | undefined;

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

    constructor(obj: Manga) {
        Object.assign(this, obj);
    }

    get rating(): number {
        return parseInt((this.averageRating / 10).toFixed());
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

}