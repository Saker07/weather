let k = "f4e0c249a3e57cabeea79c16f689c682";
let unit = "metric";
console.log("ciao");
async function getData(loc){
    try {
        let locationRequest = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${loc}&limit=5&appid=f4e0c249a3e57cabeea79c16f689c682`, {mode: "cors"})

        locationRequest = await locationRequest.json();
        let lat = locationRequest[0].lat;
        let lon = locationRequest[0].lon;
        console.log(lat);
        console.log(lon);

        /* lat = 51;
        lon = 0; */
        let dataRequest = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${k}&units=${unit}`, {mode: "cors"});
        dataRequest = await dataRequest.json();
        console.log(dataRequest)
        return dataRequest;
    } catch (error) {console.log(error)}
}
async function displayWeatherData(response){
    document.querySelector(".mainWeather").textContent = response.weather[0].main.toUpperCase();
    document.querySelector(".temp>.data").textContent = response.main.temp;
    document.querySelector(".feltTemp>.data").textContent = response.main.feels_like;
    document.querySelector(".humidity>.data").textContent = response.main.humidity;
    document.querySelector(".wind>.data").textContent = response.wind.speed;
    document.querySelector(".location").textContent = response.name.toUpperCase();
}

getData("london").then(displayWeatherData);

let anch = document.querySelector("#search");
anch.addEventListener("change", e=>getData(e.target.value).then(displayWeatherData));