const express = require('express')
const app = express()
const ejsLayouts = require('express-ejs-layouts')


app.set('view engine', 'ejs')
app.use(ejsLayouts)
//body-parser middleware which makes req.body pass data correctly
app.use(express.urlencoded({extended: false}))
app.get('/', (req, res)=>{
    res.render('home.ejs')
})
const dinosaurs = require('./controllers/dinosaurs')
const creatures = require('./controllers/prehistoric_creatures')

app.use('/dinosaurs', dinosaurs)

app.use('/dinosaurs/new', dinosaurs)

app.use('/dinosaurs/show', dinosaurs)

app.use('/prehistoric_creatures', creatures)
app.use('/prehistoric_creatures/new', creatures)
app.use('/prehistoric_creatures/show', creatures)


app.listen(8000, ()=>{
    console.log('Listen up! It\s port 8000')
})