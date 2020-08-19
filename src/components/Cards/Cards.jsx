import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';

import styles from './Cards.module.css';

const Cards = (props) => {
  const { confirmed, recovered, deaths, lastUpdate } = props.data;

  if (!confirmed) {
    return 'Loading...';
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify='center'>
        <Grid item component={Card}>
          <CardContent>
            <Typography color='textSecondary' gutterBottom>
              Infected
            </Typography>
            <Typography variant='h5'>
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2.5}
                seperator=','
              />
            </Typography>
            <Typography color='textSecondary'>
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant='body2'>
              Number of active cases of COVID-19
            </Typography>
          </CardContent>
        </Grid>

        <Grid item component={Card}>
          <CardContent>
            <Typography color='textSecondary' gutterBottom>
              Infeted
            </Typography>
            <Typography variant='h5'>Death</Typography>
            <Typography color='textSecondary'>Number of death</Typography>
            <Typography variant='body2'>Active Cases</Typography>
          </CardContent>
        </Grid>

        <Grid item component={Card}>
          <CardContent>
            <Typography color='textSecondary' gutterBottom>
              Recovered
            </Typography>
            <Typography variant='h5'>Number of recoveries</Typography>
            <Typography color='textSecondary'>REAL DATA</Typography>
            <Typography variant='body2'>Active Cases</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
