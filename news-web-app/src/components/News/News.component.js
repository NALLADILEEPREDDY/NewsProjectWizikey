import React from 'react';
import Headline from '../common/Headline.form';
import Image from '../common/Image.form';
import NewsDetails from './NewsDetails.form';
import {Box, Grid } from '@material-ui/core';
import PropTypes from 'prop-types';

export default function News(props) {
  function addToFavourite(source){    
      let haveData =props.favourites.filter(data => data.source.id === source.source.id && data.publishedAt === source.publishedAt)
      if(haveData.length === 0)
        props.addToFavourite(source)
    }
  function removeFromFavourite(source){
      let data = props.favourites.filter(data =>{
        if(data.id === source.id && data.publishedAt === source.publishedAt){
            return false
        }
        return true})
        props.removeFromFavourite(data)
    }
if(props.selectedNewsV !== null){
   const favourite = props.favourites.some(data => data.source.id === props.selectedNewsV.source.id && data.publishedAt === props.selectedNewsV.publishedAt)
  return (     
       <Grid>
            <Grid item xs={12} sm={12}>
            <Headline
                  source={props.selectedNewsV}
                  favourite = {favourite}
                  addToFavourite={addToFavourite}
                  removeFromFavourite = {removeFromFavourite} 
                  headline={props.selectedNewsV.title} />
            </Grid>
            {props.selectedNewsV.urlToImage !== 'null' &&
            <Grid item xs={12} sm={12}>
               <Image   article={props.selectedNewsV}/>
            </Grid>}
            <Grid item xs={12} sm={12}>
               <NewsDetails info = {props.selectedNewsV.content}/>
            </Grid>
       </Grid>
  );
}
  else{
  return(<Box>Select News</Box>)
  }
}

News.propTypes ={
  selectedNewsV: PropTypes.object,
  favourite: PropTypes.bool,
  removeFromFavourite: PropTypes.func,
  addToFavourite: PropTypes.func
}