import { useState } from 'react';

import Nav from '../components/nav';
import styles from '../styles/home.module.css';

export default function AddDevice() {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [user, setUser] = useState('12345');
  const [project, setProject] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleDevice = async (e) => {
    e.preventDefault();

    // reset error and message
    setError('');
    setMessage('');

    // fields check
    if (!name || !location) return setError('All fields are required');

    const response = await fetch('/api/devices', {
      method: 'POST',
      body: JSON.stringify({ name, location, user, project }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    console.log(data);
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
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Device Name"
            />
          </div>
          <div className={styles.formItem}>
            <label>Location</label>
            <input
              type="text"
              name="location"
              onChange={(e) => setLocation(e.target.value)}
              value={location}
              placeholder="Location"
            />
          </div>
          <div className={styles.formItem}>
            <label>Project</label>
            <input
              type="text"
              name="project"
              onChange={(e) => setProject(e.target.value)}
              value={project}
              placeholder="Project"
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
