// get browser location to know where the hell to take the weather from
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        var browser_location = "Location Unavailable";
        document.getElementById("weather_texty_text").innerHTML = "RIP location, no weather for u";
    }
}

function showPosition(position) {
    document.getElementById("weather_texty_text").innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
}

//now we make a request to an API
var request = new XMLHttpRequest()

// the config.js file is in the .gitignore, DUH
var address = 'https://api.openweathermap.org/data/2.5/find?q=London&units=metric&appid=' + String(config['api_key'])
request.open('GET', address, true)

request.onload = function() {
  // request function goes here
  var data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {
    console.log(data)
  } else {
    console.log('Error getting 200 from openweathermap api, yo!')
  }
}

// send that bitch and hope it comes back with 200 bags of goodies
request.send()
