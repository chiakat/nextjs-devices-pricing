/* eslint-disable react/jsx-key */
import React, { useState } from 'react';
import { useTable } from 'react-table';
import { useRouter } from 'next/router';

export default function DeviceList({ devices }) {
  const [updating, setUpdating] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const router = useRouter();

  // Update device
  const updateDevice = async (deviceId) => {
    // change updating state
    setUpdating(true);

    try {
      // Update device
      await fetch(`/api/devices?id=${deviceId}`, {
        method: 'PUT',
      });
      // reset the updating state
      setUpdating(false);

      // reload the page
      return router.push(router.asPath);
    } catch (error) {
      // Stop updating state
      return setUpdating(false);
    }
  };
    // Delete device
  const deleteDevice = async (deviceId) => {
    // change deleting state
    setDeleting(true);

    try {
      // Delete device
      await fetch(`/api/devices?id=${deviceId}`, {
        method: 'DELETE',
      });
      // reset the deleting state
      setDeleting(false);

      // reload the page
      return router.push(router.asPath);
    } catch (error) {
      // stop deleting state
      return setDeleting(false);
    }
  };

  const data = devices;

  const columns = React.useMemo(
    () => [
      {
        Header: 'Device ID',
        accessor: 'id',
      },
      {
        Header: 'Device Name',
        accessor: 'name',
      },
      {
        Header: 'Location',
        accessor: 'location',
      },
      {
        Header: 'Project',
        accessor: 'project',
      },
      {
        Header: 'User',
        accessor: 'user',
      },
      {
        Header: 'Update',
        accessor: 'update',
        Cell: ({ device }) => (
          <button type="button" onClick={() => updateDevice(device.id)}>
            {updating ? 'Updating' : 'Update'}
          </button>
        ),
      },
      {
        Header: 'Delete',
        accessor: 'delete',
        Cell: ({ device }) => (
          <button type="button" onClick={() => deleteDevice(device.id)}>
            {deleting ? 'Deleting' : 'Delete'}
          </button>
        ),
      },
    ],
    [],
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}
                style={{
                  borderBottom: 'solid 3px red',
                  background: 'aliceblue',
                  color: 'black',
                  fontWeight: 'bold',
                }}
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      padding: '10px',
                      border: 'solid 1px gray',
                      background: 'papayawhip',
                    }}
                  >
                    {cell.render('Cell')}
                  </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
