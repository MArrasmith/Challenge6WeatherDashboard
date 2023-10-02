// GIVEN a weather dashboard with form inputs
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city

//USER INPUT 

var searchBtn = document.querySelector("#searchBtn");
searchBtn.addEventListener("click", weatherApi)
    


function weatherApi() {
    var userInput = document.getElementById("searchField").value;
    var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + userInput + "&APPID=65bf489682ee4f3dfe5a4a1c5d31f500";

    fetch(requestUrl)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            var temp = data['main']['temp']
            var humidity = data['main']['humidity']
            var windspeed = data['wind']['speed']
            var weatherDescription = data['weather'][0]['description']
            console.log(weatherDescription, temp, humidity, windspeed)
        })
    }
