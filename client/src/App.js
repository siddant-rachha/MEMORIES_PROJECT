import React from 'react';
import memories from '../src/components/assets/images/memories.png'

import { Container, AppBar, Typography, Grow, Grid } from "@mui/material"

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';

const App = () => {
    const classes = useStyles();
    return (
        <div>
            <Container maxWidth='lg'>
                <AppBar className={classes.appBar} position='static' color='inherit'>
                    <Typography variant='h2' align='center'>
                        Memories
                    </Typography>
                    <img src={memories} alt="memories" height='60'></img>
                </AppBar>

                <Grow in>
                    <Container>
                        <Grid container spacing='3' justifyContent='space-between' alignItems='stretch'>
                            <Grid item xs={12} sm={7}>
                                <Posts />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Form />
                            </Grid>
                        </Grid>
                    </Container>
                </Grow>
            </Container>
        </div>
    )
}

export default App;