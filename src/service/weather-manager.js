import { CITY_API, CITY_DATA } from '../config/api-config';

class WeatherManager {
    getNestedData = (obj, path) => {
        return path.reduce((current, key) => {
            return current?.[key];
        }, obj);
    };

    fetchByCity(city, unit) {
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
}
