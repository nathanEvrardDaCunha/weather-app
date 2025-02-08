import { DataUtils } from './data-utils';
import { API_CONST_DATA } from '../config/global-const';

export class DataDisplayer extends DataUtils {
    static displayMessage(message, element) {
        element.innerHTML = `
        <p>${message}</p>
        `;
    }

    static cleaMessage(element) {
        element.innerHTML = `
        `;
    }

    static displayData(values, element) {
        element.innerHTML = `
        <p>City: ${this.getNestedData(values, API_CONST_DATA.NAME)}</p>
        <p>Country: ${this.getNestedData(values, API_CONST_DATA.COUNTRY)}</p>
        <p>Latitude: ${this.getNestedData(values, API_CONST_DATA.LATITUDE)}</p>
        <p>Longitude: ${this.getNestedData(values, API_CONST_DATA.LONGITUDE)}</p>
        <p>Weather: ${this.getNestedData(values, API_CONST_DATA.WEATHER)}</p>
        <p>Visibility: ${this.getNestedData(values, API_CONST_DATA.VISIBILITY)}</p>
        <p>Cloud: ${this.getNestedData(values, API_CONST_DATA.CLOUD)}</p>
        <p>Humidity: ${this.getNestedData(values, API_CONST_DATA.HUMIDITY)}</p>
        <p>Pressure: ${this.getNestedData(values, API_CONST_DATA.PRESSURE)}</p>
        <p>Wind Deg: ${this.getNestedData(values, API_CONST_DATA.WIND_DEG)}</p>
        <p>Wind Speed: ${this.getNestedData(values, API_CONST_DATA.WIND_SPEED)}</p>
        <p>Temp Feel: ${this.getNestedData(values, API_CONST_DATA.TEMP_FEEL)}</p>
        <p>Temp Avg: ${this.getNestedData(values, API_CONST_DATA.TEMP_AVG)}</p>
        <p>Temp Min: ${this.getNestedData(values, API_CONST_DATA.TEMP_MIN)}</p>
        <p>Temp Max: ${this.getNestedData(values, API_CONST_DATA.TEMP_MAX)}</p>
        `;
    }
}
