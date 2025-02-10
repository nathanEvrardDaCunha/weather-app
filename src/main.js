import { DataFormator } from './utils/data-formator';
import { DataValidator } from './utils/data-validator';
import { DataFetcher } from './utils/data-fetcher';
import { DataDisplayer } from './utils/data-displayer';

const cityForm = document.getElementById('city-form');
const cityName = document.getElementById('city-name');
const cityError = document.getElementById('city-error');
const cityInformation = document.getElementById('city-information');
const imperialToggle = document.getElementById('imperial-toggle');
const userLocation = document.getElementById('user-location');

// TEST: Create unit test ?

cityForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    // IDEA: May be a good idea to add default values in case there is missing inputs.

    try {
        let formValues = new Map();
        formValues.set('city', cityName.value);
        formValues.set('imperial', imperialToggle.checked);
        formValues = DataFormator.trimValues(formValues);
        formValues = DataFormator.lowerCaseValues(formValues);
        DataValidator.isLong(formValues);
        DataValidator.isShort(formValues);
        DataValidator.isAlphabetical(formValues);
        const result = await DataFetcher.fetchWeather(formValues);

        DataDisplayer.displayData(result, cityInformation);
        DataDisplayer.cleaMessage(cityError);
    } catch (error) {
        DataDisplayer.cleaMessage(cityInformation);
        DataDisplayer.displayMessage(error, cityError);
    }
});

cityForm.addEventListener('reset', (event) => {
    event.preventDefault();

    cityName.value = '';
});

userLocation.addEventListener('click', async () => {
    try {
        const formValues = new Map();
        formValues.set('city', null);
        formValues.set('imperial', imperialToggle.checked);

        const location = await DataFetcher.fetchLocation();
        formValues.set('city', location);
        const result = await DataFetcher.fetchWeather(formValues);

        DataDisplayer.displayData(result, cityInformation);
        DataDisplayer.cleaMessage(cityError);
    } catch (error) {
        DataDisplayer.cleaMessage(cityInformation);
        DataDisplayer.displayMessage(error, cityError);
    }
});
