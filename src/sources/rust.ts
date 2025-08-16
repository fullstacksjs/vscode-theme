import type { TokenColor } from '../types.ts';

import { Foregrounds } from '../colors.ts';

export const rust: TokenColor[] = [
  {
    name: 'Rust Keywords',
    scope: 'entity.name.function.macro.rules.rust',
    settings: {
      foreground: Foregrounds.Red,
    },
  },
  {
    name: 'Rust Namespace',
    scope: 'entity.name.namespace.rust',
    settings: {
      foreground: Foregrounds.Cyan,
    },
  },
  {
    name: 'Rust Number',
    scope: 'constant.numeric.decimal.rust',
    settings: {
      foreground: Foregrounds.Neutral,
    },
  },
  {
    name: 'Rust Punctuation',
    scope: [
      'punctuation.brackets.attribute.rust',
      'punctuation.brackets.round.rust',
      'punctuation.comma.rust',
      'variable.other.rust',
    ],
    settings: {
      foreground: Foregrounds.Neutral,
    },
  },
  {
    name: 'Rust Lifetime',
    scope: 'entity.name.type.lifetime.rust',
    settings: {
      foreground: Foregrounds.Magenta,
    },
  },
  {
    name: 'Rust Macro',
    scope: ['entity.name.function.macro.rust'],
    settings: {
      foreground: Foregrounds.Yellow,
    },
  },
  {
    name: 'Rust Function Call',
    scope: 'meta.function.call.rust',
    settings: {
      foreground: Foregrounds.Orange,
    },
  },
  {
    name: 'Rust Self',
    scope: 'variable.language.self.rust',
    settings: {
      foreground: Foregrounds.Yellow,
      fontStyle: 'bold',
    },
  },
  {
    name: 'Rust Attribute',
    scope: 'meta.attribute.rust',
    settings: {
      foreground: Foregrounds.Orange,
    },
  },
];
