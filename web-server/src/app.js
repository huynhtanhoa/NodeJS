const path = require('path')
const express = require('express')
const hbs = require('hbs')

// utils
const forecast = require('./utils/forecast')
const geoCode = require('./utils/geocode')

// Define paths for express config
const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

// set up handlebars
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, '../templates/views'))
hbs.registerPartials(path.join(__dirname, '../templates/partials'));

// set up static directory to serve
app.use(express.static(publicDirectoryPath))

// Direct to index.hbs using handlebars
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Steven'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Steven'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        message: 'This is some helpful text',
        title: 'Help',
        name: 'Steven'
    })
})


app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address'
        })
    }
    // forecast, geocode
    geoCode(req.query.address, (error, {lat, lon, display_name} = {}) => {
        if (error) {
            return res.send({
                error: "Unable to access the service!!!!"
            })
        }
        console.log('SUccess!')
        forecast(lat, lon, (error, {location, description, temperature, feelslike}) => {
            if (error) {
                return console.log("Error: ", error)
            }
            return res.send({
                location: location,
                description: description,
                temperature: temperature,
                feelslike: feelslike
            })
        })
    })

})


app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Steven',
        errorMessage: 'Help page not found'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Steven',
        errorMessage: 'Page not found'
    })
})

app.listen(3000, () => {
    console.log('Server is on up 3000.')
})