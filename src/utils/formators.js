import { CONSTANT } from '../config/const-config';

class FormatorError extends Error {
    constructor(message) {
        super(message);
        this.name = 'FormatorError';
    }
}

export function trimValue(name, value) {
    name ??= CONSTANT.UNDEFINED;
    value ??= CONSTANT.UNDEFINED;

    if (typeof value !== CONSTANT.STRING) {
        throw new FormatorError(`${name} is not a string !`);
    }

    return value.trim();
}

export function lowercaseValue(name, value) {
    name ??= CONSTANT.UNDEFINED;
    value ??= CONSTANT.UNDEFINED;

    if (typeof value != CONSTANT.STRING) {
        throw new FormatorError(`${name} is not a string !`);
    }

    return value.toLowerCase();
}
