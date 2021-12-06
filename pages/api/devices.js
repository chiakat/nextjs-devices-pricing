// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }

const knex = require("../../db/knex"); // importing the db config

function getDevices(req,res) {
  knex('device')
  .select({
    id: 'id',
    name: 'name'
  })
  .then((devices) => {
    return res.json(devices);
  })
  .catch((err) => {
    console.error(err);
    return res.json({success: false, message: 'An error occurred, please try again later.'});
  })
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


// module.exports = app => {
//   app.get("/api", (req, res) =>
//     res.status(200).send({
//       message: "Welcome to the API!"
//     })
//   );

  // // POST device
  // app.post("/api/device", deviceController.create);
  // // GET list of all devices
  // app.get("/api/device", deviceController.list);
  // // GET a single device by ID
  // app.get("/api/device/:deviceId", deviceController.retrieve);
  // // UPDATE a single device by ID
  // app.put("/api/device/:deviceId", deviceController.update);
  // // DELETE a single device by ID
  // app.delete("/api/device/:deviceId", deviceController.delete);
// };