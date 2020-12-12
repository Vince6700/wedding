const Guest = require("./guestModel");

createGuest = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a guest",
    });
  }

  const guest = new Guest(body);

  if (!guest) {
    return res.status(400).json({ success: false, error: err });
  }

  guest
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: guest._id,
        message: "Guest created!",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "Guest not created!",
      });
    });
};

updateGuest = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update",
    });
  }

  Guest.findOne({ email: req.params.email }, (err, guest) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "guest not found!",
      });
    }

    Object.keys(guest).map((key) => (guest[key] = body[key] || guest[key]));

    guest
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: guest._id,
          message: "guest updated!",
        });
      })
      .catch((error) => {
        return res.status(404).json({
          error,
          message: "guest not updated!",
        });
      });
  });
};

deleteGuest = async (req, res) => {
  await Guest.findOneAndDelete({ _id: req.params.id }, (err, guest) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!guest) {
      return res.status(404).json({ success: false, error: `Guest not found` });
    }

    return res.status(200).json({ success: true, data: guest });
  }).catch((err) => console.log(err));
};

getGuestByEmail = async (req, res) => {
  await Guest.findOne({ email: req.params.email }, (err, guest) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!guest) {
      return res.status(404).json({ success: false, error: `Guest not found` });
    }
    return res.status(200).json({ success: true, data: guest });
  }).catch((err) => console.log(err));
};

getGuests = async (req, res) => {
  await Guest.find({}, (err, guests) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    return res.status(200).json({ success: true, data: guests || [] });
  }).catch((err) => console.log(err));
};

module.exports = {
  createGuest,
  updateGuest,
  deleteGuest,
  getGuests,
  getGuestByEmail,
};
