import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';

export default function ZCircularProgress(props) {
    return (
        <CircularProgress {...props}>
            {props.children}
        </CircularProgress>
    )
}
