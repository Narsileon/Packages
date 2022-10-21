import { usePage } from "@inertiajs/inertia-react";

const t = (key, replacements = null) => {
    let text = findValue(key);

    if (replacements) {
        Object.keys(replacements).forEach(x => {
            text = text.replace(`:${ x }`, replacements[x]);
        })
    }

    return text;
}

export { t };

function findValue(key) {
    let failed = false;
    let link = usePage().props.localization.strings;

    if (key.includes('.'))
    {
        key.split('.').forEach((subKey) => {
            if (link[subKey] != undefined) {
                link = link[subKey]
            } else {
                failed = true;
            }
        });        
    } else {
        link = link[key] || key;
    }

    return failed ? key : link;
}