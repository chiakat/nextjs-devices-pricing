import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { IconButton, Alert, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useRouter } from 'next/router';

export default function DeviceTable({ devices }) {
  console.log(devices);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  const updateDevice = async (deviceId) => router.push(`/devices/edit?id=${deviceId}`);

  const deleteDevice = async (deviceId) => {
    // reset error and message
    setError('');
    setMessage('');
    try {
      await fetch(`/api/devices/?id=${deviceId}`, {
        method: 'DELETE',
      });
      return router.push(router.asPath);
    } catch (err) {
      return setError('Unable to delete');
    }
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 80 },
    {
      field: 'name', headerName: 'Device name', flex: 1.8, minWidth: 80,
    },
    {
      field: 'location', headerName: 'Location', flex: 1.8, minWidth: 80,
    },
    {
      field: 'project', headerName: 'Project', flex: 1, minWidth: 50,
    },
    // Note: user will be removed in the final output after authentication is added
    {
      field: 'user', headerName: 'User', flex: 1, minWidth: 50,
    },
    {
      field: 'Edit',
      width: 80,
      renderCell: (cellValues) => (
        <IconButton aria-label="update" color="primary"
        onClick={() => {
          updateDevice(cellValues.row.id);
        }}>
        <EditIcon />
      </IconButton>
      ),
    },
    {
      field: 'Delete',
      width: 80,
      renderCell: (cellValues) => (
        <IconButton aria-label="delete" color="secondary"
          onClick={() => {
            deleteDevice(cellValues.row.id);
          }}>
          <DeleteIcon />
        </IconButton>
      ),
    },
  ];

  const rows = devices;

  return (
    <>
      <Box sx={{ mb: 3 }}>
        {error ? (<Alert severity="error">{error}</Alert>) : null}
        {message ? (<Alert severity="success">{message}</Alert>) : null}
      </Box>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={50}
        rowsPerPageOptions={[10]}
        autoPageSize
        sx={{ height: 400, width: '100%', backgroundColor: 'white' }}
      />
    </>
  );
}
