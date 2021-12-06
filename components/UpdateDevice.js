import { useState } from 'react';
import { useRouter } from 'next/router';

export default function UpdateDevice({ device }) {
    const [updating, setUpdating] = useState(false);
    const [deleting, setDeleting] = useState(false);
    const router = useRouter();

    // Publish device
    const updateDevice = async (deviceId) => {
        // change updating state
        setUpdating(true);

        try {
            // Update device
            await fetch('/api/devices', {
                method: 'PUT',
                body: deviceId,
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
        //change deleting state
        setDeleting(true);

        try {
            // Delete device
            await fetch('/api/devices', {
                method: 'DELETE',
                body: deviceId,
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
        <>
            <li>
                <h3>{device.name}</h3>
                <p>{device.location}</p>
                <small>{new Date(device.createdAt).toLocaleDateString()}</small>
                <br />
                {!device.updated ? (
                    <button type="button" onClick={() => publishdevice(device._id)}>
                        {updating ? 'Updating' : 'Update'}
                    </button>
                ) : null}
                <button type="button" onClick={() => deleteDevice(device['_id'])}>
                    {deleting ? 'Deleting' : 'Delete'}
                </button>
            </li>
        </>
    );
}