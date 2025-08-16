import type { TokenColor } from '../types.ts';

import { Foregrounds } from '../colors.ts';

export const python: TokenColor[] = [
  {
    name: 'Python Number',
    scope: ['storage.type.number.python'],
    settings: {
      foreground: Foregrounds.Neutral,
    },
  },
  {
    name: 'Python Self',
    scope: ['variable.parameter.function.language.special.self.python'],
    settings: {
      foreground: Foregrounds.Yellow,
      fontStyle: 'bold',
    },
  },
  {
    name: 'Python Punctuation',
    scope: [
      'punctuation.definition.arguments.begin',
      'punctuation.definition.arguments.end',
      'punctuation.separator.arguments',
    ],
    settings: {
      foreground: Foregrounds.Neutral,
    },
  },
  {
    name: 'Python Variable',
    scope: ['meta.function-call.arguments.python'],
    settings: {
      foreground: Foregrounds.Neutral,
    },
  },
  {
    name: 'Python Magic',
    scope: ['support.function.magic.python'],
    settings: {
      foreground: Foregrounds.Magenta,
      fontStyle: 'bold',
    },
  },
  {
    name: 'Python String Operator',
    scope: ['storage.type.string.python'],
    settings: {
      foreground: Foregrounds.Magenta,
    },
  },
];
