const t = (key, replacements = null) => {
    let text = window._localization[key] || key;

    if (replacements)
    {
        Object.keys(replacements).forEach(x => {
            text = localization.replace(`:${x}`, replacements[r]);
        })
    }

    return text;
}

export default t;