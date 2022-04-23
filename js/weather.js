const API_KEY = 'b0983341e1a1a3658c153e0fa367b6ea'

function onGeoOk(position) {
    console.log(position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
    fetch(URL).then(response => response.json()).then(data => {
        const city = document.querySelector('#weather span:first-child');
        const weather = document.querySelector('#weather span:last-child');
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} ${Math.floor(data.main.temp)}°C`;
    })
    
    
}

function onGeoError() {
    alert("Can't find you. No wheather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);