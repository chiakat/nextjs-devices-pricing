import { useState } from 'react';
import {
  Button, Box, Grid, TextField, Alert,
} from '@mui/material';

export default function DeviceForm({ device }) {
  const [action, setAction] = useState(device ? 'Updated' : 'Added');
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

    let response;
    if (action === 'Added') {
      response = await fetch('/api/devices', {
        method: 'POST',
        body: JSON.stringify({
          name, location, user, project,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } else {
      response = await fetch(`/api/devices?id=${device.id}`, {
        method: 'PUT',
        body: JSON.stringify({
          name, location, user, project,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    const result = await response.json();
    const data = action === 'Added' ? result[0] : result;

    if (data) {
      // reset form for added device
      if (action === 'Added') {
        setName('');
        setLocation('');
        setProject('');
        setUser('');
      }
      return setMessage(`Success! ${action} ${data.name} located at ${data.location} for Project ${data.project}`);
    }
    return setError('Unable to process request. Please try again.');
  };

  return (
    <>
      <Box
        sx={{
          marginTop: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box sx={{ mb: 3 }}>
          {error ? (<Alert severity="error">{error}</Alert>) : null}
          {message ? (<Alert severity="success">{message}</Alert>) : null}
        </Box>
        <Box component="form" noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="deviceName"
                required
                fullWidth
                id="name"
                label="Device Name"
                type="text"
                value={name}
                autoFocus
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="location"
                label="Device Location"
                name="location"
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="project"
                label="Project ID"
                name="project"
                type="number"
                value={project}
                onChange={(e) => setProject(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="user"
                label="User ID"
                type="user"
                id="user"
                type="number"
                value={user}
                onChange={(e) => setUser(e.target.value)}
              />
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
            >
              <Button
                type="submit"
                // variant="contained"
                sx={{ my: 3, mr: 2 }}
                href="/devices/view"
              >
                View All Devices
              </Button>
              <Button
                type="submit"
                variant="contained"
                sx={{ my: 3 }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
