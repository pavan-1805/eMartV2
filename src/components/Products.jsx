import React,{ useContext,useEffect, useState } from 'react'
import Container from '@material-ui/core/Container'
import { Button, Grid, makeStyles, Typography } from '@material-ui/core'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { MartContext } from '../context/MartContextProvider';
import ProductCard from './ProductCard';
import axios from 'axios'


const useStyles = makeStyles((theme)=>({
    GridItem : {
        marginTop : 50,
        marginBottom : 30,
        
    },
    title:{
        color : "#000000",   
    },
    text : {
        padding : 5
    },
    button : {
        backgroundColor : "#404040",

        color : "#FFFFFF",
        "&:hover": {
            backgroundColor: "#000000",
            
        }
    },
    grid : {
        marginTop : 60
    }
    

}))
function Products() {
    const classes = useStyles()
    const {state,dispatch} = useContext(MartContext)
    const [productCount, setProductCount] = useState(0)
    const [products, setProducts] = useState([])
    console.log(state.ProductCount);
    useEffect(() => {
        setProducts(state.products)        
    }, [])
    const getCount = (count) => {
        if(count && count>0){ 
            console.log("papapa");
            dispatch({type:"INCREMENT", payload : {val : 1 }})
        } 
    }
    const clickHandler =  () => {
        //alert("data got")
        // axios.post('',{
        //     // UserName : ,
        //     ProductsCount : val
        // })
        // .then(response=>{
        //     console.log(response);
        // })
        // .catch(error => {
        //     console.log(error);
        // })

    }
    
    return (
        <>
        <Container className={classes.grid} >
            <Typography className={classes.title} variant="h4" display="inline">
                PRODUCTS
            </Typography>
            <div className="product-cont">
            <Button
                className={classes.button}
                display="inline" 
                startIcon = {<ShoppingCartIcon/>}
                onClick={()=>clickHandler()}
                
            >
                {state.ProductCount} Item
            </Button>
            </div>            
        </Container>
        <Container >
            <Grid container>
                {
                    products.map(prod => {
                        return (
                            <Grid item key={prod.albumId} xs={12} md={6} lg={4} className={classes.GridItem}>
                                
                               <ProductCard product={prod} sendCount={getCount}/>
                            </Grid>
                        )
                    })

                }

            </Grid>
            
        </Container>
        
                    
        </>
    )
}

export default Products
