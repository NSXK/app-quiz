import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Grid, Card, CardMedia, CardContent, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ModosDeJuego = () => {
  const handleBackClick = () => {
    // Aquí puedes manejar la acción al hacer clic en la flecha
    console.log('Regresar');
  };

  return (
    <div style={{ backgroundColor: 'red', height: '100vh' }}>
      <AppBar position="static" style={{ backgroundColor: 'white', color: 'black' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="back" onClick={handleBackClick} href="http://localhost:3000/dificulta">
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
              src="https://images.unsplash.com/photo-1577451581377-523b0a03bb6b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Reemplazar con la URL real de la imagen
              alt="Arcade"
              
            />
            <CardContent>
            <Button href="http://localhost:3000/gamepage">Facil</Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card style={{ width: 200, textAlign: 'center' }}>
            <CardMedia
              component="img"
              height="200"
              src="https://images.unsplash.com/photo-1577451581039-032debfb47b6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Reemplazar con la URL real de la imagen
              alt="Contra Reloj"
            />
            <CardContent>
            <Button href="http://localhost:3000/gamepage">Facil</Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card style={{ width: 200, textAlign: 'center' }}>
            <CardMedia
              component="img"
              height="200"
              src="https://images.unsplash.com/photo-1577451581742-98bc6c0ea83e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Reemplazar con la URL real de la imagen
              alt="Contra Reloj"
            />
            <CardContent>
            <Button href="http://localhost:3000/gamepage">Facil</Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};
export default ModosDeJuego;