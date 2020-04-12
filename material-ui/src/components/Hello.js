import React from 'react'
import {Typography} from '@material-ui/core'

const Hello = (props) => {

    const { name } = props;

    return (
        <div>
            <Typography align="center" variant="h1" component="h2" color="primary"> 
                {name}
            </Typography>
        </div>
    )
}

export default Hello;
