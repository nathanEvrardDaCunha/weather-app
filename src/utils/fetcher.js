class FetcherError extends Error {
    constructor(message) {
        super(message);
        this.name = 'FetcherError';
    }
}

export class Fetcher {
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

    getNestedData(obj, path) {
        return path.reduce((current, key) => {
            return current?.[key];
        }, obj);
    }

    isImperial() {
        if (this.values.get('imperial') === true) {
            return 'imperial';
        }
        return 'metric';
    }

    async fetchCity() {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.values.get('city')}&appid=${
            this.constant.API_KEY
        }&units=${this.isImperial()}`;

        return fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                if (this.getNestedData(data, this.constant.ERROR) == this.constant.ERROR_CODE.NOT_FOUND) {
                    throw new FetcherError(`The data related to this city hasn't been found !`);
                }
                return data;
            })
            .catch((error) => {
                throw error;
            });
    }
}
