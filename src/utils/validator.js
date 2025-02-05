class ValidatorError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValidatorError';
    }
}

export class Validator {
    #name;
    #value;
    #constant;

    constructor(name, value, constant) {
        this.#name = name;
        this.#value = value;
        this.#constant = constant;
    }

    get name() {
        return this.#name;
    }

    get value() {
        return this.#value;
    }

    get constant() {
        return this.#constant;
    }

    isTooShort() {
        if (this.value.length < this.constant.CITY_MIN_LENGTH) {
            throw new ValidatorError(`${this.name} is too short !`);
        }
    }

    isTooLong() {
        if (this.value.length > this.constant.CITY_MAX_LENGTH) {
            throw new ValidatorError(`${this.name} is too long !`);
        }
    }

    // BUG: Can't input 'new zealand'
    isAlphabetic() {
        if (!this.value.match(this.constant.ALPHABETICAL_REGEX)) {
            throw new ValidatorError(`${this.name} contain characters other than letters !`);
        }
    }

    validate() {
        try {
            this.isTooShort();
            this.isTooLong();
            this.isAlphabetic();
        } catch (error) {
            throw error;
        }
    }
}
