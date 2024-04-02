var express = require('express');
var router = express.Router();
var bus = require('../models/busrouters');


// router.get('/', (req, res) => {
//     bus.find({ companyName, startCity, totalseats, availableseats }, (err, result) => {
//         if (err) res.send(err)
//         else res.json({ result })
//     })
// })

router.post('/', (req, res) => {

    bus.find({ 'departureplace': req.body.departureplace, 'arrivalplace': req.body.arrivalplace }).exec((err, bus) => {
        if (err) {
            res.json({ status: false, message: "Error While Searching" })
        }
        else res.json({ bus })
    })
})

router.post('/', (req, res) => {

    bus.findOne({ _id: req.body.bId }, (err, bus) => {
        if (err) {
            res.json({ status: false, message: "Error While Searching With ID" })
        }
        else
            res.json({ bus })
    })
})

// router.post('/', (req, res) => {
//     let newBus = new bus(req.body)
//     newBus.save((err, bus) => {
//         if (err) console.log(err)
//         else res.status(201).json(bus)
//     })
// })
















module.exports = router;
