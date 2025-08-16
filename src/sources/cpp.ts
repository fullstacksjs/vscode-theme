import type { TokenColor } from '../types.ts';

import { Foregrounds } from '../colors.ts';

export const cpp: TokenColor[] = [
  {
    name: 'C++ Keywords',
    scope: 'entity.name.function.definition.special.constructor.cpp',
    settings: {
      foreground: Foregrounds.Red,
    },
  },
  {
    name: 'C++ Type',
    scope: 'storage.type.template.argument.T.cpp',
    settings: {
      foreground: Foregrounds.Blue,
    },
  },
  {
    name: 'C++ Label',
    scope: 'entity.name.label.cpp',
    settings: {
      fontStyle: 'bold',
    },
  },
  {
    name: 'C++ Include',
    scope: 'string.quoted.other.lt-gt.include.cpp',
    settings: {
      foreground: Foregrounds.Blue,
    },
  },
  {
    name: 'C++ Punctuation',
    scope: 'support.other.attribute.cpp',
    settings: {
      foreground: Foregrounds.Magenta,
    },
  },

  {
    name: 'C++ Function Call',
    scope: [
      'entity.name.function.call.cpp',
      'entity.name.function.preprocessor.cpp',
    ],
    settings: {
      foreground: Foregrounds.Orange,
    },
  },
  {
    name: 'C++ Scope Resolution',
    scope: [
      'entity.name.scope-resolution.cpp',
      'entity.name.scope-resolution.function.call.cpp',
    ],
    settings: {
      foreground: Foregrounds.Cyan,
    },
  },
];
