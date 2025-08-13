import type { TokenColor } from '../types.ts';

import { Foregrounds } from '../colors.ts';

export const typescript: TokenColor[] = [
  {
    name: 'Type Parameter',
    scope: 'comment.line.triple-slash.directive.ts',
    settings: {
      foreground: Foregrounds.Neutral,
      fontStyle: '',
    },
  },
  {
    name: 'Type Parameter',
    scope: 'entity.name.label.tsx',
    settings: {
      fontStyle: 'bold',
    },
  },
  {
    name: 'TypeScript Keywords',
    scope:
      'keyword.operator.expression.keyof.tsx, keyword.operator.expression.typeof.tsx, keyword.operator.type.asserts.ts',
    settings: {
      foreground: Foregrounds.Red,
    },
  },
];
