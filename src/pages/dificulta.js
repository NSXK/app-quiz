import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Grid, Card, CardMedia, CardContent, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const ModosDeJuego = () => {
  return (
    <div style={{ backgroundColor: 'red', height: '100vh' }}>
      <AppBar position="static" style={{ backgroundColor: 'white', color: 'black' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="back" href="http://localhost:3000/inicio">
            
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h5" style={{ flexGrow: 1, textAlign: 'center' }}>
            MODOS DE JUEGO
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container spacing={3} justifyContent="center" style={{ paddingTop: '20px' }}>
        <Grid item>
          <Card style={{ width: 200, textAlign: 'center' }}>
            <CardMedia
              component="img"
              height="200"
              src="https://images.unsplash.com/photo-1604028297236-42130c7dcc3a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Reemplazar con la URL real de la imagen
              alt="Arcade"
            />
            <CardContent>
            <Button href="http://localhost:3000/Jugabilidad">Arcade</Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card style={{ width: 200, textAlign: 'center' }}>
            <CardMedia
              component="img"
              height="200"
             src="https://images.unsplash.com/photo-1499377193864-82682aefed04?q=80&w=1482&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Reemplazar con la URL real de la imagen
              alt="Contra Reloj"
              
            />
        
            <CardContent>
            <Button href="http://localhost:3000/Jugabilidad">contra Reloj</Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      
    </div>
  );
};export default ModosDeJuego;