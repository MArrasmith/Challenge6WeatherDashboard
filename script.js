

// GIVEN a weather dashboard with form inputs
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history

var searchBtn = document.querySelector("#searchBtn");
searchBtn.addEventListener("click", weatherApi)

function weatherApi() {
    var userInput = document.getElementById("searchField").value;
    var requestUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + userInput + "&APPID=65bf489682ee4f3dfe5a4a1c5d31f500&units=imperial";


    fetch(requestUrl)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data)
            var date = data['list'][0]['dt_txt']
            var temp = data['list'][0]['main']["temp"]
            var humidity = data['list'][0]['main']['humidity']
            var windspeed = data['list'][0]['wind']['speed']
            var weatherDescription = data['list'][0]['weather'][0]['description']
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
            currentLocation.innerHTML = userInput
            currentDate.innerHTML= "Current date: " + date  
            currentConditions.innerHTML = "Current conditions: " + weatherDescription
            currentTemp.innerHTML = "Current temperature: " + temp + "°"
            currentHumidity.innerHTML = "Current humidity: " + humidity
            currentWindspeed = currentWindSpeed.innerHTML = "Current wind speeds: " + windspeed

            
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity










// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city 
localStorage.setItem("userInput", JSON.stringify(userInput))
        })
}