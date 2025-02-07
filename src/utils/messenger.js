export class Messenger {
    #htmlError;
    #htmlInformation;
    #constant;

    constructor(htmlError, htmlInformation, constant) {
        this.#htmlError = htmlError;
        this.#htmlInformation = htmlInformation;
        this.#constant = constant;
    }

    get htmlError() {
        return this.#htmlError;
    }

    get htmlInformation() {
        return this.#htmlInformation;
    }

    get constant() {
        return this.#constant;
    }

    getNestedData(obj, path) {
        return path.reduce((current, key) => {
            return current?.[key];
        }, obj);
    }

    displayError(error) {
        this.htmlError.innerHTML = `
        <p>${error}</p>
        `;
    }

    displayMessage(message) {
        this.htmlInformation.innerHTML = `
        <p>${message}</p>
        `;
    }

    // IDEA: Need to implement a way to clean the data display in case there is a error.
    displayData(data) {
        this.htmlInformation.innerHTML = `
        <p>City: ${this.getNestedData(data, this.constant.NAME)}</p>
        <p>Country: ${this.getNestedData(data, this.constant.COUNTRY)}</p>
        <p>Latitude: ${this.getNestedData(data, this.constant.LATITUDE)}</p>
        <p>Longitude: ${this.getNestedData(data, this.constant.LONGITUDE)}</p>
        <p>Weather: ${this.getNestedData(data, this.constant.WEATHER)}</p>
        <p>Visibility: ${this.getNestedData(data, this.constant.VISIBILITY)}</p>
        <p>Cloud: ${this.getNestedData(data, this.constant.CLOUD)}</p>
        <p>Humidity: ${this.getNestedData(data, this.constant.HUMIDITY)}</p>
        <p>Pressure: ${this.getNestedData(data, this.constant.PRESSURE)}</p>
        <p>Wind Deg: ${this.getNestedData(data, this.constant.WIND_DEG)}</p>
        <p>Wind Speed: ${this.getNestedData(data, this.constant.WIND_SPEED)}</p>
        <p>Temp Feel: ${this.getNestedData(data, this.constant.TEMP_FEEL)}</p>
        <p>Temp Avg: ${this.getNestedData(data, this.constant.TEMP_AVG)}</p>
        <p>Temp Min: ${this.getNestedData(data, this.constant.TEMP_MIN)}</p>
        <p>Temp Max: ${this.getNestedData(data, this.constant.TEMP_MAX)}</p>
        `;
    }
}
