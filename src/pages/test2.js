import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
export default function test2() {
    const [nombre,setNombre] = useState()
    

    return (
        <>
            <Typography variant="h3" gutterBottom>
                ingrese su nombre
            </Typography>
            <Stack spacing={3}>
            <TextField id="outlined-basic" label="ingresa tu nombre" variant="outlined"  />
            <Button variant="contained">enviar</Button>
      </Stack>

   
        </>
    )
}