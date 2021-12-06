import { useState } from 'react';

import Nav from '../components/Nav';
import styles from '../styles/Home.module.css';

export default function AddDevice() {
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const handleDevice = async (e) => {
        e.preventDefault();

        // reset error and message
        setError('');
        setMessage('');

        // fields check
        if (!name || !location) return setError('All fields are required');
    };

    return (
        <div>
            <Nav />
            <div className={styles.container}>
                <form onSubmit={handleDevice} className={styles.form}>
                    {error ? (
                        <div className={styles.formItem}>
                            <h3 className={styles.error}>{error}</h3>
                        </div>
                    ) : null}
                    {message ? (
                        <div className={styles.formItem}>
                            <h3 className={styles.message}>{message}</h3>
                        </div>
                    ) : null}
                    <div className={styles.formItem}>
                        <label>Device Name</label>
                        <input
                            type="text"
                            name="device name"
                            onChange={(e) => setname(e.target.value)}
                            value={name}
                            placeholder="Device Name"
                        />
                    </div>
                    <div className={styles.formItem}>
                        <label>Location</label>
                        <textarea
                            name="Location"
                            onChange={(e) => setLocation(e.target.value)}
                            value={location}
                            placeholder="Device Location"
                        />
                    </div>
                    <div className={styles.formItem}>
                        <button type="submit">Add Device</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
