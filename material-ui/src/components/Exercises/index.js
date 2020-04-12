import React, {Fragment} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {Grid, Paper} from '@material-ui/core'

import LeftPane from './LeftPane'
import RightPane from './RightPane'

const useStyles = makeStyles((themes) =>  ({
    Paper: {
        padding: 20,
        marginTop: 10,
        marginBottom: 10,
        height: 500,
        overflowY: 'auto'
    }
}));

const Exercises = ({exercises, category, onSelect, exercise}) => {

    const classes = useStyles();


    return (
        <Fragment>
            <Grid container >
                <Grid item sm>
                    <LeftPane styling={classes.Paper} exercises={exercises} category={category} onSelect={onSelect}/>
                </Grid>
                <Grid item sm>
                    <RightPane styling={classes.Paper} exercise={exercise} />
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default Exercises;
