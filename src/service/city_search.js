import { CITY_API, CITY_DATA } from '../config/api-config';
import { CONSTANT } from '../config/const-config';
import { trimValue, lowercaseValue } from '../utils/formators';
import { isNull, isUndefined, isTooLong, isTooShort, isNotString, isAlphabetic } from '../utils/validators';

const CITY_FORM_ELEMENT = document.getElementById('city-form');
const CITY_NAME_INPUT = document.getElementById('city-name');
const CITY_ERROR_ELEMENT = document.getElementById('city-error');
const CITY_INFORMATION_SECTION = document.getElementById('city-information');

// TODO: Check data => (Create test ?)
// TODO: Format data => (Create test ?)
// TODO: Sanitize data => (Create test ?)
// TODO: Display data to HTML tags

const verifyData = (name, data) => {
    try {
        isNull(name, data);
        isUndefined(name, data);
        isTooShort(name, data, CONSTANT.CITY_MIN_LENGTH);
        isTooLong(name, data, CONSTANT.CITY_MAX_LENGTH);
        isNotString(name, data);
        isAlphabetic(name, data);
        return 0;
    } catch (error) {
        return error;
    }
};

// TODO: Separate this file into DataVerificator ; DataFetchor ; DataDisplayor ?
// TODO: Replace Paris magic letters ?

const displayErrorMessage = (message) => {
    CITY_ERROR_ELEMENT.textContent = message;
};

// TEMPORARY
const getNestedData = (obj, path) => {
    return path.reduce((current, key) => {
        return current?.[key];
    }, obj);
};

const displayWeatherData = (data) => {
    // TODO: Replace magic value
    console.log(data);

    const cityName = getNestedData(data, CITY_DATA.NAME);
    const country = getNestedData(data, CITY_DATA.COUNTRY);

    const coordLatitude = data['coord']['lat'];
    const coordLongitude = data['coord']['lon'];
    const visibility = data['visibility'];
    const weatherMain = getNestedData(data, CITY_DATA.WEATHER);
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

// TEMPORARY
function fetchByCity(city, unit) {
    city ??= CITY_API.DEFAULT_CITY;
    unit ??= CITY_API.DEFAULT_UNIT;

    return new Promise((resolve, reject) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${CITY_API.API_KEY}&units=${unit}`)
            .then((response) => {
                return response.json();
            })
            .then((value) => {
                if (getNestedData(value, CITY_API.ERROR) === CITY_API.ERROR_CODE.NOT_FOUND) {
                    reject(value);
                }
                resolve(value);
            })
            .catch((error) => {
                reject(error);
            });
    });
}
// TODO: Replace Paris magic letters ?
const displayWeather = async (city = CITY_API.DEFAULT_CITY) => {
    try {
        const result = await fetchByCity(city, 'imperial');
        displayErrorMessage('');
        displayWeatherData(result);
    } catch (error) {
        displayErrorMessage(error.message);
    }
};

CITY_FORM_ELEMENT.addEventListener('submit', (event) => {
    event.preventDefault();

    // const formatedCity = formatData(String(CITY_NAME_INPUT.value));

    let formatedCity = trimValue('city name', CITY_NAME_INPUT.value);
    formatedCity = lowercaseValue('city name', formatedCity);
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
