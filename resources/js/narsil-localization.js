import { usePage } from "@inertiajs/inertia-react";

const t = (key, replacements = null) => {
    const strings = usePage().props.localization.strings

    let text;

    if (!strings) {
        text = key;
    } else {
        text = strings[key] || key;
    }

    if (replacements) {
        Object.keys(replacements).forEach(x => {
            text = t.replace(`:${x}`, replacements[r]);
        })
    }

    return text;
}

export { t };