import { WeatherUtils } from './weather-utils';

class DataFormatorError extends Error {
    constructor(message) {
        super(message);
        this.name = 'DataFormatorError';
    }
}

export class DataFormator extends WeatherUtils {
    static trimValues(values) {
        values.forEach((value, key) => {
            if (this.isNull(value)) {
                throw new DataFormatorError(`Error: ${key} is null !`);
            }

            if (this.isUndefined(value)) {
                throw new DataFormatorError(`Error: ${key} is undefined !`);
            }

            if (!this.isString(value) && !this.isBoolean(value)) {
                throw new DataFormatorError(`Error: ${key} is not a string nor a boolean !`);
            }

            if (this.isString(value)) {
                values.set(key, value.trim());
            }
        });
        return values;
    }

    static lowerCaseValues(values) {
        values.forEach((value, key) => {
            if (this.isNull(value)) {
                throw new DataFormatorError(`Error: ${key} is null !`);
            }

            if (this.isUndefined(value)) {
                throw new DataFormatorError(`Error: ${key} is undefined !`);
            }

            if (!this.isString(value) && !this.isBoolean(value)) {
                throw new DataFormatorError(`Error: ${key} is not a string nor a boolean !`);
            }

            if (this.isString(value)) {
                values.set(key, value.toLowerCase());
            }
        });
        return values;
    }
}
