// ================= CONFIG =================
const apiKey = "d0cc362f9180a95cabfea009e14e5aea";

// ================= DOM =================
const inputCity = document.getElementById("inputCity");
const searchBtn = document.getElementById("searchBtn");
const themeToggle = document.getElementById("themeToggle");

const cityNameEl = document.getElementById("city-name");
const timeEl = document.getElementById("time");
const dateEl = document.getElementById("date");

const tempEl = document.getElementById("temp");
const humidityEl = document.getElementById("humidity");
const windSpeedEl = document.getElementById("windspeed");
const cloudsEl = document.getElementById("clouds");
const forecastEls = [
    document.getElementById("day-1"),
    document.getElementById("day-2"),
    document.getElementById("day-3"),
    document.getElementById("day-4"),
    document.getElementById("day-5"),
];

inputCity.addEventListener('keydown', (e) => {
    if (e.key === "Enter") {
        const city = inputCity.value.trim();
        if (!city) return;
        fetchWeather(city);
        fetchForecast(city);
    }
})

// ================= CURRENT WEATHER =================
async function fetchWeather(city) {
    try {
        const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
        );

        if (!res.ok) {
            const err = await res.json();
            throw new Error(err.message);
        }

        const data = await res.json();
        updateWeatherUI(data);

        localStorage.setItem("lastCity", city);

    } catch (error) {
        cityNameEl.textContent = error.message;
    }
}

// ================= UPDATE WEATHER UI =================
function updateWeatherUI(data) {

    cityNameEl.textContent = `${data.name}, ${data.sys.country}`;
    tempEl.textContent = `🌡 ${data.main.temp.toFixed(1)} °C`;
    humidityEl.textContent = `💧 Humidity: ${data.main.humidity}%`;
    windSpeedEl.textContent = `💨 Wind: ${data.wind.speed} m/s`;
    cloudsEl.textContent = `☁ Clouds: ${data.clouds.all}%`;

    updateTimeDateUI(data.timezone);
}

// ================= TIME & DATE =================
function updateTimeDateUI(timezone) {
    const localTime =
        Date.now() + timezone * 1000 - new Date().getTimezoneOffset() * 60000;

    const dateObj = new Date(localTime);

    timeEl.textContent = dateObj.toLocaleTimeString();
    dateEl.textContent = dateObj.toDateString();
}

// ================= FORECAST =================
async function fetchForecast(city) {
    try {
        const res = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`
        );

        if (!res.ok) {
            throw new Error("Forecast not found");
        }

        const data = await res.json();
        updateForecastUI(data.list);

    } catch (error) {
        console.log(error.message);
    }
}

// ================= FORECAST UI =================
function updateForecastUI(list) {
    const days = {};

    list.forEach(item => {
        const date = item.dt_txt.split(" ")[0];
        if (!days[date]) {
            days[date] = item;
        }
    });

    const forecastDays = Object.values(days).slice(1, 6);

    forecastDays.forEach((item, index) => {
        const condition = item.weather[0].main;
        const icon = item.weather[0].icon;

        const clouds = item.clouds.all;
        const visibility = (item.visibility / 1000).toFixed(1);
        const wind = item.wind.speed;

        forecastEls[index].innerHTML = `
      <strong>${condition}</strong>
      <img src="https://openweathermap.org/img/wn/${icon}@2x.png" />
      <small>☁ ${clouds}%</small>
      <small>👁 ${visibility} km</small>
      <small>💨 ${wind} m/s</small>
    `;
    });
}

// ================= EVENTS =================
searchBtn.addEventListener("click", () => {
    const city = inputCity.value.trim();
    if (!city) return;

    fetchWeather(city);
    fetchForecast(city);
});

// ================= DARK MODE =================
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
});

// ================= RESTORE STATE =================
window.addEventListener("DOMContentLoaded", () => {
    const savedCity = localStorage.getItem("lastCity");
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark");
    }

    if (savedCity) {
        inputCity.value = savedCity;
        fetchWeather(savedCity);
        fetchForecast(savedCity);
    } else {
        fetchWeather("Delhi");
        fetchForecast("Delhi");
    }
});
