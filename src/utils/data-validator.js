import { DataUtils } from './data-utils';
import { GLOBAL_CONST } from '../config/global-const';

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
                if (value.length > GLOBAL_CONST.CITY_MAX_LENGTH) {
                    throw new DataValidatorError(
                        `Error: ${key} is longer than ${GLOBAL_CONST.CITY_MAX_LENGTH} characters !`
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
                if (value.length < GLOBAL_CONST.CITY_MIN_LENGTH) {
                    throw new DataValidatorError(
                        `Error: ${key} is shorter than ${GLOBAL_CONST.CITY_MIN_LENGTH} characters !`
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
                if (!value.match(GLOBAL_CONST.ALPHABETICAL_REGEX)) {
                    throw new DataValidatorError(`Error: ${key} contain forbidden characters !`);
                }
            }
        });
    }
}
