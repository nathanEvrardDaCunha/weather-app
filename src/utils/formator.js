class FormatorError extends Error {
    constructor(message) {
        super(message);
        this.name = 'FormatorError';
    }
}

// FIND A WAY TO MAKE THIS FILE MORE READABLE, SIMPLER and CONSCISE

export class Formator {
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

    trim() {
        this.values.forEach((value, key) => {
            if (typeof value == this.constant.STRING) {
                this.values.set(key, value.trim());
            }
        });
    }

    lowercase() {
        this.values.forEach((value, key) => {
            if (typeof value == this.constant.STRING) {
                this.values.set(key, value.toLowerCase());
            }
        });
    }

    format() {
        try {
            this.trim();
            this.lowercase();
        } catch (error) {
            throw error;
        }
    }
}
