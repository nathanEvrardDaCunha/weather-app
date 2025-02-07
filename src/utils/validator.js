class ValidatorError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValidatorError';
    }
}

// FIND A WAY TO MAKE THIS FILE MORE READABLE, SIMPLER and CONSCISE

export class Validator {
    #values;
    #constant;

    constructor(values, constant) {
        this.#values = values;
        this.#constant = constant;
    }

    get values() {
        return this.#values;
    }

    get constant() {
        return this.#constant;
    }

    isTooShort() {
        this.values.forEach((value, key) => {
            if (typeof value == this.constant.STRING) {
                if (value.length < this.constant.CITY_MIN_LENGTH) {
                    throw new ValidatorError(`${key} is too short !`);
                }
            }
        });
    }

    isTooLong() {
        this.values.forEach((value, key) => {
            if (typeof value == this.constant.STRING) {
                if (value.length > this.constant.CITY_MAX_LENGTH) {
                    throw new ValidatorError(`${key} is too long !`);
                }
            }
        });
    }

    isAlphabetic() {
        this.values.forEach((value, key) => {
            if (typeof value == this.constant.STRING) {
                if (!value.match(this.constant.ALPHABETICAL_REGEX)) {
                    throw new ValidatorError(`${key} contain characters other than letters or space !`);
                }
            }
        });
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
