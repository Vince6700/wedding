const express = require('express')

const GuestController = require('../controllers/guestController')

const router = express.Router()

router.post('/guest', GuestController.createGuest)
router.put('/guest/:email', GuestController.updateGuest)
router.delete('/guest/:email', GuestController.deleteGuest)
router.get('/guest/:email', GuestController.getGuestByEmail)
router.get('/guests', GuestController.getGuests)

module.exports = router