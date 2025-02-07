import { CONSTANT, FORM_CONST, MESSAGE } from './config/const-config';
import { Formator } from './utils/formator';
import { Validator } from './utils/validator';
import { Definer } from './utils/definer';
import { CITY_API, CITY_DATA } from './config/api-config';
import { Messenger } from './utils/messenger';
import { Fetcher } from './utils/fetcher';

const cityForm = document.getElementById('city-form');
const cityName = document.getElementById('city-name');
const cityError = document.getElementById('city-error');
const cityInformation = document.getElementById('city-information');
const imperialToggle = document.getElementById('imperial-toggle');

// IDEA: Rename files to DataValidator ; DataFetcher ; DataDisplayer ; DataDefiner ; DataFormator ?
// Might be a good idea to do that later when there are more data type other than just city name (example: longitude and latitude).
// TEST: Create unit test ?

cityForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const messenger = new Messenger(cityError, cityInformation, CITY_DATA);

    // DOCS: Are all those objects purged after the event ?
    // If not, it mean they stack upon themselves.

    // const formValues = {
    //     city: cityName.value,
    //     unit: imperialToggle.checked,
    // };

    const formValues = new Map();
    formValues.set('city', cityName.value);
    formValues.set('imperial', imperialToggle.checked);

    // TODO: Add and get the Unit (metric or imperial) from the form.
    try {
        // IDEA: Might refactor the definer class as Static class.
        // IDEA: Return the updated values in a single variable instead of just throwing errors.
        const definor = new Definer(formValues, CONSTANT);
        definor.define();
        const formator = new Formator(definor.values, CONSTANT);
        formator.format();
        const validator = new Validator(formator.values, CONSTANT);
        validator.validate();

        const fetcher = new Fetcher(validator.values, CITY_API);
        const result = await fetcher.fetchCity();
        messenger.displayData(result);

        messenger.displayError(MESSAGE.EMPTY_MESSAGE);
    } catch (error) {
        messenger.displayData(MESSAGE.EMPTY_MESSAGE);

        messenger.displayError(error);
    }
});

cityForm.addEventListener('reset', (event) => {
    event.preventDefault();

    cityName.value = '';
});
