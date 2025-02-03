const sum = (a, b) => {
    return a + b;
};

export { sum };

// TODO: Refactor by creating a WeatherManager Class or Object ?

const fetchByCity = (city = 'Paris') => {
    const api = import.meta.env.VITE_WEATHER_API;
    return new Promise((resolve, reject) => {
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`
        )
            .then((response) => {
                return response.json();
            })
            .then((value) => {
                resolve(value);
            })
            .catch((error) => {
                reject(error);
            });
    });
};

const displayWeather = async (city = 'Paris') => {
    try {
        const result = await fetchByCity(city);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
};

const cityFormElement = document.getElementById('city-form');
const cityNameInput = document.getElementById('city-name');

// TODO: Remove all console.log

cityFormElement.addEventListener('submit', (event) => {
    event.preventDefault();

    // TODO: Check data => (Create test ?)
    // TODO: Format data => (Create test ?)
    // TODO: Sanitize data => (Create test ?)

    const city = cityNameInput.value;

    // TODO: Display data to HTML tags
    // TODO: Create error message

    displayWeather(city);
});

cityFormElement.addEventListener('reset', (event) => {
    event.preventDefault();

    // TODO: Create informative message ?

    cityNameInput.value = '';
});
