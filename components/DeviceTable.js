import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
// import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function DeviceTable({ devices }) {
  // const classes = useStyles();
  const [updating, setUpdating] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const router = useRouter();

  // // Update device
  // const updateDevice = async (deviceId) => {
  //   // change updating state
  //   setUpdating(true);
  //   try {
  //     await fetch(`/api/devices?id=${deviceId}`, {
  //       method: 'PUT',
  //     });
  //     setUpdating(false);
  //     // reload the page
  //     return router.push(router.asPath);
  //   } catch (error) {
  //     // Stop updating state
  //     return setUpdating(false);
  //   }
  // };
  const updateDevice = async (deviceId) => router.push(`/devices/edit?id=${deviceId}`);

  // Delete device
  const deleteDevice = async (deviceId) => {
    // change deleting state
    setDeleting(true);

    try {
      await fetch(`/api/devices/:${deviceId}`, {
        method: 'DELETE',
      });
      setDeleting(false);
      // reload the page
      return router.push(router.asPath);
    } catch (error) {
      // stop deleting state
      return setDeleting(false);
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
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={50}
        rowsPerPageOptions={[10]}
        autoPageSize
        // checkboxSelection
      />
    </div>
  );
}
