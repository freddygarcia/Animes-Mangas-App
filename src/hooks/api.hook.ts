import { useLazyQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { ApiResponse } from "../models/shared.model";
import { SearchState } from "../reducers/search.reducer";


interface useQueryProps {
    defaultQuery: any
    queryOnSearch: any
    variables: any
}

export interface useQueryResult {
    data: ApiResponse
    loading: boolean
}

export const useQuery = (props: useQueryProps): useQueryResult => {

    const search = useSelector<RootState>(state => state.search) as SearchState;
    const [query, setQuery] = useState<any>(props.defaultQuery);
    const queryOnSearch = useLazyQuery(query);

    const [F, status] = queryOnSearch;

    const callAPI = () => {
        F({ variables: props.variables })
    };

    useEffect(() => {
        if (search.searching && query == props.queryOnSearch) return;
        if (!search.searching && query == props.defaultQuery) return;

        if (!search.searching || (search.searching && search.criteria)) {
            setQuery(search.searching ? props.queryOnSearch : props.defaultQuery)
        }
    }, [search.searching, search.criteria]);

    useEffect(() => {
        if (search.criteria) {
            callAPI();
        }
    }, [search.criteria]);

    useEffect(() => {
        if (search.loadingMore) {
            callAPI();
        }
    }, [search.loadingMore])

    return {
        data: status.data,
        loading: status.loading
    };
}