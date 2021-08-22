import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NUM_OF_ITEMS_TO_RETRIEVE } from "../app/contants";
import { RootState } from "../app/store";
import { hide, loadMore as loadMore_, SearchState } from "../reducers/search.reducer";
import { useQuery } from "./api.hook";

interface ItemsProps {
    defaultQuery: any
    queryOnSearch: any
}

export const useItemsHandler = (props: ItemsProps) => {
    
    const dispatch = useDispatch();
    const search = useSelector<RootState>(state => state.search) as SearchState;

    const filters = {
        first: NUM_OF_ITEMS_TO_RETRIEVE,
        after: search.endCursor,
        title: search.criteria
    }

    const query = useQuery({
        defaultQuery: props.defaultQuery,
        queryOnSearch: props.queryOnSearch,
        variables: filters
    });

    const resetSearch = () => {
        dispatch(hide());
    }

    const loadMore = () => dispatch(loadMore_());

    useEffect(resetSearch, [])

    return {
        query,
        loadMore
    }
}