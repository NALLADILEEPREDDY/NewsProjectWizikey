import React from 'react'
import CardMedia from '@material-ui/core/CardMedia';
import { Card } from '@material-ui/core';
import PropTypes from 'prop-types';



export default function Image(props) {
  const {article} = props;
      return (
      <Card>
        <CardMedia   
          component="img"
          alt="Headline Image"          
          image={article.urlToImage}
          title={article.title}/>
        </Card>
    )
}
Image.propTypes ={
  article: PropTypes.object
}
