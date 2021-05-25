import { createSelector } from 'reselect';
import { get } from 'lodash/fp';

export const getValueFromSelector = selector => createSelector(
  selector,
  value => value,
);

export const  getSelector = getValueFromSelector((state, name) => get(name)(state));

export const extendSelectorWithNamespace = selector => (state, name) => (name ? getSelector(selector(state), name) : selector(state));
export const createSliceSelector = sliceName => extendSelectorWithNamespace(state => getSelector(state, sliceName));
export const getValueAtPath = objectPath => getValueFromSelector(createSliceSelector(objectPath));

export const createValueSelector = rootReducerNamespace => form => (state, name) => getSelector(getSelector(state, rootReducerNamespace), `${form}.values.${name}`);
