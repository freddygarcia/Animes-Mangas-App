import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NUM_OF_ITEMS_TO_RETRIEVE } from "../app/contants";
import { RootState } from "../app/store";
import { cancelLoadMore as cancelLoadMore_, hide, loadMore as loadMore_, SearchState } from "../reducers/search.reducer";
import { useQuery, useQueryResult } from "./api.hook";

interface ItemsProps {
    cursorRef: string | null
    queries: {
        defaultQuery: any
        queryOnSearch: any
    }
    actions: {
        save: Function
        append: Function
    }
}

export const useItemsHandler = (props: ItemsProps) => {

    const dispatch = useDispatch();
    const search = useSelector<RootState>(state => state.search) as SearchState;

    const filters = {
        first: NUM_OF_ITEMS_TO_RETRIEVE,
        after: props.cursorRef,
        title: search.criteria
    }

    const query = useQuery({
        defaultQuery: props.queries.defaultQuery,
        queryOnSearch: props.queries.queryOnSearch,
        variables: filters
    });

    const resetSearch = () => {
        dispatch(hide());
    }

    const checkQueryIsValid = (query: useQueryResult) => Boolean(!query.loading && query.data);

    const loadMore = () => dispatch(loadMore_());

    useEffect(() => {
        if (checkQueryIsValid(query) && search.searching && !search.loadingMore) {
            dispatch(props.actions.save(query.data));
        }
    }, [query.data]);

    useEffect(() => {
        if (checkQueryIsValid(query) && search.loadingMore) {
            dispatch(props.actions.append(query.data));
            dispatch(cancelLoadMore_());
        }
    }, [query.data]);

    useEffect(resetSearch, [])

    return {
        query,
        search,
        loadMore,
    }
}