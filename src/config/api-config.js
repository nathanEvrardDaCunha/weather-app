export const CITY_API = {
    API_KEY: import.meta.env.VITE_WEATHER_API,
    DEFAULT_CITY: 'Paris',
    DEFAULT_UNIT: 'metric',
    ERROR: ['cod'],
    ERROR_CODE: { NOT_FOUND: 404 },
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

// TODO: Separate to "CITY_API" and "CITY_DATA"
