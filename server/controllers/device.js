const Device = require("../models").Device;

module.exports = {
  create(req, res) {
    return Device.create({
      device_id: req.body.device_id,
      name: req.body.name,
      weight: req.body.weight
    })
      .then(device =>
        res.status(201).send({
          success: true,
          message: "Successfully created a device.",
          device
        })
      )
      .catch(error => res.status(400).send(error));
  },

  list(req, res) {
    return Device.all()
      .then(devices => res.status(200).send(devices))
      .catch(error => res.status(400).send(error));
  },

  retrieve(req, res) {
    // Use findAll() with where to use our own specified ID
    /*
        return Device.findAll({
      where: {
        device_id: req.params.deviceId
      }
    })
    */
    return Device.findById(req.params.deviceId)
      .then(device => {
        if (!device) {
          return res.status(404).send({
            message: "device Not Found"
          });
        }
        return res.status(200).send(device);
      })
      .catch(error => res.status(400).send(error));
  },

  update(req, res) {
    return Device.findById(req.params.deviceId)
      .then(device => {
        if (!device) {
          return res.status(404).send({
            message: "Device Not Found"
          });
        }
        return device
          .update(req.body)
          .then(() => res.status(200).send(device))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },

  delete(req, res) {
    return Device.findById(req.params.deviceId)
      .then(device => {
        if (!device) {
          return res.status(400).send({
            message: "device Not Found"
          });
        }
        return device
          .destroy()
          .then(() =>
            res.status(204).send({ message: "Successfully deleted the device!" })
          )
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  }
};