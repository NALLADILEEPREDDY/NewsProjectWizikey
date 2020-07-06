import React from 'react';
import {Box, Table, TableRow, TableBody, TableCell, TableHead} from '@material-ui/core';
import Image from '../common/Image.form';
import Headline from '../common/Headline.form';
import Company from './Company.component';
import PropTypes from 'prop-types';


export default function CompanyForm(props) {
    return (
        <Box>
            <Table>
            {props.selectedChannel !== 'Company' && <TableHead><TableRow>
                <TableCell>{props.selectedChannel}</TableCell></TableRow></TableHead>}
                <TableBody>                    
                {props.articles.map(article => {
                    const favourite = props.favourites.some(data => data.source.id === article.source.id && data.title === article.title)
                    return(<TableRow key ={article.publishedAt+article.title} onClick ={() => props.onRowClickHandler(article)}>
                        {article.urlToImage !== "null"?
                        <TableCell width="30%">
                            <Image article={article}/>
                        </TableCell>:<TableCell></TableCell>}
                        <TableCell>
                            <Headline width="70%"
                                favourite = {favourite}
                                addToFavourite={props.addToFavourite}
                                removeFromFavourite = {props.removeFromFavourite} 
                                headline={article.title} 
                                time={article.publishedAt}
                                source={article}
                            />
                        </TableCell>
                    </TableRow>)})}
                </TableBody>
            </Table>
        </Box>
    )
}

Company.propTypes ={
    articles: PropTypes.object,
    selectedChannel: PropTypes.string.isRequired,
    removeFromFavourite: PropTypes.func,
    addToFavourite: PropTypes.func
}