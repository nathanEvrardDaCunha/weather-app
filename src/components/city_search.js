const CITY_FORM_ELEMENT = document.getElementById('city-form');
const CITY_NAME_INPUT = document.getElementById('city-name');
const SHORTEST_CITY_NAME_WORLDWIDE = 1; // Sweden city name
const LONGUEST_CITY_NAME_WORLDWIDE = 85; // Taumata fullname

class FormError extends Error {
    constructor(message) {
        super(message);
        this.name = 'FormError';
    }
}

// TODO: Check data => (Create test ?)
// TODO: Format data => (Create test ?)
// TODO: Sanitize data => (Create test ?)
// TODO: Display data to HTML tags
const formatData = (value) => {
    return value.toLowerCase().trim();
};

const isNull = (name, value) => {
    if (value === null) {
        throw new FormError(`> ERROR: ${name} is null !`);
    }
};

const isUndefined = (name, value) => {
    if (value === undefined) {
        throw new FormError(`> ERROR: ${name} is undefined !`);
    }
};

const isTooShort = (name, value, limiter) => {
    if (value.length < limiter) {
        throw new FormError(`> ERROR: ${name} is too short !`);
    }
};

const isTooLong = (name, value, limiter) => {
    if (value.length > limiter) {
        throw new FormError(`> ERROR: ${name} is too long !`);
    }
};

const isNotString = (name, value) => {
    if (typeof value !== 'string') {
        throw new FormError(`> ERROR: ${name} is not a string !`);
    }
};

const isAlphabetic = (name, value) => {
    const regex = /^[A-Za-z]+$/;
    if (!value.match(regex)) {
        throw new FormError(
            `> ERROR: ${name} contain characters other than letters !`
        );
    }
};

const verifyData = (name, data) => {
    try {
        isNull(name, data);
        isUndefined(name, data);
        isTooShort(name, data, SHORTEST_CITY_NAME_WORLDWIDE);
        isTooLong(name, data, LONGUEST_CITY_NAME_WORLDWIDE);
        isNotString(name, data);
        isAlphabetic(name, data);
        return 0;
    } catch (error) {
        return error;
    }
};

// TODO: Separate this file into DataVerificator ; DataFetchor ; DataDisplayor ?

CITY_FORM_ELEMENT.addEventListener('submit', (event) => {
    event.preventDefault();

    const formatedCity = formatData(String(CITY_NAME_INPUT.value));
    const name = 'City';

    const verificationErrors = verifyData(name, formatedCity);
    if (verificationErrors === 0) {
        console.log('Good');
    } else {
        console.log('Bad' + verificationErrors.message);
    }

    // displayWeather(city);
});

// TODO: Create informative message ?
CITY_FORM_ELEMENT.addEventListener('reset', (event) => {
    event.preventDefault();

    CITY_NAME_INPUT.value = '';
});
