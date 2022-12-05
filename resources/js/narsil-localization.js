import { usePage } from "@inertiajs/inertia-react";
import { upperFirst } from "lodash";

export { trans, transChoice, transRaw };

//#region PUBLIC METHODS

const trans = (key, replacements = null) => {
    let text = localize(key);

    if (replacements) {
        text = replace(text, replacements);
    }

    return text;
}

const transChoice = (key, count, replacements = null) => {
    let text = localize(key);

    text = pluralize(text, count)

    if (replacements) {
        text = replace(text, replacements);
    }

    return text;
}

const transRaw = (key) => {
    let table = usePage().props.shared.localization.dictionary;

    return localizePrimaryKey(table, key);
}

//#endregion

//#region PRIVATE METHODS

function localize(key) {
    let table = usePage().props.shared.localization.dictionary;

    if (key.slice(0, -1).includes('.')) {
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
    if (text.includes('|')) {
        let values = text.split('|');

        if (count > 1 ) {
            return values[1];
        } else {
            return values[0];
        }
    } else {
        return text;
    }
}

function replace(text, replacements) {
    Object.keys(replacements).forEach(x => {
        if (text.includes(x)) {
            text = text.replace(`:${ x }`, replacements[x]);
        } else if(text.includes(upperFirst(x))) {
            text = text.replace(`:${ upperFirst(x) }`, upperFirst(replacements[x]));
        }
    })

    return text;
}

//#endregion
