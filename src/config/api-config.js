export const CITY_API = {
    API_KEY: import.meta.env.VITE_WEATHER_API,
    // Useless for now but might be usefull for later modular use.
    // API_REQUEST_URL: 'https://api.openweathermap.org/data/2.5/weather',
    // API_REQUEST_CITY: `?q=${city}`,
    // API_REQUEST_KEY: `&appid=${key}`,
    // API_REQUEST_UNIT: `&units=${unit}`,
    DEFAULT_CITY: 'Paris',
    DEFAULT_UNIT: 'metric',
    ERROR: ['cod'],
    ERROR_CODE: { NOT_FOUND: 404 },
    CITY_NAME: 'City name',
};

export const CITY_DATA = {
    NAME: ['name'],
    COUNTRY: ['sys', 'country'],
    LATITUDE: ['coord', 'lat'],
    LONGITUDE: ['coord', 'lon'],
    WEATHER: ['weather', 0, 'main'],
    VISIBILITY: ['visibility'],
    CLOUD: ['clouds', 'all'],
    HUMIDITY: ['main', 'humidity'],
    PRESSURE: ['main', 'pressure'],
    WIND_DEG: ['wind', 'deg'],
    WIND_SPEED: ['wind', 'speed'],
    TEMP_FEEL: ['main', 'feels_like'],
    TEMP_AVG: ['main', 'temp'],
    TEMP_MIN: ['main', 'temp_min'],
    TEMP_MAX: ['main', 'temp_max'],
};
