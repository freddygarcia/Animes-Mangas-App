import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { Serie } from '../models/shared.model';
import { SearchState } from '../reducers/search.reducer';

interface useQueryBookmarksProps {
    series: Serie[]
}

const useQueryBookmarks = (props: useQueryBookmarksProps) => {

    const search = useSelector<RootState>(state => state.search) as SearchState;
    const db = useSelector<RootState>(state => state.bookmark);
    const [bookmarks, setBookmarks] = useState(props.series);

    const filtered = () => props.series.filter((serie) => serie.title.includes(search.criteria)); 

    useEffect(() => {
        if (search.searching) {
            setBookmarks(filtered());
        }
    }, [search.searching, search.criteria]);

    useEffect(() => {
        if (!search.searching) {
            setBookmarks(props.series);
        }
    }, [search.searching])

    useEffect(() => {
        setBookmarks(filtered());
    }, [db])

    return bookmarks;
}

export default useQueryBookmarks;