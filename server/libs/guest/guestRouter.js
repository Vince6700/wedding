const express = require("express");

const GuestService = require("./guestController");

const router = express.Router();

router.post("/guest", GuestService.createGuest);
router.put("/guest/:email", GuestService.updateGuest);
router.delete("/guest/:email", GuestService.deleteGuest);
router.get("/guest/:email", GuestService.getGuestByEmail);
router.get("/guests", GuestService.getGuests);

module.exports = router;
