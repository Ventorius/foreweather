const request = require('request');


var getWeather = (lat, lng, cb) => {

    request({
        url: `https://api.darksky.net/forecast/67b2602ef4fae23023ef2ff67686a128/${lat},${lng}?units=si`,
        json: true
    }, (err, res, body) => {

        if(err){
            cb('Unable to connect to forecast.io');
        }else if(res.statusCode === 400){
            cb('Unable to fetch weather');
        }else if(!err && res.statusCode === 200){
            cb(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        }
    });

};

module.exports.getWeather = getWeather;
