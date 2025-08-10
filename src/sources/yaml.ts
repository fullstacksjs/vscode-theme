import type { TokenColor } from '../types.ts';

import { Foregrounds } from '../colors.ts';

export const yaml: TokenColor[] = [
  {
    name: 'Key',
    scope: 'meta.map.key.yaml',
    settings: {
      foreground: Foregrounds.Red,
    },
  },
  {
    name: 'String',
    scope: 'string.unquoted.plain.out.yaml',
    settings: {
      foreground: Foregrounds.Neutral,
    },
  },
  {
    name: 'Block Scalar',
    scope:
      'keyword.control.flow.block-scalar.literal.yaml, keyword.control.flow.block-scalar.folded.yaml',
    settings: {
      foreground: Foregrounds.Neutral,
    },
  },
];
