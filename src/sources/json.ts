import type { TokenColor } from '../types.ts';

import { Foregrounds } from '../colors.ts';

export const json: TokenColor[] = [
  {
    name: 'JSON String',
    scope:
      'string.json, punctuation.support.type.property-name.end.json.comments',
    settings: {
      foreground: Foregrounds.Orange,
    },
  },
  {
    name: 'JSON Constant',
    scope: 'constant.language.json',
    settings: {
      foreground: Foregrounds.Blue,
    },
  },
];
