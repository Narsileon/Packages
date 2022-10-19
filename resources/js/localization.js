const t = (key, replacements = null) => {
    let text;

    if (!window._localization)
    {
        text = key;
    } else {
        text = window._localization[key] || key;
    }

    if (replacements)
    {
        Object.keys(replacements).forEach(x => {
            text = localization.replace(`:${x}`, replacements[r]);
        })
    }

    return text;
}

export default t;