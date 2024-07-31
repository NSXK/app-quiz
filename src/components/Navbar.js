"use client";

import { useState } from 'react';
import {
    Box,
    Stack,
    Unstable_Grid2 as Grid,
    Typography,
    Avatar,
    Menu,
    MenuItem,
    IconButton,
    Button,
    ListItemIcon,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Logout from '@mui/icons-material/Logout';

// Manejo de rutas: nos sirve para poder movilizarnos dentro de nuestro sitio web
import { useRouter } from "next/navigation";

// Llamado a clase para cerrar sesión
import signOut from "@/firebase/auth/signout";

const NAV_HEIGHT = 64;

export default function Navbar({ user }) {
    const router = useRouter();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const nickname = user.email.split('@')[0];


    const handleClickMenu = (event) => {
        open ? setAnchorEl(null) : setAnchorEl(event.currentTarget);
    };
    const handleCloseMenu = () => {
        console.log("Cerrando menu")
        setAnchorEl(null);
    };

    // Manejar el cierre de sesión
    const handleSignOut = async () => {
        const { error } = await signOut();
        if (error) {
            toast.error("¡Algo ha salido mal en el cierre de la sesión!");
            return console.log(error);
        }
        toast.success("¡Cierre de sesión exitoso!");
        router.push("/");
    };

    return (
        <Box
            sx={{
                backdropFilter: 'blur(6px)',
                // backgroundColor: (theme) => alpha(theme.palette.background.default, 0.8),
                backgroundColor: '#007FFF',
                position: 'sticky',
                top: 0,
                left: {
                    lg: 0
                },
                // width: {
                //     lg: `calc(100% - ${NAV_HEIGHT}px)`
                // },
                zIndex: 9999
            }}
        >
            <Stack
                alignItems="center"
                direction="row"
                justifyContent="space-between"
                spacing={2}
                sx={{
                    minHeight: NAV_HEIGHT,
                    px: 2
                }}
            >
                <Stack
                    alignItems="center"
                    direction="row"
                    spacing={2}
                >
                    <Typography
                        variant="h4"
                        sx={{
                            t: 0,
                            p: 0,
                            textAlign: "center",
                            width: '100%',
                        }}
                    >
                        Titulo
                    </Typography>
                </Stack>
                <Stack
                    alignItems="center"
                    direction="row"
                    spacing={2}
                >
                    <IconButton onClick={handleClickMenu}>
                        <Avatar
                            alt={nickname}
                            src="/assets/avatar/avatar-bird.avif"
                        />
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        id="account-menu"
                        open={open}
                        onClose={handleCloseMenu}
                        onClick={handleCloseMenu}
                        PaperProps={{
                            elevation: 0,
                            sx: {
                                overflow: 'visible',
                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                mt: 1.5,
                                '& .MuiAvatar-root': {
                                    width: 32,
                                    height: 32,
                                    ml: -0.5,
                                    mr: 1,
                                },
                                '&::before': {
                                    content: '""',
                                    display: 'block',
                                    position: 'absolute',
                                    top: 0,
                                    right: 14,
                                    width: 10,
                                    height: 10,
                                    bgcolor: 'background.paper',
                                    transform: 'translateY(-50%) rotate(45deg)',
                                    zIndex: 0,
                                },
                            },
                        }}
                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                    >
                        <MenuItem onClick={handleCloseMenu} >
                            <Avatar fontSize="small" />  {nickname}
                        </MenuItem>
                        <MenuItem onClick={handleSignOut}>
                            <ListItemIcon>
                                <Logout fontSize="small" />
                            </ListItemIcon>
                            Logout
                        </MenuItem>
                    </Menu>
                </Stack>
            </Stack>
        </Box>
    )
}
