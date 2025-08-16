import type { TokenColor } from '../types.ts';

import { Foregrounds } from '../colors.ts';

export const java: TokenColor[] = [
  {
    name: 'Java Punctuation',
    scope: [
      'punctuation.separator.delimiter.java',
      'keyword.control.ternary.java',
    ],
    settings: {
      foreground: Foregrounds.Neutral,
    },
  },
  {
    name: 'Java Types',
    scope: ['storage.type.java', 'storage.type.generic.java'],
    settings: {
      foreground: Foregrounds.Blue,
    },
  },
  {
    name: 'Java Primitive',
    scope: 'storage.type.primitive.java',
    settings: {
      foreground: Foregrounds.Magenta,
    },
  },
  {
    name: 'Java Values',
    scope: [
      'constant.numeric.decimal.java',
      'storage.modifier.import.java',
      'storage.modifier.package.java',
      'meta.function-call.java',
    ],
    settings: {
      foreground: Foregrounds.Neutral,
    },
  },
  {
    name: 'Java Enums',
    scope: ['constant.other.enum.java', 'entity.name.type.enum.java'],
    settings: {
      foreground: Foregrounds.Cyan,
    },
  },
];
