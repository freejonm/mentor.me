import React from 'react'
import { Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Button }     from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
    root: {
      margin: theme.spacing(3),
      width: 345, 
    },
    media: {
      height: 140,
    },
    title: {
      color: theme.palette.primary.main
    }
  }))

const Item = () => {
    const classes = useStyles();
    

    return (
        <div>
            <Card className={classes.root}>
                
            </Card>
        </div>
    )
}

export default Item