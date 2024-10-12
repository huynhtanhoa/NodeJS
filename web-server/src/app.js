const path = require('path')
const express = require('express')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, '../views'))

app.use(express.static(publicDirectoryPath))

// Direct to index.hbs using handlebars
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather app',
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
        name: 'Steven'
    })
})


app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is raining',
        location: 'Ho Chi Minh City'
    })
})

app.listen(3000, () => {
    console.log('Server is on up 3000.')
})