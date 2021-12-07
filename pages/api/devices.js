const knex = require('../../db/knex');

function getDevices(req, res) {
  knex('devices')
    .select({
      id: 'id',
      name: 'name',
      location: 'location',
      user: 'user',
      project: 'project',
    })
    .then((devices) => {
      res.status(200).json(devices);
      res.end();
    })
    .catch((err) => res.status(500).send(err));
}

function addDevice(req, res) {
  const {
    name, location, project, user,
  } = req.body;
  if (!name) {
    return res.json({ success: false, message: 'Name is required' });
  }
  if (!location) {
    return res.json({ success: false, message: 'Location is required' });
  }

  knex('devices')
    .insert({
      name, location, project, user,
    }, ['id', 'name', 'location', 'project', 'user'])
    .then((device) => {
      res.status(201).json(device);
      res.end();
    })
    .catch((err) => res.status(500).send(err));
}

function updateDevice(req, res) {
  const { name, location } = req.body;
  console.log(req);
  knex('devices')
    .where({ id: req.params.id })
    .update({ name, location })
    .then((device) => {
      res.status(device ? 200 : 404).json({ success: !!device });
      res.end();
    })
    .catch((err) => res.status(500).send(err));
}

function deleteDevice(req, res) {
  knex('devices')
    .where({ id: req.params.id })
    .del()
    .then((device) => {
      res.status(device ? 200 : 404).json({ success: !!device });
      res.end();
    })
    .catch((err) => res.status(500).send(err));
}

export default async function handler(req, res) {
  // switch the methods
  switch (req.method) {
    case 'GET': {
      return getDevices(req, res);
    }

    case 'POST': {
      return addDevice(req, res);
    }

    case 'PUT': {
      return updateDevice(req, res);
    }

    case 'DELETE': {
      return deleteDevice(req, res);
    }

    default:
      console.log('no matching methods');
  }
}
