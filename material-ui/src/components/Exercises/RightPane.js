import React, {Fragment} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Paper, Typography} from '@material-ui/core'


    const useStyles = makeStyles((themes) => ({
        Paper : {
            marginTop: 20
        }
    }))


const RightPane = ({styling , exercise: {id, title = "Welcome!", description = "Please select an exercise from the left."}}) => {

    const classes = useStyles();

    return (
        <Fragment>
            <Paper className={styling}> 
               <Typography variant="display1" className={classes.Paper}>
                   {title}
               </Typography>
               <Typography 
               variant="subheding"
               
               >
                   {description}
               </Typography>
            </Paper>
        </Fragment>
    )
}

export default RightPane
