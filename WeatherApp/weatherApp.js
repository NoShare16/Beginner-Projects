let weather = {
    apiKey: "f2ccd9b36857f3ac826871d3e438ec5d",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city 
            + "&units=metric&appid="
            + this.apiKey
        )
            .then((response) => response.json())
            .then ((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, description, temp, humidity, speed);
        document.querySelector("h1").innerText = "Weather in " + name;
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "˚C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".speed").innerText = "Windspeed " + speed + " km/h";
    },
    search: function () {
        this.fetchWeather(document.querySelector("input").value);
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

weather.fetchWeather("Hanover");