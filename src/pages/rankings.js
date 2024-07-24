import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

export default function BasicColumnsGrid() {

  const col = [
    { field: 'user_id', 
      headerName: 'ID',
       flex: 0.1,
       headerAlign: 'center',
       align: 'center'
    },
    {
      field: 'user_name', headerName: 'Nombre', flex: 1,
      renderCell: (params) => {
        return (params.row.user_name + ' ' + params.row.user_lastname)
      },
      headerAlign: 'center',
      align: 'center'
    },
    { 
      field: 'user_nickname', 
      headerName: 'Apodo',
      flex: 1,
      headerAlign: 'center',
      align: 'center'
    },
    {
      field: 'user_points',
      headerName: 'Puntos',
      renderCell: (params) => { return params.row.user_points },
      flex: 1,
      headerAlign: 'center',
      align: 'center'
    }
  ]

  const rows = [
    {
      id: 1,
      user_id: 1,
      user_name: 'Angel',
      user_lastname: 'Pérez',
      user_nickname: 'NSXK',
      user_points: 60,
    },
    {
      id: 2,
      user_id: 2,
      user_name: 'Mario',
      user_lastname: 'Toreto',
      user_nickname: 'NSXK',
      user_points: 20,
    },
  ]
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100wv',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0f0f0' 
      }}
    >
      <Box
        sx={{
          width: '50%',
          height: '90%',
          textAlign: 'center',
          backgroundColor: '#FFF', 
          boxShadow: 3,
          borderRadius: '24px',
          overflow: 'hidden'
        }}
      >
        <DataGrid
          columns={col}
          rows={rows}
          sx={{
            borderStyle: 'none'
          }}
        />
      </Box>
    </Box>
  );
}