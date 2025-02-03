const sum = (a, b) => {
  return a + b;
}

export {sum};

const fetchByCity = (city = 'Paris') => {
  const api = import.meta.env.VITE_WEATHER_API;
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

const displayWeather = async (city = 'Paris') => {
  try {
    const result = await fetchByCity(city);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

const cityFormElement = document.getElementById('city-form');
const cityNameInput = document.getElementById('city-name');

cityFormElement.addEventListener('submit', (event) => {
  event.preventDefault();
  const city = cityNameInput.value;
  displayWeather(city);
})

cityFormElement.addEventListener('reset', (event) => {
  event.preventDefault();
  cityNameInput.value = '';
})