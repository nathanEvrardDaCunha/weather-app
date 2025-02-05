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

    displayData(data) {
        this.htmlInformation.innerHTML = `
        <p>City: ${this.getNestedData(data, this.constant.NAME)}</p>
        <p>${this.getNestedData(data, this.constant.COUNTRY)}</p>
        `;

        // const coordLatitude = data['coord']['lat'];
        // const coordLongitude = data['coord']['lon'];
        // const visibility = data['visibility'];
        // const weatherMain = getNestedData(data, CITY_DATA.WEATHER);
        // const windDegre = data['wind']['deg'];
        // const windSpeed = data['wind']['speed'];
        // const clouds = data['clouds']['all'];
        // const temperatureFeeling = data['main']['feels_like'];
        // const humidity = data['main']['humidity'];
        // const pressure = data['main']['pressure'];
        // const temp = data['main']['temp'];
        // const tempMax = data['main']['temp_max'];
        // const tempMin = data['main']['temp_min'];

        // CITY_INFORMATION_SECTION.innerHTML = `
        // <p>City: ${cityName}</p>
        // <p>Coordonate: latitude ${coordLatitude} and longitude ${coordLongitude}</p>
        // <p>${country}</p>
        // <p>Main: ${weatherMain}</p>
        // <p>Clouds: ${clouds}</p>
        // <p>Visibility: ${visibility}</p>
        // <p>Wind: ${windDegre} degree and for ${windSpeed} speed</p>
        // <p>Feels like: ${temperatureFeeling}</p>
        // <p>Humidity: ${humidity}</p>
        // <p>Pressure: ${pressure}</p>
        // <p>Average Temp: ${temp}</p>
        // <p>Min Temp: ${tempMin}</p>
        // <p>Max Temp: ${tempMax}</p>
        // `;
    }
}
