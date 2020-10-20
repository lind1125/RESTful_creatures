const express = require('express')
const router = express.Router()
const fs = require('fs')

// ------> CREATURE INDEX ROUTE <---------
router.get('/', (req, res)=>{
    let creatures = fs.readFileSync('./prehistoric_creatures.json')
    let creatureData = JSON.parse(creatures) //converts thse string to an array

    res.render('prehistoric_creatures/index.ejs', {creatures: creatureData})
})

// ------> CREATURE NEW ROUTE <---------
router.get('/new', (req, res)=>{
    res.render('prehistoric_creatures/new.ejs')
})

// ------> CREATURE SHOW ROUTE <---------
router.get('/:idx', (req, res)=>{
    let prehistoricCreatures = fs.readFileSync('./prehistoric_creatures.json')
    let creatureData = JSON.parse(prehistoricCreatures) //converts thse string to an array
    //get array index from url parameter
    let creatureIndex = req.params.idx
    res.render('prehistoric_creatures/show.ejs', {creature: creatureData[creatureIndex], creatureId: creatureIndex})
})

// ------> CREATURE POST ROUTE <---------
router.post('/', (req, res)=>{
    let prehistoricCreatures = fs.readFileSync('./prehistoric_creatures.json')
    let creatureData = JSON.parse(prehistoricCreatures) 
    creatureData.push(req.body)

    fs.writeFileSync('./prehistoric_creatures.json', JSON.stringify(creatureData))

    res.redirect('/prehistoric_creatures')
})

module.exports = router;