import React,{useContext, useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import StoreMallDirectoryIcon from '@material-ui/icons/StoreMallDirectory';
import { Button, Icon } from '@material-ui/core';
import {BrowserRouter as Router , Switch, Link, Route, Redirect } from 'react-router-dom'
import Login from './Login';
import Home from './Home' 
import Products from './Products';
import UserDetail from './UserDetail';
import { MartContext } from '../context/MartContextProvider';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  icon : {
    marginRight: theme.spacing(2),
  },
  title : {
    flexGrow: 1,
  },
  link : {
    textDecoration : "none",
    color : "#FFFFFF"
  },
  user:{
    flexGrow: 0,
    marginRight: 20

},
button:{
    marginRight:20
}
  
}));

export default function Header() {
  const classes = useStyles();
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userName, setUserName] = useState("")
  const [userData, setUserData] = useState(null)
  const getData = (userLoginStatus) => {
    const temp = localStorage.getItem("userData")
    const Data = JSON.parse(temp)
    if(userLoginStatus){
      setIsLoggedIn(true) 
      //state.LoginStatus[0].isLoggedIn= true;     
      setUserName(Data.name)      
    }  
    
  }
  useEffect(()=>{
    console.log("pavan");
  },[localStorage.length])

  const Logout = () => {
    setIsLoggedIn(false)  
    //state.LoginStatus[0].isLoggedIn= false;  
    // console.log( state.LoginStatus[0].isLoggedIn);
    localStorage.clear()  
    return <Redirect to="/" />
  }

  return (
    
    <Router>
      <header >
        <AppBar
             position="fixed" 
             color="primary"
             elevation={0}
             className = {classes.appBar}
        >
            <Toolbar variant="dense">
                <Icon xs={12} md={6} lg={4}
                    edge="start"
                    color="inherit" 
                    aria-label="logo"
                    className = {classes.icon}    
                >
                    <StoreMallDirectoryIcon />
                </Icon>
                <Typography xs={12} md={6} lg={4}
                    variant="h5"
                    color = "inherit"
                    className = {classes.title}
                >
                    e-MART
                </Typography>
                {
                  isLoggedIn === false  || localStorage.length === 0 ?
                  <Button xs={12} md={6} lg={4}
                  variant = "outlined"
                  color = "inherit"  
                               
              >
                  <Link to="/login" className={classes.link} >Login</Link>
              </Button>
                :
                <> 
                        <Typography  xs={12} md={6} lg={4}
                        variant="h6" 
                        className={classes.user}
                    >
                        Welcome {userName}
                    </Typography>
                    <Button xs={12} md={6} lg={4}
                        color="inherit" 
                        variant="outlined" 
                        className={classes.button}
                                                
                    >
                       <Link to="/myprofile" className={classes.link}>My Profile</Link>
                    </Button>
                    <Button xs={12} md={6} lg={4}
                      className={classes.button}
                      color="inherit"
                      variant="outlined" 
                      onClick={()=>Logout()}
                  >
                    <Link to="/" className={classes.link} >Logout</Link>
                    </Button>
                  </>
                }
                
            </Toolbar>
        </AppBar> 
        </header>  
        <div>
          <Link to="/home" ></Link>
        </div>
        <Switch>
            <Route exact path="/" children={<Home/>}/>
            <Route exact path="/login" children={<Login sendData = {getData} />}/>            
            <Route exact path="/products" children={<Products/>}/>
            <Route exact path="/userdetails" children={<UserDetail />}/>
            

        </Switch>   
    </Router>
    
  );
}
