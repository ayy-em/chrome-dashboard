var user_lat = 0;
var user_long = 0;

// get browser location to know where the hell to take the weather from
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
        console.log("location gotten");
    } else {
        var browser_location = "Location Unavailable";
        document.getElementById("weather_texty_text").innerHTML = "RIP location, no weather for u";
        console.log("location ripperoni");
    }
}


function showPosition(position) {
    //document.getElementById("weather_texty_text").innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
    user_lat = position.coords.latitude;
    user_long = position.coords.longitude;
    console.log("lat: " + user_lat + "; long: " + user_long);
    //console.log("all good, changed text to position");
}

getLocation();

/*
get global lat/lon vars outside function's scope
var value=50;
function a() {
  alert(window.value);//accessing global variable
}

*/

//now we make a request to an API
var request = new XMLHttpRequest()

// the config.js file is in the .gitignore, DUH
//var address = 'https://api.openweathermap.org/data/2.5/weather?lat=' + user_lat + '&lon=' + user_long + '&units=metric&appid=' + String(config['api_key']);
var address = 'https://api.openweathermap.org/data/2.5/weather?lat=' + position.coords.latitude + '&lon=' + position.coords.longitude + '&units=metric&appid=' + String(config['api_key']);
request.open('GET', address, true);

request.onload = function() {
  // request function goes here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    console.log(data);
    document.getElementById("weather_texty_text").innerHTML = data["name"]
  } else {
    console.log("Error getting 200 from openweathermap api, yo!");
  }
}

// send that bitch and hope it comes back with 200 bags of goodies
request.send();
