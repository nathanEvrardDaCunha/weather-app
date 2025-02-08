export const API_CONST_CONF = {
    API_KEY: import.meta.env.VITE_WEATHER_API,
};

export const API_CONST_DATA = {
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

export const GLOBAL_CONST = {
    ALPHABETICAL_REGEX: /^[A-Za-z -]+$/,
    CITY_MAX_LENGTH: 85,
    CITY_MIN_LENGTH: 1,
};
