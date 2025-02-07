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

// TODO: Rename files to DataValidator ; DataFetcher ; DataDisplayer ; DataDefiner ; DataFormator ?
// Might be a good idea to do that later when there are more data type other than just city name (example: longitude and latitude).
// TODO: Create unit test ?

cityForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const messenger = new Messenger(cityError, cityInformation, CITY_DATA);

    // TODO: Are all those objects purged after the event ?
    // If not, it mean they stack upon themselves.

    // TODO: Add and get the Unit (metric or imperial) from the form.
    try {
        const definor = new Definer(CITY_API.CITY_NAME, cityName.value, CONSTANT);
        definor.define();
        const formator = new Formator(definor.name, definor.value, definor.constant);
        formator.format();
        const validator = new Validator(formator.name, formator.value, formator.constant);
        validator.validate();

        const fetcher = new Fetcher(validator.value, 'metric', CITY_API);
        const result = await fetcher.fetchCity();
        messenger.displayData(result);

        messenger.displayError(MESSAGE.EMPTY_MESSAGE);
    } catch (error) {
        messenger.displayError(error);
    }
});

cityForm.addEventListener('reset', (event) => {
    event.preventDefault();

    cityName.value = '';
});
