import React from 'react';
import { useDispatch } from 'react-redux';
import { Serie } from '../models/shared.model';

interface useBookmarkProps {
    bookmarkAction: Function
    unbookmarkAction: Function
}

const usetoogleBookmark = (props: useBookmarkProps) => {
    const dispatch = useDispatch();
    
    const bookmark = (serie: Serie) => dispatch(props.bookmarkAction(serie));
    const unbookmark = (id: string) => dispatch(props.unbookmarkAction(id));
    
    const toogleBookmark = (serie: Serie) => {
        if (serie.isBookmarked) {
            unbookmark(serie.id);
        } else {
            bookmark(serie.original);
        }
    }

    return toogleBookmark;
}

export default usetoogleBookmark;