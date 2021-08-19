import { Anime } from "./anime.model";

export interface Query {
    data?: ApiResponse;
    loading: boolean;
}

export interface ApiResponse {
    rows: {
        nodes: Anime[]
        pageInfo: {
            startCursor: string;
            endCursor: string;
        }
    }
}