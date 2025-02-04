import { CONSTANT } from '../config/const-config';

class ValidatorError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValidatorError';
    }
}

export function isNull(name, value) {
    name ??= CONSTANT.UNDEFINED;
    value ??= CONSTANT.UNDEFINED;

    if (value === CONSTANT.NULL) {
        throw new ValidatorError(`${name} is null !`);
    }
}

export function isUndefined(name, value) {
    name ??= CONSTANT.UNDEFINED;
    value ??= CONSTANT.UNDEFINED;

    if (value === CONSTANT.UNDEFINED) {
        throw new ValidatorError(`${name} is undefined !`);
    }
}

export function isTooShort(name, value, limiter) {
    name ??= CONSTANT.UNDEFINED;
    value ??= CONSTANT.UNDEFINED;
    limiter ??= CONSTANT.UNDEFINED;

    if (value.length < limiter) {
        throw new ValidatorError(`${name} is too short !`);
    }
}

export function isTooLong(name, value, limiter) {
    name ??= CONSTANT.UNDEFINED;
    value ??= CONSTANT.UNDEFINED;
    limiter ??= CONSTANT.UNDEFINED;

    if (value.length > limiter) {
        throw new ValidatorError(`${name} is too long !`);
    }
}

export function isNotString(name, value) {
    name ??= CONSTANT.UNDEFINED;
    value ??= CONSTANT.UNDEFINED;

    if (typeof value !== CONSTANT.STRING) {
        throw new ValidatorError(`${name} is not a string !`);
    }
}

export function isAlphabetic(name, value) {
    name ??= CONSTANT.UNDEFINED;
    value ??= CONSTANT.UNDEFINED;

    if (!value.match(CONSTANT.ALPHABETICAL_REGEX)) {
        throw new ValidatorError(`${name} contain characters other than letters !`);
    }
}
