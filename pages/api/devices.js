const knex = require("../../db/knex");

function getDevices(req, res) {
  knex('device')
  .select({
    id: 'id',
    name: 'name',
    location: 'location'
  })
  .then((devices) => res.status(200).json(devices))
  .catch(err => res.status(500).send(err));
}

function addDevice(req, res){
  const {name, location} = req.body;
  if (!name) {
    return res.json({success: false, message: 'Name is required'});
  }
  if (!location) {
    return res.json({success: false, message: 'Location is required'});
  }

  knex('device')
    .insert({name, location})
    .then((id) => {
      //get device by id
      knex('device')
        .select({name, location})
        .where({id})
        .then(device => res.status(201).json(device[0]))
    })
    .catch(err => res.status(500).send(err));
}

function updateDevice(req, res){
  const {name, location} = req.body;
  knex('device')
    .where({id: req.params.id})
    .update({name, location})
    .then(device => res.status(!!device ? 200 : 404)
      .json({success: !!device}))
    .catch(err => res.status(500).send(err));
}

function deleteDevice(req, res){
  const {name, location} = req.body;
  knex('device')
    .where({id: req.params.id})
    .del()
    .then(device => res.status(!!device ? 200 : 404)
      .json({success: !!device}))
    .catch(err => res.status(500).send(err));
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
    }
}