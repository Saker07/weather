let k = "f4e0c249a3e57cabeea79c16f689c682";
console.log("ciao");
async function getData(){
    try {
        let a = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=f4e0c249a3e57cabeea79c16f689c682`, {mode: "cors"})

        a = await a.json();
        console.log(a);
        let lat = a[0].lat;
        let lon = a[0].lon;
        console.log(lat);
        console.log(lon)

        lat = 51;
        lon = 0;

        let b = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${k}`, {mode: "cors"})
        /* b = await b.json();
        console.log(b); */
            /* .then((response) => response.json())
            .then((data) => console.log(data)); */
            .then((response) => response.json())
            .then((data) => console.log(data));
    } catch (error) {console.log(error)}
}

getData();