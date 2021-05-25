const globalRegex = regexp => new RegExp(regexp, 'g');

export const alpha = /[^a-zA-Z]/;
export const numeric = /[^0-9]/;

export const regexer = {
  alpha: globalRegex(alpha),
  numeric: globalRegex(numeric),
};
