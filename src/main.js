import { CONSTANT, FORM_CONST, MESSAGE } from './config/const-config';
// import { Formator } from './utils/formator';
import { Validator } from './utils/validator';
// import { Definer } from './utils/definer';
import { CITY_API, CITY_DATA } from './config/api-config';
import { Messenger } from './utils/messenger';
import { Fetcher } from './utils/fetcher';
// TEMPORARY SEPERATION
import { DataFormator } from './utilss/data-formator';
import { DataValidator } from './utilss/data-validator';
import { DataFetcher } from './utilss/data-fetcher';

// FIND A WAY TO MAKE THIS FILE MORE READABLE, SIMPLER and CONSCISE

const cityForm = document.getElementById('city-form');
const cityName = document.getElementById('city-name');
const cityError = document.getElementById('city-error');
const cityInformation = document.getElementById('city-information');
const imperialToggle = document.getElementById('imperial-toggle');
const userLocation = document.getElementById('user-location');

// TEST: Create unit test ?

// REFACTOR: Need to refactor everything to be more readable and simpler.
cityForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const messenger = new Messenger(cityError, cityInformation, CITY_DATA);

    let formValues = new Map();
    formValues.set('city', cityName.value);
    formValues.set('imperial', imperialToggle.checked);

    // IDEA: May be a good idea to add default values in case there is missing inputs.

    try {
        // BUG: "    " is not a city and should be refused.

        formValues = DataFormator.trimValues(formValues);
        formValues = DataFormator.lowerCaseValues(formValues);
        DataValidator.isLong(formValues);
        DataValidator.isShort(formValues);
        const result = await DataFetcher.fetchWeather(formValues);

        messenger.displayData(result);
        messenger.displayError(MESSAGE.EMPTY_MESSAGE);
    } catch (error) {
        messenger.displayData(MESSAGE.EMPTY_MESSAGE);
        console.log(error);
        messenger.displayError(error);
    }
});

cityForm.addEventListener('reset', (event) => {
    event.preventDefault();

    cityName.value = '';
});

// REFACTOR: Need to refactor everything to be more readable and simpler.
userLocation.addEventListener('click', async () => {
    const messenger = new Messenger(cityError, cityInformation, CITY_DATA);

    try {
        const formValues = new Map();
        formValues.set('city', null);
        formValues.set('imperial', imperialToggle.checked);

        const location = await DataFetcher.fetchLocation();
        formValues.set('city', location);
        const result = await DataFetcher.fetchWeather(formValues);

        messenger.displayData(result);
        messenger.displayError(MESSAGE.EMPTY_MESSAGE);
    } catch (error) {
        messenger.displayError(error);
    }
});
