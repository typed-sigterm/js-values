/* eslint-disable no-new-wrappers, unicorn/new-for-builtins */

export const Values: Record<string, () => any> = {
  'null': () => null,
  'undefined': () => undefined,
  'false': () => false,
  '"false"': () => 'false',
  'new Boolean(0)': () => new Boolean(0),
  '[]': () => [],
  '[[]]': () => [[]],
  '""': () => '',
  'new String()': () => new String(),
  ' 0': () => 0, // add a space to avoid key sorting
  'new Number(0)': () => new Number(0),
  '"0"': () => '0',
  'new String(0)': () => new String(0),
  '[0]': () => [0],
  'true': () => true,
  '"true"': () => 'true',
  'new Boolean(1)': () => new Boolean(1),
  ' 1': () => 1,
  'new Number(1)': () => new Number(1),
  '"1"': () => '1',
  'new String(1)': () => new String(1),
  '[1]': () => [1],
  '-1': () => -1,
  'new Number(-1)': () => new Number(-1),
  '"-1"': () => '-1',
  'new String(-1)': () => new String(-1),
  '[-1]': () => [-1],
  'Infinity': () => Infinity,
  '-Infinity': () => -Infinity,
  '{}': () => ({}),
  'NaN': () => Number.NaN,
};

export const Colors = {
  'eq3': '#f7df1e',
  'eq2': 'forestgreen',
  'le+ge': 'gray',
  'le': 'red',
  'ge': 'cornflowerblue',
  'else': 'lightgray',
} as const;
