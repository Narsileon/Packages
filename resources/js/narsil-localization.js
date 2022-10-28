import { usePage } from "@inertiajs/inertia-react";

const t = (key, replacements = null) => {
    let text = localize(key);

    if (replacements) {
        text = replace(text, replacements);
    }

    return text;
}

const p = (key, count, replacements = null) => {
    let text = localize(key);

    text = pluralize(text, count)

    if (replacements) {
        text = replace(text, replacements);
    }

    return text;
}

export { t, p };

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

function pluralize(text, count) {
    let values = text.split('|');

    if (count > 1 ) {
        return values[1];
    } else {
        return values[0];
    }
}

function replace(text, replacements) {
    Object.keys(replacements).forEach(x => {
        text = text.replace(`:${ x }`, replacements[x]);
    })

    return text;
}

//#endregion
