import React, { useState } from 'react';
import './DonationMenu.scss';
import DonationProgress from '../DonationProgress/DonationProgress';
import ReservedAmount from '../ReservedAmount/ReservedAmount';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

const normalise = (value, min, max) => (value - min) * 100 / (max - min);

function DonationMenu(props) {
    const [buffer, setBuffer] = useState(0);

    return (
        <div className="donation-menu">
            <Grid container direction="column" justify="space-evenly">
                <img src="img\ui\food.png" className="donation-menu-image" alt=""/>
                <Grid container direction="row" justify="space-between" alignItems="center">
                    <span item >
                        Питание
                        <InfoOutlinedIcon style={{ fontSize: 15 }} className="icon" />
                    </span>
                    {RenderProgressLabel(props.progress, buffer, props.min, props.max)}
                </Grid>
                <Grid >
                    <DonationProgress value={props.progress} buffer={buffer} min="0" max="300" />
                </Grid>
                <Grid container direction="row" justify="space-evenly" alignItems="center">
                    <ReservedAmount value="2" setBuffer={setBuffer}/>
                    <ReservedAmount value="5" setBuffer={setBuffer}/>
                    <ReservedAmount value="10" setBuffer={setBuffer}/>
                    <TextField label="Своя сумма" variant="outlined" className="exactAmount" size="small"/>
                </Grid>
            </Grid>
        </div>
    );
}

function RenderProgressLabel(progress, buffer, min, max) {
    const normalisedProgress = Math.ceil(normalise(progress, min, max));
    const normalisedBuffer = Math.ceil(normalise(buffer, min, max));
    if (!buffer) {
        return (
            <span item >
                {normalisedProgress}%
            </span>
        )
    } else {
        return (
            <div item>
                <span>
                    {normalisedProgress}+
                </span>
                <span className="buffer-label">
                    {normalisedBuffer}%
                </span>
            </div>
        )
    }
}

export default DonationMenu;