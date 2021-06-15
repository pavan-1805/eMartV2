import { Container, Icon, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
const useStyles = makeStyles((theme)=>({
    iconCont : {
        marginTop : 60,
        width : 500,
        height : 120,
        marginLeft : 50
        
    },
    icon : {
        fontSize: '7rem',
        display : "flex",
        justifyContent : "center",
       marginLeft : 40
        
    },
    container: {
        marginTop : 60,
        width : 100,
        paddingRight : "200px",
        border : "2px solid black",
        backgroundColor : "#DCDCDC",
        boxShadow : "5px 5px 5px #888888",
        borderRadius : "4px",
        marginLeft : 500,
        marginTop : 200
    },
    text : {
        marginLeft : 90,
        marginBottom : 10,
        width : 100
    }
}))
function Home() {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            <Icon  className={classes.iconCont}>
                <AddShoppingCartIcon    className={classes.icon}/>
            </Icon>
            <Typography className={classes.text}>
                Shop Now...!
            </Typography>
        </div>
    )
}

export default Home
