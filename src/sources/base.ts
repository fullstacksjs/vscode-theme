import type { TokenColor } from '../types.ts';

import { Foregrounds } from '../colors.ts';

export const base: TokenColor[] = [
  {
    name: 'Punctuation',
    scope: [
      'storage.type.function.arrow',
      'keyword.operator',
      'meta.brace',
      'punctuation.accessor',
      'punctuation.separator.comma',
    ],
    settings: {
      foreground: Foregrounds.Neutral,
    },
  },
  {
    name: 'Comment',
    scope: 'comment.line, comment.block, punctuation.definition.comment',
    settings: {
      foreground: Foregrounds.Muted,
      fontStyle: 'italic',
    },
  },
  {
    name: 'Keyword',
    scope:
      'keyword, storage.type, storage.modifier, variable.language.this, variable.language.super',
    settings: {
      foreground: Foregrounds.Red,
    },
  },
  {
    name: 'String',
    scope: 'string',
    settings: {
      foreground: Foregrounds.Green,
    },
  },
  {
    name: 'Decorator',
    scope: ['entity.name.function.decorator', 'meta.function.decorator'],
    settings: {
      fontStyle: 'bold',
    },
  },
  {
    name: 'TypeScript Values',
    scope: ['constant.language', 'storage.type.numeric.bigint'],
    settings: {
      foreground: Foregrounds.Magenta,
    },
  },
  {
    name: 'Variable',
    scope: 'meta.definition.property',
    settings: {
      foreground: Foregrounds.Neutral,
    },
  },
  {
    name: 'Type Operator',
    scope: 'keyword.operator.type',
    settings: {
      foreground: Foregrounds.Neutral,
    },
  },
  {
    name: 'Type',
    scope: 'entity.name.type',
    settings: {
      foreground: Foregrounds.Blue,
    },
  },
  {
    name: 'Primitive Type',
    scope: 'support.type.primitive, support.type.builtin',
    settings: {
      foreground: Foregrounds.Cyan,
    },
  },
  {
    name: 'Function Call',
    scope: 'meta.function-call',
    settings: {
      foreground: Foregrounds.Orange,
    },
  },
  {
    name: 'Class',
    scope: 'support.class',
    settings: {
      foreground: Foregrounds.Red,
    },
  },
  {
    name: 'Tag',
    scope: 'entity.name.tag, keyword.other.doctype',
    settings: {
      foreground: Foregrounds.Red,
    },
  },
  {
    name: 'Tag Attributes',
    scope: 'meta.tag.attributes',
    settings: {
      foreground: Foregrounds.Neutral,
    },
  },
];
