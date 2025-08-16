import type { TokenColor } from '../types.ts';

import { Foregrounds } from '../colors.ts';

export const typescript: TokenColor[] = [
  {
    name: 'TypeScript Punctuation',
    scope: 'constant.language.import-export-all',
    settings: {
      foreground: Foregrounds.Neutral,
      fontStyle: 'italic',
    },
  },
  {
    name: 'TypeScript Number',
    scope: 'constant.numeric.decimal.tsx',
    settings: {
      foreground: Foregrounds.Neutral,
    },
  },
  {
    name: 'Type Parameter',
    scope: 'comment.line.triple-slash.directive.ts',
    settings: {
      foreground: Foregrounds.Neutral,
      fontStyle: '',
    },
  },
  {
    name: 'TypeScript Label',
    scope: ['meta.decorator.js', 'meta.decorator.tsx'],
    settings: {
      foreground: Foregrounds.Orange,
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
    scope: [
      'keyword.operator.expression.keyof.tsx',
      'keyword.operator.expression.typeof.tsx',
      'keyword.operator.type.asserts.ts',
      'keyword.operator.expression.instanceof',
    ],
    settings: {
      foreground: Foregrounds.Red,
    },
  },
  {
    name: 'TypeScript Primitive',
    scope: ['support.type.primitive.tsx', 'support.type.builtin.tsx'],
    settings: {
      foreground: Foregrounds.Cyan,
    },
  },
];
