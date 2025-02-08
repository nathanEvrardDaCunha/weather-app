import { WeatherUtils } from './weather-utils';

const CITY_MAX_LENGTH = 85;
const CITY_MIN_LENGTH = 1;

class DataValidatorError extends Error {
    constructor(message) {
        super(message);
        this.name = 'DataValidatorError';
    }
}

export class DataValidator extends WeatherUtils {
    static isLong(values) {
        values.forEach((value, key) => {
            if (this.isNull(value)) {
                throw new DataValidatorError(`Error: ${key} is null !`);
            }

            if (this.isUndefined(value)) {
                throw new DataValidatorError(`Error: ${key} is undefined !`);
            }

            if (!this.isString(value) && !this.isBoolean(value)) {
                throw new DataValidatorError(`Error: ${key} is not a string nor a boolean !`);
            }

            if (value.length > CITY_MAX_LENGTH) {
                throw new DataValidatorError(`Error: ${key} is longer than ${CITY_MAX_LENGTH} characters !`);
            }
        });
    }

    static isShort(values) {
        values.forEach((value, key) => {
            if (this.isNull(value)) {
                throw new DataValidatorError(`Error: ${key} is null !`);
            }

            if (this.isUndefined(value)) {
                throw new DataValidatorError(`Error: ${key} is undefined !`);
            }

            if (!this.isString(value) && !this.isBoolean(value)) {
                throw new DataValidatorError(`Error: ${key} is not a string nor a boolean !`);
            }

            if (value.length < CITY_MIN_LENGTH) {
                throw new DataValidatorError(`Error: ${key} is shorter than ${CITY_MIN_LENGTH} characters !`);
            }
        });
    }
}
