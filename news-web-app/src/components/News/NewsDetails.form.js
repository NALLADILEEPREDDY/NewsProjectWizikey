import React from 'react';
import Typography from '@material-ui/core/Typography';
import {CardContent, Card } from '@material-ui/core';
import PropTypes from 'prop-types';


export default function NewsDetails(props) {
  return (
    <Card>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.info}
        </Typography>
      </CardContent>
    </Card>
  );
}

NewsDetails.propTypes ={
  info: PropTypes.string.isRequired
}
