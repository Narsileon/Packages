import { usePage } from "@inertiajs/inertia-react";

const t = (key, replacements = null) => {
    let text = localize(key);

    if (replacements) {
        Object.keys(replacements).forEach(x => {
            text = text.replace(`:${ x }`, replacements[x]);
        })
    }

    return text;
}

export { t };

//#region PRIVATE METHODS

function localize(key) {
    let table = usePage().props.localization.strings;

    if (key.includes('.')) {
        return localizeNestedKey(table, key);
    } else {
        return localizePrimaryKey(table, key);
    }
}

function localizePrimaryKey(table, key) {
    let value = table[key] || key;

    return value;
}

function localizeNestedKey(table, key) {
    let value = table;

    let keys = key.split('.');
    let failed = false;

    keys.forEach((subKey) => {
        if (value[subKey] != undefined) {
            value = value[subKey]
        } else {
            failed = true;
        }
    });

    return failed ? keys.pop() : value;
}

//#endregion
