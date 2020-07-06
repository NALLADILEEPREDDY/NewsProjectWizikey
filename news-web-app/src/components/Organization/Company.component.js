import React from 'react';
import CompanyForm from './Company.form.js';
import ErrorText from '../common/errorMessage';
import Loading from '../common/loading.js';
import { Box } from '@material-ui/core';
import PropTypes from 'prop-types';


export default function Company(props) {
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
  function onRowClickHandler(source){
    props.selectedNews(source);
  }
  if(props.selectedChannel !== 'Company' && props.articles.length !== 0)
    return (
        <CompanyForm
          onRowClickHandler= {onRowClickHandler}
          selectedChannel={props.selectedChannel} 
          favourites ={props.favourites}
          articles={props.articles}
          addToFavourite={addToFavourite}
          removeFromFavourite = {removeFromFavourite}/>);
  else if(props.headlineFetchError === false &&  props.selectedChannel !== 'Company')
    return(<Loading/>);
  else if(props.headlineFetchError !== false)
    return(<ErrorText message={'Error Fetching Headlines'}/>);
  else
      return(<Box>Select Channel</Box>)
}

Company.propTypes ={
  selectedChannel: PropTypes.string.isRequired,
  articles: PropTypes.array,
  source: PropTypes.object,
  selectedNews: PropTypes.func,
  removeFromFavourite: PropTypes.func,
  addToFavourite: PropTypes.func
}
