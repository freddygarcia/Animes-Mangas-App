import { Anime } from "../models/anime.model"

type Action = { type : 'LOADING' } | { type : 'SUCCESS', payload : Anime[] } | { type : 'FAILURE', payload : any }

export interface State {
    loading: boolean
    error: boolean
    animes: Anime[]
    nextPage: number
}

export const actionCreator = {
    loading: () => ({ type: 'LOADING' }),
    failure: () => ({ type: 'FAILURE' }),
    success: (animes: Anime[], page: number) => ({
        type: 'SUCCESS',
        payload: { animes, page },
    }),
}

export const initialState = {
    loading: false,
    error: false,
    animes: [],
    nextPage: 1,
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
                animes: [...state.animes, ...action.payload],
                nextPage: state.nextPage + 1,
            }
        case 'FAILURE':
            return { ...state, loading: false, error: true }
    }
}