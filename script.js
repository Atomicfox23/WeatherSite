let weather = {
    apiKey : "158faf94981e9f8db10e6fa1e581187d",
    fetchWeather: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid="+ this.apiKey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data){
        const{name} = data;
        const{icon,description} = data.weather[0];
        const{temp,humidity} = data.main;
        const{speed} = data.wind;
        console.log(name,description,humidity,temp,icon,speed);
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".description").innerText = " In " + name + " is " + description;
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + "km/h";
    },
    seach: function()
    {
        this.fetchWeather(document.querySelector(".search_bar").value);
    }
};

document.querySelector(".search button").addEventListener("click",function(){weather.seach();})
document.querySelector(".search").addEventListener('keypress', function (e) {

    if (e.key === 'Enter') {
    weather.seach();
    }
    });
