import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'
const useStyles = makeStyles((theme)=>({
    text : {
        marginTop : 60
    }
}))
function Home() {
    const classes = useStyles()
    return (
        <Typography className={classes.text}>
            HII
        </Typography>
    )
}

export default Home
