class DefinerError extends Error {
    constructor(message) {
        super(message);
        this.name = 'DefinerError';
    }
}

export class Definer {
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

    isNull() {
        if (this.value === this.constant.NULL) {
            throw new DefinerError(`${this.name} is null !`);
        }
    }

    isUndefined() {
        if (this.value === this.constant.UNDEFINED) {
            throw new DefinerError(`${this.name} is undefined !`);
        }
    }

    isNotString() {
        if (typeof this.value != this.constant.STRING) {
            throw new DefinerError(`${this.name} is not a string !`);
        }
    }

    define() {
        try {
            this.isNull();
            this.isUndefined();
            this.isNotString();
        } catch (error) {
            throw error;
        }
    }
}
