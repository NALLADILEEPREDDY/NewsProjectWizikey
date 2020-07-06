import React from 'react';
import Source  from '../Sources/Source.container'
import Company from '../Organization/Company.container';
import News from '../News/News.container';
import { Grid, Paper, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        height: '100vh'
      },
      paper: {
        height: '100%',        
      },
      grid:{
          height: '100%',
          direction: 'çolumn'
      },
      control: {
        padding: theme.spacing(2),
      },
  }));
export default function MainScreen(){
    const classes = useStyles()
    return(        
      <Paper className={classes.paper}>
      <Grid className="grid" container>
        <Grid className={classes.grid} item xs={12} sm={2}>
         <Source/>
        </Grid>
        <Grid className={classes.grid} item xs={12} sm={4}>
         <Company/>
        </Grid>
        <Grid className={classes.grid} item xs={12} sm={6}>
         <News/>
        </Grid>
      </Grid>
    </Paper> 
    );
}