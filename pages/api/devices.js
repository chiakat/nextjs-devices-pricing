import { getSession } from 'next-auth/react';

const knex = require('../../db/knex');

function getAllDevices(email, req, res) {
  console.log(email)
  knex
    .select({
      id: 'd.id',
      name: 'd.name',
      location: 'd.location',
      user: 'd.user',
      project: 'd.project',
    })
    .from('devices AS d')
    .leftJoin('users AS u', 'u.id', 'd.user')
    .where('u.email', '=', email)
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

export default async (req, res) => {
  // const session = await getSession({ req });

  // if (session) {
    const id = Number(req.query.id);
    // const email = session.user.email;
    const email = 'chiakyu@gmail.com';
    switch (req.method) {
      case 'GET': {
        if (!id) {
          return getAllDevices(email, req, res);
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
  // } else {
  //   res.send({
  //     error: 'Sign in to view devices.',
  //   });
  // }
};
