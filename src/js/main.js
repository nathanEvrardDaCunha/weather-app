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

const defineCity = (city) => {
    const SHORTEST_CITY_NAME_WORLDWIDE = 1; // Sweden city name
    const LONGUEST_CITY_NAME_WORLDWIDE = 85; // Taumata fullname

    // TODO: Create custom CityName Error to DRY my error message ?

    if (city === null) {
        throw new Error('> ERROR: City name is null !');
    }

    if (city === undefined) {
        throw new Error('> ERROR: City name is undefined !');
    }

    if (city.length < SHORTEST_CITY_NAME_WORLDWIDE) {
        throw new Error('> ERROR: City name is too short !');
    }

    if (city.length > LONGUEST_CITY_NAME_WORLDWIDE) {
        throw new Error('> ERROR: City name is too long !');
    }

    if (typeof city !== 'string') {
        throw new Error('> ERROR: City name is not a string !');
    }
};

const formatCity = (city) => {
    return city.toLowerCase().trim();
};

const sanitizeCity = (city) => {
    const regexLetterOnly = /^[A-Za-z]+$/;

    if (!city.match(regexLetterOnly)) {
        throw new Error(
            '> ERROR: City contain character that are not letters !'
        );
    }
};

cityFormElement.addEventListener('submit', (event) => {
    event.preventDefault();

    // TODO: Check data => (Create test ?)
    // TODO: Format data => (Create test ?)
    // TODO: Sanitize data => (Create test ?)

    let city = String(cityNameInput.value);

    try {
        city = formatCity(city);
        defineCity(city);
        sanitizeCity(city);
    } catch (error) {
        // TODO: Create and display error message
        console.log(error.message);
    }

    // TODO: Display data to HTML tags

    displayWeather(city);
});

cityFormElement.addEventListener('reset', (event) => {
    event.preventDefault();

    // TODO: Create informative message ?

    cityNameInput.value = '';
});
