import React from 'react';
import { AppBar, Toolbar, Typography, Grid, IconButton, Box, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import StarIcon from '@mui/icons-material/Star';


function App() {
    return (
        <Box sx={{ flexGrow: 1, padding: 2 }}>
            <AppBar position="static" color="default">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="back">
                        <ArrowBackIcon />
                    </IconButton>
                    <Typography variant="h6" sx={{ flexGrow: 1, textAlign: 'center' }}>
                        <Box component="span" sx={{ marginRight: 1 }}>Icono</Box>
                        Modo
                    </Typography>
                    <Box component="span" sx={{ display: 'flex', alignItems: 'center' }}>
                        <StarIcon />
                        Puntos
                    </Box>
                </Toolbar>
            </AppBar>
            <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{ height: '80vh' }}>
                <Grid item xs={2}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <Button variant="contained">Icono</Button>
                        <Button variant="contained">Icono</Button>
                    </Box>
                </Grid>
                <Grid item xs={8} textAlign="center">
                    <img src={'./images/pepsi.png'} alt="Logo" style={{ width: '100%', maxWidth: '300px' }} />
                    <Grid container spacing={2} justifyContent="center" sx={{ marginTop: 2 }}>
                        {[...Array(6)].map((_, index) => (
                            <Grid item key={index} xs={1} sm={1} md={1} lg={1} xl={1}>
                                <Button variant="contained" sx={{ width: '100%', height: '50px', backgroundColor: 'grey' }}></Button>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                <Grid item xs={2}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <Button variant="contained">Icono</Button>
                        <Button variant="contained">Icono</Button>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={2} justifyContent="center">
                        {[...Array(10)].map((_, index) => (
                            <Grid item key={index} xs={2} sm={1} md={1} lg={1} xl={1}>
                                <Button variant="contained" sx={{ width: '100%', height: '50px' }}></Button>
                            </Grid>
                        ))}
                    </Grid>
                    <Grid container spacing={2} justifyContent="center" sx={{ marginTop: 2 }}>
                        {[...Array(10)].map((_, index) => (
                            <Grid item key={index} xs={2} sm={1} md={1} lg={1} xl={1}>
                                <Button variant="contained" sx={{ width: '100%', height: '50px' }}></Button>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}

export default App;
