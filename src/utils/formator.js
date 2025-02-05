class FormatorError extends Error {
    constructor(message) {
        super(message);
        this.name = 'FormatorError';
    }
}

export class Formator {
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

    set value(value) {
        this.#value = value;
    }

    // BUG: Can't input 'new zealand'
    trim() {
        if (typeof this.value != this.constant.STRING) {
            throw new FormatorError(`${this.name} is not a string !`);
        }
        this.value = this.value.trim();
    }

    lowercase() {
        if (typeof this.value != this.constant.STRING) {
            throw new FormatorError(`${this.name} is not a string !`);
        }
        this.value = this.value.toLowerCase();
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
