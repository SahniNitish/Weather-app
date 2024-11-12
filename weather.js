const input = document.querySelector("input");
const btn = document.getElementById("btn");
const icon = document.getElementById("icon");
const weather = document.getElementById("weather");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");

btn.addEventListener("click", () => {
    let city = input.value;
    getWeather(city);
});

function getWeather(city) {
    console.log(city);

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2bb8df33a7b5a32dc36ac7f97b1ba446`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const iconcode = data.weather[0].icon;
            icon.innerHTML = `<img src="https://openweathermap.org/img/wn/${iconcode}@2x.png" alt="weather icon"/>`;
            // You can add more code here to display the temperature, description, etc.
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}
