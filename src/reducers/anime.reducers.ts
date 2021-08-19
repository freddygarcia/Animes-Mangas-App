import { Anime } from "../models/anime.model"
import { ApiResponse } from "../models/api.response"

type Action = { type: 'LOADING' } | { type: 'SUCCESS', payload: ApiResponse } | { type: 'LOAD_MORE' }

export interface State {
    loading: boolean
    error: boolean
    animes: Anime[]
    internalCursor: string | null
    endCursor: string | null
}

export const actionCreator = {
    loading: (): Action => ({ type: 'LOADING' }),
    loadMore: (): Action => ({ type: 'LOAD_MORE' }),
    load: (animes: ApiResponse): Action => ({
        type: 'SUCCESS',
        payload: animes,
    }),
}

export const initialState = {
    loading: false,
    error: false,
    animes: [],
    internalCursor: null,
    endCursor: null,
}

export function reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'LOADING':
            return { ...state, loading: true, error: false }
        case 'SUCCESS':
            return {
                ...state,
                loading: false,
                error: false,
                animes: [...state.animes, ...action.payload.rows.nodes],
                endCursor: null,
                internalCursor: action.payload.rows.pageInfo.endCursor,
            }
        case 'LOAD_MORE':
            return { ...state, endCursor: state.internalCursor }
    }
}