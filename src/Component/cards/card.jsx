import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import './card.css';
import c19 from '../c19.png';
import { MdFavorite } from 'react-icons/md';
import {MdBugReport} from 'react-icons/md';
import {GiDeathSkull} from 'react-icons/gi';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if (!confirmed) {
        return "Loading...";
    }
    //console.log(confirmed)
    return (<div className='card'>
        <div className='maj'>
            <img className='img' src={c19} />
        </div>
        <div className='container'>
            <Grid container spacing={3} justify="center">
                <Grid xs={12} md={3} component={Card}>
                    <CardContent className='reco'>
                        <Typography color="textSecondary" >Infected</Typography>
                         <MdBugReport/>
                        <Typography variant="h5"><CountUp start={0} end={confirmed.value} duration={2.5} separator=',' /></Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2' >Number of active cases of COVID-19.</Typography>
                    </CardContent>
                </Grid>
                <Grid xs={12} md={3} component={Card}>
                    <CardContent className='inf'>
                        <Typography color="textSecondary">Recovered</Typography>
                        <MdFavorite/>
                        <Typography variant="h5"><CountUp start={0} end={recovered.value} duration={2.5} separator=',' /></Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2' >Number of Recovered cases of COVID-19.</Typography>
                    </CardContent> </Grid>
                <Grid xs={12} md={3} component={Card}>
                    <CardContent className='dea'>
                        <Typography color="textSecondary">Death</Typography>
                        <GiDeathSkull/>
                        <Typography variant="h5"><CountUp start={0} end={deaths.value} duration={2.5} separator=',' /></Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2' >Number of Death cases of COVID-19.</Typography>
                    </CardContent></Grid>

            </Grid></div>
    </div>);
}

export default Cards;