const customData = require('./../translations/eng.json');

export function translate(key: string): string {
    return customData[key];
}