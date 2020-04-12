import React, {Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Paper, Typography} from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText'; 


const useStyles = makeStyles((themes) => ({
    Letter: {
        textTransform: "Capitalize"
    }
}))


const LeftPane = ({exercises, styling, category, onSelect}) => {

    const classes = useStyles();

    return (
        <Fragment>
            <Paper className={styling}>
                {exercises.map(([group, exercises]) => 

                    !category || category === group 
                    
                    ?  <Fragment>
                        <Typography styling={classes.Letter} variant="headline" gutterBottom="Headline">
                            {group}
                        </Typography>
                        <List component="ul" aria-label="secondary mailbox folders">
                            {exercises.map(({id, title}) => 
                                <ListItem button>
                                    <ListItemText primary={title} 
                                    onClick={() => onSelect(id)}
                                    />
                                </ListItem>
                            )}
                           
                        </List>
                    </Fragment>

                    : null
                
                )}
            </Paper>
        </Fragment>
    )
}

export default LeftPane
