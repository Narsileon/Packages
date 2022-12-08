import { usePage } from "@inertiajs/inertia-react";
import { upperFirst } from "lodash";

export { trans, transChoice };

//#region CONSTANTS

const KEY_SEPARATOR = '.';
const PLURAL_SEPERATOR = '|';
const TYPE_STRING = 'string';

//#endregion

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

//#endregion

//#region PRIVATE METHODS

function localize(key) {
    let table = usePage().props.shared.localization.localization;

    if (typeof key === TYPE_STRING && key.slice(0, -1).includes(KEY_SEPARATOR)) {
        return localizeNestedKey(table, key);
    } else {
        return localizePrimaryKey(table, key);
    }
}

function localizePrimaryKey(table, primaryKey) {
    let path = null;
    let key = primaryKey;

    let object = table.find(x => x.path === path && x.key === key)

    return object ? object.value : key;
}

function localizeNestedKey(table, nestedKey) {
    let index = nestedKey.lastIndexOf('.');

    let path = nestedKey.substr(0, index);
    let key = nestedKey.substr(index + 1, nestedKey.length - 1)

    let object = table.find(x => x.path === path && x.key === key)

    return object ? object.value : key;
}

function pluralize(text, count) {
    if (typeof text === TYPE_STRING && text.includes(PLURAL_SEPERATOR)) {
        let values = text.split(PLURAL_SEPERATOR);

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
