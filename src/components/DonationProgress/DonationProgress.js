import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from '@material-ui/core/styles';
import './DonationProgress.scss'

const normalise = (value, min, max) => (value - min) * 100 / (max - min);

const useStyles = makeStyles({
    bar: {
        height: '20px',
        backgroundColor: '#F5F6F8',
        borderRadius: '20px'
    }
});

export default function DonationProgress(props) {
    const classes = useStyles();
    const progress = normalise(props.value, props.min, props.max);
    const buffer = normalise(props.buffer, props.min, props.max);

    return (
        <LinearProgress className={classes.bar} variant="buffer" 
            value={progress} valueBuffer={buffer + progress} />
    );
}