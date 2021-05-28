const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const humidity = document.querySelector('.humidity');
const wind = document.querySelector('.wind');
const forecastDesc = document.querySelector('.forecastDesc');

async function setForecast(e) {
    const city = localStorage.getItem('city');
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=en&appid=0ccf0b1c1a6737e16e4c88c68e630b77&units=metric`;
    const res = await fetch(url);

    if (!res.ok) {
        e.innerText = "IncorrectCity";
        return false;
    }
    else{   

    const data = await res.json();

    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${data.main.temp}°C`;
    forecastDesc.textContent = data.weather[0].description;
    humidity.innerHTML = `${data.main.humidity}%`;
    wind.innerHTML = `${data.wind.speed} m/s`;
    return true;
    }
}

setForecast(localStorage.getItem('city'));