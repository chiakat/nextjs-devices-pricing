import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useRouter } from 'next/router';
import styles from '../styles/home.module.css';

export default function DeviceTable({ devices }) {
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
    } catch (error) {
      return setError('Unable to delete');
    }
  };

  const data = devices;

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Device name', width: 130 },
    { field: 'location', headerName: 'Location', width: 130 },
    { field: 'project', headerName: 'Project', width: 80 },
    { field: 'user', headerName: 'User', width: 80 },
    {
      field: 'Edit',
      width: 70,
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
      <div className={styles.container}>
        {error ? (
            <h3 className={styles.error}>{error}</h3>
        ) : null}
        {message ? (
            <h3 className={styles.message}>{message}</h3>
        ) : null}
      </div>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={50}
          rowsPerPageOptions={[10]}
          autoPageSize
        />
      </div>
    </>
  );
}
