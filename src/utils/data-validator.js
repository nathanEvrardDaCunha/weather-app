import { DataUtils } from './data-utils';
import { CONSTANT } from '../config/const-config';

class DataValidatorError extends Error {
    constructor(message) {
        super(message);
        this.name = 'DataValidatorError';
    }
}

export class DataValidator extends DataUtils {
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

            if (key === 'city') {
                if (value.length > CONSTANT.CITY_MAX_LENGTH) {
                    throw new DataValidatorError(
                        `Error: ${key} is longer than ${CONSTANT.CITY_MAX_LENGTH} characters !`
                    );
                }
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

            if (key === 'city') {
                if (value.length < CONSTANT.CITY_MIN_LENGTH) {
                    throw new DataValidatorError(
                        `Error: ${key} is shorter than ${CONSTANT.CITY_MIN_LENGTH} characters !`
                    );
                }
            }
        });
    }

    static isAlphabetical(values) {
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

            if (key === 'city') {
                if (!value.match(CONSTANT.ALPHABETICAL_REGEX)) {
                    throw new DataValidatorError(`Error: ${key} contain forbidden characters !`);
                }
            }
        });
    }
}
