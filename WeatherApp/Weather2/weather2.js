const weather = {
apiKey : "f2ccd9b36857f3ac826871d3e438ec5d",
fetchWeather:  function(city){
    fetch("https://api.openweathermap.org/data/2.5/weather?q="
    + city
    + "&lang=de&units=metric&appid="
    + this.apiKey)

    .then((response) => response.json())
    .then ((data) => this.displayWeather(data));
},

displayWeather: function(data) {
    const {name} = data;
    const {temp, feels_like, temp_min, temp_max} =  data.main;
    const {speed} = data.wind;
    console.log(name, temp, feels_like, temp_min, temp_max, speed);
    document.querySelector("h1").innerText = "Wetter in " + name;
    document.querySelector("h2").innerText = temp + "˚C";
    document.querySelector(".feels").innerText = "Gefühlt: " +feels_like + "˚C"
    document.querySelector(".min").innerText = "Min: " + temp_min + "˚C"
    document.querySelector(".max").innerText = "Max: " + temp_max + "˚C"
    document.querySelector(".wind").innerText = "Windgeschwindigkeit: " + speed + "km/h"
},

search: function() {
    this.fetchWeather(document.querySelector("input").value)
}
 };

 const textInput = document.querySelector("input");

 document.querySelector("button").addEventListener("click", function () {
 weather.search();
 textInput.value = "";
 });

 document.querySelector("input").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.search();
        textInput.value = "";
    }
    });

weather.fetchWeather("hannover");