import { regexer } from './regex';
export const normalize =  normalizer => (value, previousValue, allValues, previousAllValues, name) => normalizer(value, previousValue, allValues, previousAllValues, name);
export const normalizeAlpha = value => value.replace(regexer.alpha, '');
export const normalizeNumeric = value => value.replace(regexer.numeric, '');

export const normalizeLength = limit => value => value ? value.substr(0, limit) : value;
export const normalizeNumber = limit => value => (value ? normalizeLength(limit)(normalizeNumeric(value)) : value);