const deviceController = require("../controllers").device;

module.exports = app => {
  app.get("/api", (req, res) =>
    res.status(200).send({
      message: "Welcome to the API!"
    })
  );

  // POST device
  app.post("/api/device", deviceController.create);
  // GET list of all devices
  app.get("/api/device", deviceController.list);
  // GET a single device by ID
  app.get("/api/device/:deviceId", deviceController.retrieve);
  // UPDATE a single device by ID
  app.put("/api/device/:deviceId", deviceController.update);
  // DELETE a single device by ID
  app.delete("/api/device/:deviceId", deviceController.delete);
};