import React from 'react';
import { Button, Icon, ButtonProps } from "@ui-kitten/components";
import { Serie } from "../../models/shared.model";

interface BookmarkButtonProps extends ButtonProps {
    label?: string
    item: Serie
    onBookmarkSave: Function
}

const BookmarkButton = (props: BookmarkButtonProps) => {

    return (
        <Button
            style={props.style}
            appearance='ghost'
            size={props.size || 'giant'}
            status={props.status || 'control'}
            onPress={() => props.onBookmarkSave(props.item)}
            accessoryLeft={<Icon name={(props.item.isBookmarked) ? 'heart' : 'heart-outline'} />}
        > {props.label}
        </Button>
    )
}

export default BookmarkButton;