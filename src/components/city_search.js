const CITY_FORM_ELEMENT = document.getElementById('city-form');
const CITY_NAME_INPUT = document.getElementById('city-name');
const CITY_ERROR_ELEMENT = document.getElementById('city-error');
const SHORTEST_CITY_NAME_WORLDWIDE = 1; // Sweden city name
const LONGUEST_CITY_NAME_WORLDWIDE = 85; // Taumata fullname
const CITY_INFORMATION_SECTION = document.getElementById('city-information');

class FormError extends Error {
    constructor(message) {
        super(message);
        this.name = 'FormError';
    }
}

// TODO: Check data => (Create test ?)
// TODO: Format data => (Create test ?)
// TODO: Sanitize data => (Create test ?)
// TODO: Display data to HTML tags
const formatData = (value) => {
    return value.toLowerCase().trim();
};

const isNull = (name, value) => {
    if (value === null) {
        throw new FormError(`> ERROR: ${name} is null !`);
    }
};

const isUndefined = (name, value) => {
    if (value === undefined) {
        throw new FormError(`> ERROR: ${name} is undefined !`);
    }
};

const isTooShort = (name, value, limiter) => {
    if (value.length < limiter) {
        throw new FormError(`> ERROR: ${name} is too short !`);
    }
};

const isTooLong = (name, value, limiter) => {
    if (value.length > limiter) {
        throw new FormError(`> ERROR: ${name} is too long !`);
    }
};

const isNotString = (name, value) => {
    if (typeof value !== 'string') {
        throw new FormError(`> ERROR: ${name} is not a string !`);
    }
};

const isAlphabetic = (name, value) => {
    const regex = /^[A-Za-z]+$/;
    if (!value.match(regex)) {
        throw new FormError(
            `> ERROR: ${name} contain characters other than letters !`
        );
    }
};

const verifyData = (name, data) => {
    try {
        isNull(name, data);
        isUndefined(name, data);
        isTooShort(name, data, SHORTEST_CITY_NAME_WORLDWIDE);
        isTooLong(name, data, LONGUEST_CITY_NAME_WORLDWIDE);
        isNotString(name, data);
        isAlphabetic(name, data);
        return 0;
    } catch (error) {
        return error;
    }
};

// TODO: Separate this file into DataVerificator ; DataFetchor ; DataDisplayor ?
// TODO: Replace Paris magic letters ?
const fetchByCity = (city = 'Paris', unit = 'metric') => {
    const api = import.meta.env.VITE_WEATHER_API;
    return new Promise((resolve, reject) => {
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=${unit}`
        )
            .then((response) => {
                return response.json();
            })
            .then((value) => {
                // TODO: Replace this magic number
                if (value['cod'] == 404) {
                    reject(value);
                }
                resolve(value);
            })
            .catch((error) => {
                reject(error);
            });
    });
};

const displayErrorMessage = (message) => {
    CITY_ERROR_ELEMENT.textContent = message;
};

const displayWeatherData = (data) => {
    // TODO: Replace magic value
    console.log(data);

    const cityName = data['name'];
    const country = data['sys']['country'];
    const coordLatitude = data['coord']['lat'];
    const coordLongitude = data['coord']['lon'];
    const visibility = data['visibility'];
    const weatherMain = data['weather'][0]['main'];
    const windDegre = data['wind']['deg'];
    const windSpeed = data['wind']['speed'];
    const clouds = data['clouds']['all'];
    const temperatureFeeling = data['main']['feels_like'];
    const humidity = data['main']['humidity'];
    const pressure = data['main']['pressure'];
    const temp = data['main']['temp'];
    const tempMax = data['main']['temp_max'];
    const tempMin = data['main']['temp_min'];

    // const

    // const parsedData = JSON.parse(data);
    // console.log(parsedData);

    // CITY_INFORMATION_SECTION.innerHTML = `
    // <p>${parsedData.weather.main}: ${parsedData.weather.description}</p>
    // `;

    CITY_INFORMATION_SECTION.innerHTML = `
    <p>City: ${cityName}</p>
    <p>Coordonate: latitude ${coordLatitude} and longitude ${coordLongitude}</p>
    <p>${country}</p>
    <p>Main: ${weatherMain}</p>
    <p>Clouds: ${clouds}</p>
    <p>Visibility: ${visibility}</p>
    <p>Wind: ${windDegre} degree and for ${windSpeed} speed</p>
    <p>Feels like: ${temperatureFeeling}</p>
    <p>Humidity: ${humidity}</p>
    <p>Pressure: ${pressure}</p>
    <p>Average Temp: ${temp}</p>
    <p>Min Temp: ${tempMin}</p>
    <p>Max Temp: ${tempMax}</p>
    `;
};

// TODO: Replace Paris magic letters ?
const displayWeather = async (city = 'Paris') => {
    try {
        const result = await fetchByCity(city, 'imperial');
        // console.log(result);
        displayWeatherData(result);
    } catch (error) {
        displayErrorMessage(error.message);
    }
};

CITY_FORM_ELEMENT.addEventListener('submit', (event) => {
    event.preventDefault();

    const formatedCity = formatData(String(CITY_NAME_INPUT.value));
    const name = 'City';

    const verificationErrors = verifyData(name, formatedCity);
    if (verificationErrors === 0) {
        displayWeather(formatedCity);
    } else {
        displayErrorMessage(verificationErrors.message);
    }
});

// TODO: Create informative message ?
CITY_FORM_ELEMENT.addEventListener('reset', (event) => {
    event.preventDefault();

    CITY_NAME_INPUT.value = '';
});
