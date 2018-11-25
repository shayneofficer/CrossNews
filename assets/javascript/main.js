// ==================================================================================================================
// Retrieve crossword info from the GitHub archive
var year = "2000";
var month = "06";
var day = "15";

var crossWordURL = `https://raw.githubusercontent.com/doshea/nyt_crosswords/master/${year}/${month}/${day}.json`;

$.ajax({
    url: crossWordURL,
    method: "GET"
}).then(function (data) {
    data = JSON.parse(data);
    console.log(data);
})


// ==================================================================================================================
// Retrieve weather info from the Dark Sky API

// (Chicago) lattitude & longitude
var weatherLattitude = "41.881832";
var weatherLongitude = "-87.623177";

// Time of weather
var weatherYear = "2018";
var weatherMonth = "11";
var weatherDay = "24";


var weatherKey = "ec5b98b7b3c4b26cd294595db6f0a868"
var weatherURL = `https://api.darksky.net/forecast/${weatherKey}/${weatherLattitude},${weatherLongitude},${weatherYear}-${weatherMonth}-${weatherDay}T12:00:00?exclude=currently,minutely,hourly,flags`;

$.ajax({
    url: weatherURL,
    method: "GET",
    dataType: "jsonp"
}).then(function (response) {
    // Console log the response object for testing purposes
    console.log(response);
});

// ==================================================================================================================