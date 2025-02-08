import { WeatherUtils } from './weather-utils';

class DataFetcherError extends Error {
    constructor(message) {
        super(message);
        this.name = 'DataFetcherError';
    }
}

export class DataFetcher extends WeatherUtils {
    static isImperial(values) {
        values.forEach((value, key) => {
            if (this.isNull(value)) {
                throw new DataFetcherError(`Error: ${key} is null !`);
            }

            if (this.isUndefined(value)) {
                throw new DataFetcherError(`Error: ${key} is undefined !`);
            }

            if (!this.isString(value) && !this.isBoolean(value)) {
                throw new DataFetcherError(`Error: ${key} is not a string nor a boolean !`);
            }
        });

        if (values.get('imperial') === true) {
            return 'imperial';
        }
        return 'metric';
    }

    static async fetchWeather(values) {
        const url =
            `https://api.openweathermap.org/data/2.5/weather` +
            `?q=${values.get('city')}` +
            `&appid=${import.meta.env.VITE_WEATHER_API}` +
            `&units=${this.isImperial(values)}`;

        return fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((result) => {
                if (this.getNestedData(result, ['cod']) == 404) {
                    throw new DataFetcherError(`The data related to this city hasn't been found !`);
                }
                return result;
            })
            .catch((error) => {
                throw error;
            });
    }

    static getLocation() {
        return new Promise((resolve, reject) => {
            return navigator.geolocation.getCurrentPosition((position) => {
                resolve(position), reject(new DataFetcherError(`Problem during user location fetching !`));
            });
        });
    }

    static async fetchLocation() {
        try {
            const response = await this.getLocation();

            const url =
                `https://api.bigdatacloud.net/data/reverse-geocode-client` +
                `?latitude=${response['coords']['latitude']}` +
                `&longitude=${response['coords']['longitude']}` +
                `&localityLanguage=en`;

            return fetch(url)
                .then((data) => {
                    return data.json();
                })
                .then((result) => {
                    return result.city;
                })
                .catch((error) => {
                    throw error;
                });
        } catch (error) {
            throw new DataFetcherError(`Problem during user location fetching !`);
        }
    }
}
