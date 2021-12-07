import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Devices({ device }) {
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
  return (
    <li>
      <h3>{device.name}</h3>
      <p>{device.id}</p>
      <p>{device.location}</p>
      <p>{!device.user ? 'no user' : device.user}</p>
      <p>{!device.project ? 'no project' : device.user}</p>
      <br />
      {!device.updated ? (
        <button type="button" onClick={() => updateDevice(device.id)}>
          {updating ? 'Updating' : 'Update'}
        </button>
      ) : null}
      <button type="button" onClick={() => deleteDevice(device.id)}>
        {deleting ? 'Deleting' : 'Delete'}
      </button>
    </li>
  );
}
