const request = require('request')

const forecast = (lat, long, callback) => {
    const url = 'https://api.weatherstack.com/current?access_key=bd75edf5b57eb75b9a6c467ed00b2153&query=' + lat + ',' + long

    request({url: url, json: true}, (error, response) => {
        if(error){
            callback("Unable to access the service", undefined)
        } else if(response.body.error){
            callback("Can't find the location", undefined)
        } else {
            console.log(response.body.location.name)
            callback(undefined, {
                description: response.body.current.weather_descriptions[0],
                location: response.body.location.name,
                temperature: response.body.current.temperature,
                feelslike: response.body.current.feelslike
            })
        }
    })
}
// forecast(37.8267,-122.4233, (error, data) => {
//     console.log("Error: " , error)
//     console.log("data: " , data)
// })

module.exports = forecast
