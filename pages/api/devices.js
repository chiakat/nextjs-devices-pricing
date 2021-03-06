const knex = require('../../db/knex');

function getAllDevices(req, res) {
  knex
    .select({
      id: 'd.id',
      name: 'd.name',
      location: 'd.location',
      user: 'd.user',
      project: 'd.project',
    })
    .from('devices AS d')
    // Uncomment to add filter by user email
    // .leftJoin('users AS u', 'u.id', 'd.user')
    // .where('u.email', '=', email)
    .then((devices) => {
      res.status(200).json(devices);
      res.end();
    })
    .catch((err) => res.status(500).send(err));
}

function getDeviceInfo(id, req, res) {
  if (Number.isNaN(id)) {
    res.status(404).send('Invalid device id');
  }
  knex('devices')
    .select({
      id: 'id',
      name: 'name',
      location: 'location',
      user: 'user',
      project: 'project',
    })
    .where({ id })
    .then((device) => {
      res.status(200).json(device);
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

function updateDevice(id, req, res) {
  if (Number.isNaN(id)) {
    res.status(404).send('Invalid item id');
  }
  const { name, location, project } = req.body;
  knex('devices')
    .where({ id })
    .update({ name, location, project })
    .then((device) => {
      res.status(device ? 200 : 404).json({
        success: !!device,
        id,
        name,
        location,
        project,
      });
      res.end();
    })
    .catch((err) => res.status(500).send(err));
}

function deleteDevice(id, req, res) {
  if (Number.isNaN(id)) {
    res.status(404).send('Invalid item id');
  }
  knex('devices')
    .where({ id })
    .del()
    .then((device) => {
      res.status(device ? 200 : 404).json({ success: !!device });
      res.end();
    })
    .catch((err) => res.status(500).send(err));
}

export default async function (req, res) {
  const id = Number(req.query.id);
  switch (req.method) {
    case 'GET': {
      if (!id) {
        return getAllDevices(req, res);
      }
      return getDeviceInfo(id, req, res);
    }

    case 'POST': {
      return addDevice(req, res);
    }

    case 'PUT': {
      return updateDevice(id, req, res);
    }

    case 'DELETE': {
      return deleteDevice(id, req, res);
    }

    default:
      console.log('no available actions');
  }
};
