export class DataUtils {
    static isNull(value) {
        return value === null;
    }

    static isUndefined(value) {
        return value === undefined;
    }

    static isString(value) {
        return typeof value === 'string';
    }

    static isBoolean(value) {
        return typeof value === 'boolean';
    }

    static getNestedData(obj, path) {
        return path.reduce((current, key) => {
            return current?.[key];
        }, obj);
    }
}
