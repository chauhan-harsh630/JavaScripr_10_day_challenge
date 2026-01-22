const apiKey = "d0cc362f9180a95cabfea009e14e5aea";


async function fetchWeather(city) {
    try {
        const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
        );

        if (!res.ok) {
            console.log(res.status);
            const err = await res.json();
            console.log(err);
            throw new Error("Weather not found");
        }

        const data = await res.json();
        console.log(data);

    } catch (error) {
        console.error(error.message);
    }
}
fetchWeather("Bulandshahr");

async function fetchForecast(city) {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city},IN&
units=metric&appid=${apiKey}`
    );


    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.message);
    }


    const data = await res.json();
    console.log("Forecast:", data);


  } catch (error) {
    console.error(error.message);
  }
}

fetchForecast("Delhi");