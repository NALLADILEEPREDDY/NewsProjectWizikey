import React from 'react'
import { Box, Typography, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
    root:{
        color: 'red'
    }
})
export default function ErrorMessage(props) {
    const classes = useStyles();
    return (
        <Box>
            <Typography className={classes.root} variant="caption">{props.message}</Typography>
        </Box>
    )
}

ErrorMessage.propTypes = {
   message :  PropTypes.string.isRequired
}

