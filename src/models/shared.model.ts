import { Anime } from "./anime.model";
import { Manga } from "./manga.model";

export interface Category {
    title: {
        en: string;
    }
}

export class Serie {
    id!: string
    isBookmarked!: boolean
    original: any;
    averageRating!: number;
    startDate!: string;
    titles!: {
        canonical: string;
    };
    description?: {
        en:
        string;
    } | undefined;

    categories!: {
        nodes: Category[];
    };

    constructor() {
        this.isBookmarked = false;
    }

    get title(): string {
        return this.titles.canonical
    }

    get categoryList(): any {
        return this.categories.nodes.map(category => category.title.en);
    }

    get year(): number {
        return new Date(this.startDate).getFullYear();
    }

    get rating(): number {
        return parseInt((this.averageRating / 10).toFixed());
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