import {
    Box,
    Button,
    Unstable_Grid2 as Grid,
    Stack,
    Typography,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

import React from 'react'


export default function Dashboard() {

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'nickname',
            headerName: 'nickname',
            flex: 1,
            // width: 1,
        },
        {
            field: 'points',
            headerName: 'Puntos',
            flex: 1,
            // width: 150,
        },


    ];

    const rows = [
        { id: 1, nickname: 'Snow', points: 434, },
        { id: 2, nickname: 'Lannister', points: 2323, },
        { id: 3, nickname: 'Lannister', points: 23, },
        { id: 4, nickname: 'Stark', points: 244, },
        { id: 5, nickname: 'Targaryen', points: 242, },
        { id: 6, nickname: 'Melisandre', points: 23235, },
        { id: 7, nickname: 'Clifford', points: 23532 },
        { id: 8, nickname: 'Frances', points: 232 },
        { id: 9, nickname: 'Roxie', points: 2442 },
    ];

    return (
        <>
            <Box
                sx={{
                    backgroundColor: 'cyan',
                    height: '90vh',
                    width: '100vw',
                    overflow: 'hidden',
                    paddingBottom: 5,
                }}
            >
                <Stack
                    spacing={2}
                    direction={{ lg: 'row', md: 'column', sm: 'column' }}
                    justifyContent='center'
                    sx={{ backgroundColor: '#fadf75', padding: 0, height: '100%' }}
                >
                    <Stack
                        spacing={2}
                        direction="row"
                        justifyContent='center'
                        sx={{ backgroundColor: '#7aff52', padding: 5, width: '100%' }}
                    >
                        <Box sx={{
                            borderRadius: '12px',
                            backgroundColor: '#fc3883',
                            boxShadow: 2,
                            textAlign: 'center',
                            padding: 1,
                            color: "#fff",
                            aspectRatio: 1 / 1,
                            maxWidth: '250px',
                            maxHeight: '250px',
                        }}>
                            <Typography variant="h3">
                                265
                            </Typography>
                            <Typography variant="p">
                                puntos
                            </Typography>
                        </Box>
                    </Stack>
                    <Stack
                        spacing={2}
                        direction="row"
                        justifyContent='center'
                        sx={{ backgroundColor: '#fa75c0', padding: 0, width: '100%' }}
                    >
                        <Box sx={{
                            width: '100%',
                            borderRadius: '12px',
                            backgroundColor: '#fc3883',
                            boxShadow: 2,
                            textAlign: 'center',
                            padding: 1,
                            color: "#fff",
                            overflow: 'hidden'
                        }}>
                            <Typography variant="h3">
                                Ranking
                            </Typography>
                            <Box sx={{ height: 400, width: 'auto' }}>
                                <DataGrid
                                    rows={rows}
                                    columns={columns}
                                    initialState={{
                                        pagination: {
                                            paginationModel: {
                                                pageSize: 5,
                                            },
                                        },
                                    }}
                                    pageSizeOptions={[5]}
                                    columnVisibilityModel={{
                                        id: false,
                                    }}
                                    disableRowSelectionOnClick
                                />
                            </Box>
                        </Box>
                    </Stack>
                </Stack>
            </Box>
        </>
    )
}
