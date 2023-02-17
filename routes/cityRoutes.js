const express = require("express");
const router = express.Router();
const City = require("../models/City")

module.exports = router;

// POST a new City
router.post("/city", async (req,res) => {
    let newCity = new City({
        id: req.body.id,
        description: req.body.description,
        population: req.body.population
    })

    try {
        const cityToSave = await newCity.save();
        res.status(200).json({message: "Succesfully Created new City", cityToSave})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})