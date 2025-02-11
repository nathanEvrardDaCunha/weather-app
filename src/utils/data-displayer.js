import { DataUtils } from './data-utils';
import { API_CONST_DATA } from '../config/global-const';

export class DataDisplayer extends DataUtils {
    static displayMessage(message, element) {
        element.innerHTML = `
        <p class="pd-md">${message}</p>
        `;
    }

    static cleaMessage(element) {
        element.innerHTML = `
        `;
    }

    static displayData(values, element) {
        element.innerHTML = `
        <div class="pd-md">
            <table>
                <caption>Weather Data</caption>
                <thead>
                    <tr>
                        <th scope="col">Label</th>
                        <th scope="col">Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td scope="row"><strong>City</strong></th>
                        <td scope="row">${this.getNestedData(values, API_CONST_DATA.NAME)}</th>
                    </tr>
                    <tr>
                        <td scope="row"><strong>Country</strong></th>
                        <td scope="row">${this.getNestedData(values, API_CONST_DATA.COUNTRY)}</th>
                    </tr>
                    <tr>
                        <td scope="row"><strong>Latitude</strong></th>
                        <td scope="row">${this.getNestedData(values, API_CONST_DATA.LATITUDE)}</th>
                    </tr>
                                        <tr>
                        <td scope="row"><strong>Longitude</strong></th>
                        <td scope="row">${this.getNestedData(values, API_CONST_DATA.LONGITUDE)}</th>
                    </tr>
                    <tr>
                        <td scope="row"><strong>Weather</strong></th>
                        <td scope="row">${this.getNestedData(values, API_CONST_DATA.WEATHER)}</th>
                    </tr>
                    <tr>
                        <td scope="row"><strong>Visibility</strong></th>
                        <td scope="row">${this.getNestedData(values, API_CONST_DATA.VISIBILITY)}</th>
                    </tr>
                    <tr>
                        <td scope="row"><strong>Cloud</strong></th>
                        <td scope="row">${this.getNestedData(values, API_CONST_DATA.CLOUD)}</th>
                    </tr>
                    <tr>
                        <td scope="row"><strong>Humidity</strong></th>
                        <td scope="row">${this.getNestedData(values, API_CONST_DATA.HUMIDITY)}</th>
                    </tr>
                    <tr>
                        <td scope="row"><strong>Pressure</strong></th>
                        <td scope="row">${this.getNestedData(values, API_CONST_DATA.PRESSURE)}</th>
                    </tr>
                    <tr>
                        <td scope="row"><strong>Wind Deg</strong></th>
                        <td scope="row">${this.getNestedData(values, API_CONST_DATA.WIND_DEG)}</th>
                    </tr>
                    <tr>
                        <td scope="row"><strong>Wind Speed</strong></th>
                        <td scope="row">${this.getNestedData(values, API_CONST_DATA.WIND_SPEED)}</th>
                    </tr>
                    <tr>
                        <td scope="row"><strong>Temp Feel</strong></th>
                        <td scope="row">${this.getNestedData(values, API_CONST_DATA.TEMP_FEEL)}</th>
                    </tr>
                    <tr>
                        <td scope="row"><strong>Temp Avg</strong></th>
                        <td scope="row">${this.getNestedData(values, API_CONST_DATA.TEMP_AVG)}</th>
                    </tr>
                    <tr>
                        <td scope="row"><strong>Temp Min</strong></th>
                        <td scope="row">${this.getNestedData(values, API_CONST_DATA.TEMP_MIN)}</th>
                    </tr>
                    <tr>
                        <td scope="row"><strong>Temp Max</strong></th>
                        <td scope="row">${this.getNestedData(values, API_CONST_DATA.TEMP_MAX)}</th>
                    </tr>
                </tbody>
            </table>
        </div>
        `;
    }
}
