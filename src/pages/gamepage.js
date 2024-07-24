import React from 'react';
import { AppBar, Toolbar, Typography, Grid, IconButton, Box, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import StarIcon from '@mui/icons-material/Star';


function App() {
    return (
        <Box sx={{ flexGrow: 1, padding: 2 }}>
            <AppBar position="fixed" color="default" component="nav">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="back"  n >
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
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, marginTop: '60px' }}>
                        <Button variant="contained" sx={{ width: '140px', height: '140px' }}>Icono</Button>
                        <Button variant="contained" sx={{ width: '140px', height: '140px' }}>Icono</Button>
                    </Box>
                </Grid>
                <Grid item xs={8} textAlign="center" sx={{marginTop: '50px'}}>
                    <img src={'./images/Pepsi.png'} alt="Logo" style={{ width: '100%', maxWidth: '300px' }} />
                    <Grid container spacing={2} justifyContent="center" sx={{ marginTop: 2 }}>
                        {[...Array(5)].map((_, index) => (
                            <Grid item key={index} xs={1} sm={1} md={1} lg={1} xl={1}>
                                <Button variant="contained" sx={{ width: '50px', height: '60px', backgroundColor: 'rgb(0,0,0,0.4)' }}></Button>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                <Grid item xs={2}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, marginTop: '60px' }}>
                        <Button variant="contained" sx={{ width: '140px', height: '140px' }}>Icono</Button>
                        <Button variant="contained" sx={{ width: '140px', height: '140px' }}>Icono</Button>
                    </Box>
                </Grid>
                <Grid item xs={8.5}>
                    <Grid container spacing={2} justifyContent="center">
                        {[...Array(5)].map((_, index) => (
                            <Grid item key={index} xs={2} sm={1} md={1} lg={1} xl={1}>
                                <Button variant="contained" sx={{ width: '75px', height: '75px' }}></Button>
                            </Grid>
                        ))}
                    </Grid>
                    <Grid container spacing={2} justifyContent="center" sx={{ marginTop: -0.5 }}>
                        {[...Array(5)].map((_, index) => (
                            <Grid item key={index} xs={2} sm={1} md={1} lg={1} xl={1}>
                                <Button variant="contained" sx={{ width: '75px', height: '75px' }}></Button>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
            <Box component="footer" sx={{ height: '90px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#252525', position: 'fixed', bottom: 0,left: 0,right: 0, width: '100vw' }}>
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <Button variant="contained" sx={{ width: '65px', height: '65px' }}>Botón 1</Button>
                    <Button variant="contained" sx={{ width: '65px', height: '65px' }}>Botón 2</Button>
                </Box>
            </Box>
        </Box>
    );
}

export default App;
