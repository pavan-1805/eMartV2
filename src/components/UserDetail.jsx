import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Grid, makeStyles, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme)=>({
    grid : {
        // marginTop : 50,
        maxHeight : 500,
        maxWidth : 400,
        backgroundColor : "#F5F5F5",
        display : "flex",
        flexDirection : "column",
        justifyContent : "center"
        
    },
    media : {
        maxHeight : 200,
        maxWidth : 150,   
        paddingLeft : 100     
    },
    link:{
        textDecoration : "none",
    },
    container : {
      marginTop : 80,
      display : "flex",
      justifyContent : "center"
    }
    
}))
function UserDetail() { 
    const classes = useStyles()
    const UserData = JSON.parse(localStorage.getItem("userData")) 
    console.log(UserData);  
    
    return (        
        <Container className={classes.container}>
                <Grid className={classes.grid} >
                    <Grid item >
                    <Card className={classes.grid}
                        direction = "column"         
                        justify="center"
                        alignItems="center">
                <CardActionArea >
                  <Typography 
                    variant="h4"
                    align="center"
                    >User Details</Typography>
                  <CardMedia
                    className = {classes.media}
                    component="img"                               
                    image={UserData.imageUrl}
                    title={UserData.givenName}
                  />

                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      First Name : {UserData.givenName}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                      Middle Name : {UserData.familyName}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                      Email : {UserData.email}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary" variant="outlined" className={classes.button}>
                  <Link className={classes.link} to="/products">  Next </Link>
                  </Button>                  
                </CardActions>
              </Card>
                    </Grid>
                </Grid>
            </Container>
    )
}

export default UserDetail
