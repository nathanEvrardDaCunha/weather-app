class DefinerError extends Error {
    constructor(message) {
        super(message);
        this.name = 'DefinerError';
    }
}

// FIND A WAY TO MAKE THIS FILE MORE READABLE, SIMPLER and CONSCISE

export class Definer {
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

    isNull() {
        this.values.forEach((value, key) => {
            if (value === this.constant.NULL) {
                throw new DefinerError(`${key} is null !`);
            }
        });
    }

    isUndefined() {
        this.values.forEach((value, key) => {
            if (value === this.constant.UNDEFINED) {
                throw new DefinerError(`${key} is undefined !`);
            }
        });
    }

    define() {
        try {
            this.isNull();
            this.isUndefined();
        } catch (error) {
            throw error;
        }
    }
}
