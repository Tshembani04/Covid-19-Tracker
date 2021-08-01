import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import CountUp from 'react-countup'
import styles from './Cards.module.css'
import LocalHospitalSharpIcon from '@material-ui/icons/LocalHospitalSharp';
import FavoriteBorderSharpIcon from '@material-ui/icons/FavoriteBorderSharp';
import SentimentVeryDissatisfiedSharpIcon from '@material-ui/icons/SentimentVeryDissatisfiedSharp';
//This method of external module classnames failed me LOL
// import cx from 'classnames';

//destructuring 
const Cards = ({ data: {confirmed, recovered, deaths, lastUpdate }})=>{
    console.log(confirmed)
    if(!confirmed){
        return 'Loading...';
    }

    return(
        <div className={styles.container}>
            <Grid container spacing={3} justify='center'>
            <Grid item component ={Card} xs={12} md={3} className= {styles.card} className={styles.infected} >
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom > Infected </Typography>
                        <Typography varient='h5'> 
                        <CountUp start={0} end={confirmed.value} duration={2.5} separator=','/>
                         </Typography>
                         <LocalHospitalSharpIcon />
                        <Typography color='textSecondary'>{ new Date(lastUpdate).toDateString()} </Typography>
                        <Typography variant='body2'> Number of active cases of COVID-19 </Typography>
                    </CardContent>
                </Grid>
                <Grid item component ={Card} xs={12} md={3} className= {styles.card} className={styles.recovered} >
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom > Recovered </Typography>
                        <Typography varient='h5'> 
                        <CountUp start={0} end={recovered.value} duration={2.5} separator=','/>
                         </Typography>
                         <FavoriteBorderSharpIcon />
                         <Typography color='textSecondary'>{ new Date(lastUpdate).toDateString()} </Typography>
                        <Typography variant='body2'> Number of recoveries from COVID-19 </Typography>
                    </CardContent>
                </Grid>
                <Grid item component ={Card} xs={12} md={3} className= {styles.card} className={styles.deaths} >
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom > Deaths  </Typography>
                        <Typography varient='h5'>
                        <CountUp start={0} end={deaths.value} duration={2.5} separator=','/>    
                        </Typography>
                        <SentimentVeryDissatisfiedSharpIcon />
                        <Typography color='textSecondary'>{ new Date(lastUpdate).toDateString()} </Typography>
                        <Typography variant='body2'> Number of deaths caused by COVID-19 </Typography>
                    </CardContent>
                    
                </Grid>
            </Grid>
        </div>

    )
}

export default Cards;