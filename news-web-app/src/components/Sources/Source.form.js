import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 300,
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 600,
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
}));

export default function SourceForm(props) {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {props.sources.map((source) => (
        <ListItem  key = {source.id} button onClick={()=>props.fetchHeadlines(source)}>
          <ListItemText primary={source.name} />
        </ListItem>))}
        <Divider/>
    </List>
  );
}
SourceForm.propTypes ={
  source: PropTypes.object,
  fetchHeadlines: PropTypes.func
}
