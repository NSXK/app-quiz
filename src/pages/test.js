
import Mensaje from 'main/components/Mensaje';
import { Box, Typography, Button, Stack, Modal, TextField } from '@mui/material'
import React, {useEffect, useState} from 'react'

export default function Test() {

    const [nombre, setNombre] = useState("");
    const [open, setOpen] = useState(false);
    // const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    // useEffect(() => {
    //     console.log('Escuchando desde useEffect: '+nombre);
    // }, [])

    function handleOnChangeNombre(event){
        setNombre(event.target.value)
    }

    function handelOnClickButton(){
        // console.log("Hola me haz dado click")
        setOpen(true);
    }
    

    return (
        <>
            <Typography variant='h2'>
                Mostrar Mensaje
            </Typography>
            <TextField label="Ingrese su nombre" variant="outlined" sx={{margin: 2}}
            onChange = {handleOnChangeNombre}
            ></TextField>
            <Stack spacing={2} direction="row">
                <Button variant="contained"
                onClick={handelOnClickButton}
                >Haz click para saludar👋</Button>
            </Stack>
           <Mensaje variable_nombre={nombre} open={open} handleClose={handleClose} />
        </>
    )
}
