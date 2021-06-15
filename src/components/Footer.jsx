import { Box, Container, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
const useStyles = makeStyles((theme)=>({
    footer : {
        backgroundColor: "#D3D3D3"
    }    
}))
function Footer() {
    const classes = useStyles();
    return (
        <footer>
            <Box className={classes.footer}>
                <Container maxWidth="lg">
                    <Typography align="center" color="">
                       Copyright &copy;{new Date().getFullYear()} e-MART INDIA, Inc. All rights reserved
                    </Typography>

                </Container>
            </Box>            
        </footer>
    )
}

export default Footer
