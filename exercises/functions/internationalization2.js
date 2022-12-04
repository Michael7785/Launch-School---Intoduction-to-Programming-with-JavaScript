function greeter(locale) {
    let lang = extractLanguage(locale);
    let region = extractRegion(locale);

    switch(lang) {
        case 'en':
            if (region === 'US') {
                return 'Hey!';
            } else if (region === 'GB') {
                return 'Hello!';
            } else if (region === 'AU') {
                return 'Howdy!';
            }
        case 'fr':
            return 'Salut!';
        case 'pt':
            return 'Olá!';
        case 'de':
            return 'Hallo!';
        case 'sv':
            return 'Hej!';
        case 'af':
            return 'Haai!';
    }
}

function extractLanguage(locale) {
    return locale.slice(0, 2);
}

function extractRegion(locale) {
    return locale.slice(3, 5);
}
