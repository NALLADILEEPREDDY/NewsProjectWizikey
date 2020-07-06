import React, { Component } from 'react'
import {Box, Button, Typography } from '@material-ui/core';
import SourceForm from './Source.form';
import PropTypes from 'prop-types';
import ErrorMessage from '../common/errorMessage'

export default class Source extends Component{
    constructor(props) {
        super(props)
        this.state = {
           toggleSource: false 
        }
    }
    toggleSource = ()=> {
        this.setState(prevState => {return{toggleSource:!prevState.toggleSource}});
    }
    fetchHeadlines = (event) =>{
        this.props.fetchHeadlines(event.id)
        this.props.selectedChannel(event.name)
    }
    render(){        
        let showAllSources = null;
        showAllSources = (this.state.toggleSource && !this.props.sourceFetchError)  && <SourceForm 
                                                        fetchHeadlines ={this.fetchHeadlines}
                                                        sources = {this.props.sources}/>
        if(!this.props.sourceFetchError){
            return(
                <Box>
                    <Typography variant="h6" component="h5">Sources</Typography>
                    <Button variant="contained" color="primary" onClick = {this.toggleSource}>All Sources</Button>
                    {showAllSources}
                    <Box>{`Favourites ${this.props.favourites !== undefined?this.props.favourites.length: 0}`}</Box>               
                </Box>
            );
        }
        else{
            return(<ErrorMessage message={"Error Fetching sources"}/>);
        }
    }
}
Source.propTypes ={
    fetchHeadlines: PropTypes.func,
    selectedChannel: PropTypes.func,
    sources: PropTypes.array,
    favourites: PropTypes.array
};