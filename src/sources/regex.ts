import type { TokenColor } from '../types.ts';

import { Foregrounds } from '../colors.ts';

export const regex: TokenColor[] = [
  {
    name: 'Regex',
    scope: 'string.regexp',
    settings: {
      foreground: Foregrounds.Yellow,
      fontStyle: 'bold',
    },
  },
  {
    name: 'Regex Groups',
    scope:
      'punctuation.definition.group.regexp, punctuation.definition.character-class.regexp',
    settings: {
      foreground: Foregrounds.Red,
    },
  },
  {
    name: 'Regex Operators',
    scope:
      'constant.other.character-class.regexp, keyword.operator.quantifier.regexp,keyword.operator.or.regexp, punctuation.definition.group.assertion.regexp',
    settings: {
      foreground: Foregrounds.Magenta,
      fontStyle: 'bold',
    },
  },
];
