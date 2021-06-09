import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Grid, makeStyles, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import GoogleLogin from 'react-google-login'

const useStyles = makeStyles((theme)=>({
    grid : {
        marginTop : 50,
        maxHeight : 500,
        maxWidth : 400,
        backgroundColor : "#F5F5F5"
    },
    media : {
        maxHeight : 200,
        maxWidth : 150,
    },
    loginButton : {
        marginTop : 60,
        display : "flex",
        justifyContent : "center",
        alignItems : "center",
        height : "30em",        
        padding : "10px"
            
    },
   
    
}))
function Login(props) {
    const classes = useStyles()
    const [userData, setUserData] = useState(null)
    const [userLoginStatus, setUserLoginStatus] = useState(false)
    const [firstName, setFirstName] = useState("")
    const [middleName, setMiddleName] = useState("")
    const [email, setEmail] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const responseGoogle = (response) => {
        setUserData(response.profileObj)
        setFirstName(response.profileObj.givenName)
        setMiddleName(response.profileObj.familyName)
        setEmail(response.profileObj.email)
        setImageUrl(response.profileObj.imageUrl)
        const Data = JSON.stringify(response.profileObj)
        localStorage.setItem("userData",Data)
        setUserLoginStatus(true)      
        
    }
    props.sendData(userLoginStatus)
    return (
        <div>
            
            
            {
                userLoginStatus === false ?
                <Container className={classes.loginButton}>
                <GoogleLogin 
                className={classes.button}
                clientId="878840935706-dilnflg1aa7qk7lb3m30ipngvb954p2l.apps.googleusercontent.com"
                buttonText="login with Google"                
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
                    
                     
            />
            </Container>
            : 
            <Redirect to="/userdetails" />
            
            
            }

                    
        </div>
    )
}

export default Login