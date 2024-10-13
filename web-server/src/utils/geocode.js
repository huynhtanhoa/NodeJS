const request = require("request");

const geoCode = (address, callback) => {
    const url = 'https://geocode.maps.co/search?q=' + encodeURIComponent(address) + '&api_key=6707dff830ba2238989261jcnb701e7& ';

    request({url: url, json: true}, (error, response) => {
        if (error) {
            callback("Unable to access the service", undefined)
        } else if (response.body.length === 0) {
            callback("Can't find the location", undefined)
        } else {
            callback(undefined, {
                lat: response.body[0].lat,
                lon: response.body[0].lon,
                display_name: response.body[0].display_name
            })
        }
    })
}

module.exports = geoCode