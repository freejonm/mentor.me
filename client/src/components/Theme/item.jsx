import React from 'react'
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
    return (
        <p>I'm an Item!</p>
    )
}

export default Item