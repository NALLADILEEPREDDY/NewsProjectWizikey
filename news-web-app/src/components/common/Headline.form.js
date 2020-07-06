import React from 'react';
import Card from '@material-ui/core/Card';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { IconButton, CardHeader } from '@material-ui/core';
import PropTypes from 'prop-types';


export default function Headline(props) {
  const {headline, time, favourite, source, addToFavourite, removeFromFavourite} = props
  return (
    <Card>
      <CardHeader title={headline} 
                  subheader={time}
                  action={favourite?<IconButton onClick={() => {removeFromFavourite(source)}}><FavoriteIcon/></IconButton>:
                  <IconButton onClick={() => {addToFavourite(source)}}><FavoriteBorderIcon/></IconButton>}/>
    </Card>);
}

Headline.propTypes ={
  headline: PropTypes.string.isRequired,
  time: PropTypes.string,
  removeFromFavourite: PropTypes.func,
  addToFavourite: PropTypes.func,
  source: PropTypes.object,
  favourite: PropTypes.bool
}
