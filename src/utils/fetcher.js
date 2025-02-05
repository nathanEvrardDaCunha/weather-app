class FetcherError extends Error {
    constructor(message) {
        super(message);
        this.name = 'FetcherError';
    }
}

export class Fetcher {
    #city;
    #unit;
    #constant;

    constructor(city, unit, constant) {
        this.#city = city;
        this.#unit = unit;
        this.#constant = constant;
    }

    get city() {
        return this.#city;
    }

    get unit() {
        return this.#unit;
    }

    get constant() {
        return this.#constant;
    }

    getNestedData(obj, path) {
        return path.reduce((current, key) => {
            return current?.[key];
        }, obj);
    }

    async fetchCity() {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.constant.API_KEY}&units=${this.unit}`;

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
