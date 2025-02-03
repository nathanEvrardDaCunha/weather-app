const sum = (a, b) => {
  return a + b;
}

export {sum};

const fetchByCity = () => {
  const api = import.meta.env.VITE_WEATHER_API;
  const city = 'Paris';

  return new Promise((resolve, reject) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`)
    .then((response) => {
      return response.json();
    })
    .then((value) => {
      resolve(value);
    })
    .catch((error) => {
      reject(error);
    })
  })
}

const displayWeather = async () => {
  try {
    const result = await fetchByCity();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

displayWeather();
