import { useState } from 'react';
import styles from '../styles/home.module.css';

export default function DeviceForm({ device }) {
  const [name, setName] = useState(device ? device.name : '');
  const [location, setLocation] = useState(device ? device.location : '');
  const [user, setUser] = useState(device ? device.user : '');
  const [project, setProject] = useState(device ? device.project : '');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // reset error and message
    setError('');
    setMessage('');
    // fields check
    if (!name || !location) return setError('All fields are required');

    const response = await fetch('/api/devices', {
      method: 'POST',
      body: JSON.stringify({
        name, location, user, project,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();

    if (data) {
      return setMessage(`Success! Added ${data[0].name} located ${data[0].location} for Project ${data[0].project}`);
    }
    return setError('Unable to process request. Please try again.');
  };

  return (
    <>
      <div className={styles.container}>
        <form onSubmit={handleSubmit} className={styles.form}>
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
              type="number"
              name="project"
              onChange={(e) => setProject(e.target.value)}
              value={project}
              placeholder="Project"
            />
          </div>
          <div className={styles.formItem}>
            <label>User</label>
            <input
              type="number"
              name="user"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              placeholder="user"
            />
          </div>
          <div className={styles.formItem}>
            <button type="submit">Add Device</button>
          </div>
        </form>
      </div>
    </>
  );
}
